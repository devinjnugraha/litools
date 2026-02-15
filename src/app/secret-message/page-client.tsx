"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Item, ItemContent } from "@/components/ui/item";
import { LockKeyholeIcon, LockOpenIcon, EraserIcon, ChevronDownIcon, KeyIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { encryptMessage, decryptMessage } from "@/lib/crypto";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { CopyButton } from "@/components/ui/copy-button";
import { TabGroup } from "@/components/ui/tab-group";

export default function SecretMessageClientPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const activeTab = searchParams.get("tab") === "decrypt" ? "decrypt" : "encrypt";
    const [input, setInput] = useState("");
    const [customKey, setCustomKey] = useState("");
    const [showCustomKey, setShowCustomKey] = useState(false);
    const [output, setOutput] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleProcess = () => {
        if (!input) {
            setOutput("");
            setError(null);
            return;
        }

        if (activeTab === "encrypt") {
            const encrypted = encryptMessage(input, customKey || undefined);
            if (encrypted) {
                setOutput(encrypted);
                setError(null);
            } else {
                setOutput("");
                setError("Encryption failed");
            }
        } else {
            const decrypted = decryptMessage(input, customKey || undefined);
            if (decrypted) {
                setOutput(decrypted);
                setError(null);
            } else {
                setOutput("");
                setError("Invalid secret message or wrong key");
            }
        }
    };

    const handleReset = () => {
        setInput("");
        setOutput("");
        setError(null);
    };

    const handleTabChange = (tab: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("tab", tab);
        router.replace(`${pathname}?${params.toString()}`);
        handleReset();
    };

    const resultRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (output && resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [output]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
            handleProcess();
        }
    };

    return (
        <div className="grid gap-6">
            <TabGroup
                items={[
                    { value: "encrypt", label: "Encrypt", icon: LockKeyholeIcon },
                    { value: "decrypt", label: "Decrypt", icon: LockOpenIcon },
                ]}
                value={activeTab}
                onValueChange={handleTabChange}
            />

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    <Card>
                        <CardContent className="grid gap-4">
                            <div className="flex items-center justify-between">
                                <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="h-8 px-2 text-muted-foreground gap-1.5"
                                    onClick={() => setShowCustomKey(!showCustomKey)}
                                >
                                    <KeyIcon className="size-3.5" />
                                    <span className="text-xs">Custom Key</span>
                                    <ChevronDownIcon className={cn("size-3 transition-transform", showCustomKey && "rotate-180")} />
                                </Button>
                                
                                <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="h-8 px-2 text-muted-foreground hover:text-destructive gap-1.5"
                                    onClick={handleReset}
                                    disabled={!input && !output}
                                >
                                    <EraserIcon className="size-3.5" />
                                    <span className="text-xs">Clear</span>
                                </Button>
                            </div>

                            <AnimatePresence>
                                {showCustomKey && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <Field className="gap-2 pb-2 px-1">
                                            <FieldLabel htmlFor="custom-key" className="text-xs">
                                                Secret Key (Optional)
                                            </FieldLabel>
                                            <Input 
                                                id="custom-key"
                                                type="password"
                                                placeholder="Leave empty for default key"
                                                value={customKey}
                                                onChange={(e) => setCustomKey(e.target.value)}
                                                className="h-8 text-sm font-mono placeholder:font-sans"
                                                autoComplete="off"
                                            />
                                            <p className="text-[10px] text-muted-foreground">
                                                Use the same key for decryption.
                                            </p>
                                        </Field>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <Field className="gap-2">
                                <FieldLabel htmlFor="secret-input">
                                    {activeTab === "encrypt" ? "Message to Encrypt" : "Secret Message to Decrypt"}
                                </FieldLabel>
                                <Textarea
                                    id="secret-input"
                                    className={cn(
                                        "min-h-[120px] max-h-[300px] overflow-y-auto font-mono text-sm",
                                        activeTab === "encrypt" ? "whitespace-pre-wrap" : "break-all"
                                    )}
                                    placeholder={
                                        activeTab === "encrypt"
                                            ? "Enter your secret message here (Ctrl+Enter to encrypt)..."
                                            : "Paste the encrypted message here (Ctrl+Enter to decrypt)..."
                                    }
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                            </Field>

                            <Button onClick={handleProcess} disabled={!input}>
                                {activeTab === "encrypt" ? "Encrypt Message" : "Decrypt Message"}
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            </AnimatePresence>

            {error && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-red-500 text-sm font-medium text-center bg-red-500/10 py-2 rounded-md"
                >
                    {error}
                </motion.div>
            )}

            {output && !error && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    <Item variant="outline" className="border-0 shadow-sm relative overflow-hidden bg-muted/30" ref={resultRef}>
                        <ItemContent className="gap-2 w-full">
                            <div className="flex justify-between items-center">
                                <p className="text-muted-foreground text-sm font-medium">
                                    {activeTab === "encrypt" ? "Encrypted Result" : "Decrypted Message"}
                                </p>
                                <CopyButton value={output} className="text-muted-foreground hover:bg-transparent hover:text-foreground" />
                            </div>
                            <div className={cn(
                                "bg-background border p-3 rounded-md font-mono text-sm max-h-[300px] overflow-y-auto",
                                activeTab === "encrypt" ? "break-all" : "whitespace-pre-wrap"
                            )}>
                                {output}
                            </div>
                        </ItemContent>
                    </Item>
                </motion.div>
            )}
        </div>
    );
}
