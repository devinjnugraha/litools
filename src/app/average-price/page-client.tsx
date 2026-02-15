"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Item, ItemContent, ItemMedia } from "@/components/ui/item";
import { formatDecimal } from "@/lib/utils";
import { InputNumeric } from "@/components/input-numeric";
import { ScaleIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

export default function AveragePriceClientPage() {
    const [currentAvgPrice, setCurrentAvgPrice] = useState<number | null>(null);
    const [sharesOwned, setSharesOwned] = useState<number | null>(null);
    const [buyPrice, setBuyPrice] = useState<number | null>(null);
    const [sharesToBuy, setSharesToBuy] = useState<number | null>(null);

    const debouncedAvgPrice = useDebounce(currentAvgPrice, 300);
    const debouncedSharesOwned = useDebounce(sharesOwned, 300);
    const debouncedBuyPrice = useDebounce(buyPrice, 300);
    const debouncedSharesToBuy = useDebounce(sharesToBuy, 300);

    const results = useMemo(() => {
        if (
            !debouncedAvgPrice ||
            !debouncedSharesOwned ||
            !debouncedBuyPrice ||
            !debouncedSharesToBuy ||
            debouncedAvgPrice <= 0 ||
            debouncedSharesOwned <= 0 ||
            debouncedBuyPrice <= 0 ||
            debouncedSharesToBuy <= 0
        ) {
            return null;
        }

        const totalCurrentValue = debouncedAvgPrice * debouncedSharesOwned;
        const totalPurchaseValue = debouncedBuyPrice * debouncedSharesToBuy;
        const totalShares = debouncedSharesOwned + debouncedSharesToBuy;
        const newAveragePrice = (totalCurrentValue + totalPurchaseValue) / totalShares;

        return {
            newAveragePrice,
            totalShares,
            totalValue: totalCurrentValue + totalPurchaseValue,
        };
    }, [debouncedAvgPrice, debouncedSharesOwned, debouncedBuyPrice, debouncedSharesToBuy]);

    const handleReset = () => {
        setCurrentAvgPrice(null);
        setSharesOwned(null);
        setBuyPrice(null);
        setSharesToBuy(null);
    };

    return (
        <div className="grid gap-4">
            <Card>
                <CardContent className="grid gap-4">
                    <section id="current" className="grid gap-4">
                        <h2 className="font-semibold">Current Position</h2>
                        <Field className="gap-1">
                            <FieldLabel className="text-muted-foreground" htmlFor="avgPrice">
                                Average price
                            </FieldLabel>
                            <InputNumeric
                                id="avgPrice"
                                mode="integer"
                                value={currentAvgPrice}
                                onValueChange={setCurrentAvgPrice}
                            />
                        </Field>
                        <Field className="gap-1">
                            <FieldLabel className="text-muted-foreground" htmlFor="sharesOwned">
                                Shares owned
                            </FieldLabel>
                            <div className="relative">
                                <InputNumeric
                                    id="sharesOwned"
                                    mode="integer"
                                    value={sharesOwned}
                                    onValueChange={setSharesOwned}
                                />
                                <span className="absolute right-0 px-2">shares</span>
                            </div>
                        </Field>
                    </section>
                    <section id="purchase" className="grid gap-4">
                        <h2 className="font-semibold">New Purchase</h2>
                        <Field className="gap-1">
                            <FieldLabel className="text-muted-foreground" htmlFor="buyPrice">
                                Buy price
                            </FieldLabel>
                            <InputNumeric
                                id="buyPrice"
                                mode="integer"
                                value={buyPrice}
                                onValueChange={setBuyPrice}
                            />
                        </Field>
                        <Field className="gap-1">
                            <FieldLabel className="text-muted-foreground" htmlFor="buyShares">
                                Shares to buy
                            </FieldLabel>
                            <div className="relative">
                                <InputNumeric
                                    id="buyShares"
                                    mode="integer"
                                    value={sharesToBuy}
                                    onValueChange={setSharesToBuy}
                                />
                                <span className="absolute right-0 px-2">shares</span>
                            </div>
                        </Field>
                    </section>
                </CardContent>
            </Card>
            {results && (
                <Item variant="outline" className="border-0 shadow-sm">
                    <ItemMedia variant="default">
                        <ScaleIcon />
                    </ItemMedia>
                    <ItemContent className="gap-0">
                        <p className="text-muted-foreground text-sm">Your new average price</p>
                        <p className="font-bold text-primary text-lg">{formatDecimal(results.newAveragePrice)}</p>
                        <hr className="my-4" />
                        <p className="text-muted-foreground text-sm">Total shares</p>
                        <p className="font-bold text-primary text-lg">{results.totalShares}</p>
                    </ItemContent>
                </Item>
            )}
            <div className="flex justify-center">
                <Button variant={"link"} onClick={handleReset}>Reset</Button>
            </div>
        </div>
    );
}
