"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface TabItem {
    value: string
    label: string
    icon?: LucideIcon
}

interface TabGroupProps {
    items: TabItem[]
    value: string
    onValueChange: (value: string) => void
    classname?: string
}

export function TabGroup({ items, value, onValueChange, classname }: TabGroupProps) {
    return (
        <div className={cn("flex p-1 bg-muted/50 rounded-lg", classname)}>
            {items.map((item) => {
                const Icon = item.icon
                const isActive = value === item.value

                return (
                    <button
                        key={item.value}
                        onClick={() => onValueChange(item.value)}
                        className={cn(
                            "flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all",
                            isActive
                                ? "bg-background text-primary shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {Icon && <Icon className="size-4" />}
                        {item.label}
                    </button>
                )
            })}
        </div>
    )
}
