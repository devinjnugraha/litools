"use client";

import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { InfoIcon, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface InfoDrawerProps {
    title: string;
    descriptions: string | string[] | ReactNode;
    triggerIcon?: LucideIcon;
    triggerIconClassName?: string;
}

export function InfoDrawer({ title, descriptions, triggerIcon: Icon = InfoIcon, triggerIconClassName }: InfoDrawerProps) {
    const descArray = Array.isArray(descriptions) ? descriptions : [descriptions];

    return (
        <Drawer>
            <DrawerTrigger>
                <Icon className={cn("size-4 text-muted-foreground", triggerIconClassName)} />
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-3xl pb-16 md:pb-6">
                    <DrawerHeader>
                        <DrawerTitle className="text-left mb-4">{title}</DrawerTitle>
                        {descArray.map((desc, index) => (
                            <DrawerDescription key={index} className="text-left">
                                {desc}
                            </DrawerDescription>
                        ))}
                    </DrawerHeader>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
