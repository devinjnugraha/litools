"use client";

import * as React from "react";
import { cn, formatDecimal, formatNumber, isValidDecimalInput, parseInput } from "@/lib/utils";

type InputNumericProps = Omit<React.ComponentProps<"input">, "value" | "onChange"> & {
    value?: number | null;
    mode?: "integer" | "decimal";
    onValueChange?: (value: number | null) => void;
};

export function InputNumeric({ value, mode = "integer", onValueChange, className, ...props }: InputNumericProps) {
    const [display, setDisplay] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);
    const cursorRef = React.useRef<number | null>(null);

    React.useEffect(() => {
        if (value === null || value === undefined) {
            if (display !== "") setDisplay("");
        } else {
            const parsed = parseInput(display, mode);
            if (parsed !== value) {
                setDisplay(mode === "decimal" ? formatDecimal(value) : formatNumber(value, mode));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, mode]);

    React.useLayoutEffect(() => {
        if (cursorRef.current !== null && inputRef.current) {
            inputRef.current.setSelectionRange(cursorRef.current, cursorRef.current);
            cursorRef.current = null;
        }
    }, [display]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const rawInput = e.target.value;
        const currentSelectionStart = e.target.selectionStart || 0;

        if (mode === "decimal") {
            // Treat comma as dot for iOS compatibility
            const normalizedInput = rawInput.replace(/,/g, ".");
            if (!isValidDecimalInput(normalizedInput)) return;

            setDisplay(normalizedInput);

            if (normalizedInput === "" || normalizedInput === ".") {
                onValueChange?.(null);
                return;
            }

            const num = Number(normalizedInput);
            if (!isNaN(num)) {
                onValueChange?.(num);
            }
            return;
        }

        // integer mode
        // Logic to preserve cursor position for integer mode with commas
        const digitsOnly = rawInput.replace(/\D/g, "");

        if (!digitsOnly) {
            setDisplay("");
            onValueChange?.(null);
            return;
        }

        const num = Number(digitsOnly);
        const formatted = formatNumber(num, "integer");

        // Calculate visual cursor position
        let digitsBeforeCursor = 0;
        for (let i = 0; i < currentSelectionStart; i++) {
            if (/\d/.test(e.target.value[i])) {
                digitsBeforeCursor++;
            }
        }

        // Find the index in `formatted` that corresponds to `digitsBeforeCursor`
        let newCursorPos = 0;
        let currentDigits = 0;
        
        // Loop through the formatted string to find where the cursor should be
        while (currentDigits < digitsBeforeCursor && newCursorPos < formatted.length) {
             // If the current character is a digit, increment our count
            if (/\d/.test(formatted[newCursorPos])) {
                currentDigits++;
            }
            newCursorPos++;
        }

        cursorRef.current = newCursorPos;
        setDisplay(formatted);
        onValueChange?.(num);
    }

    function handleBlur() {
        if (mode === "decimal" && display) {
            const num = Number(display);
            if (!isNaN(num)) {
                setDisplay(formatDecimal(num));
            }
        }
    }

    return (
        <input
            {...props}
            type={props.type || "text"}
            data-slot="input"
            className={cn(
                "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                "h-7 px-2 border-0 shadow-none border-b rounded-none focus:border-b-primary focus-visible:ring-0 focus:outline-none",
                className
            )}
            ref={inputRef}
            inputMode={mode === "decimal" ? "decimal" : "numeric"}
            value={display}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
        />
    );
}
