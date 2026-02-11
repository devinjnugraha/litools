"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Item, ItemContent, ItemMedia } from "@/components/ui/item";
import { InfoDrawer } from "@/components/info-drawer";
import { formatDecimal, formatNumber } from "@/lib/utils";
import { InputNumeric } from "@/components/input-numeric";
import { CircleGaugeIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

export default function RiskClientPage() {
    const [riskTolerance, setRiskTolerance] = useState<number | null>(2);
    const [capital, setCapital] = useState<number | null>(null);
    const [currentPrice, setCurrentPrice] = useState<number | null>(null);
    const [stopLoss, setStopLoss] = useState<number | null>(null);

    const debouncedRisk = useDebounce(riskTolerance, 300);
    const debouncedCapital = useDebounce(capital, 300);
    const debouncedCurrentPrice = useDebounce(currentPrice, 300);
    const debouncedStopLoss = useDebounce(stopLoss, 300);

    const results = useMemo(() => {
        if (
            !debouncedCapital ||
            !debouncedRisk ||
            !debouncedCurrentPrice ||
            !debouncedStopLoss ||
            debouncedStopLoss >= debouncedCurrentPrice
        ) {
            return null;
        }

        const maxRisk = debouncedCapital * (debouncedRisk / 100);
        const riskPerShare = debouncedCurrentPrice - debouncedStopLoss;

        if (riskPerShare <= 0) return null;

        const maxPositionSizeShares = Math.floor(maxRisk / riskPerShare);
        const maxPositionSizeLots = Math.floor(maxPositionSizeShares / 100);
        const totalPositionValue = maxPositionSizeShares * debouncedCurrentPrice;
        const totalPositionValueLots = maxPositionSizeLots * 100 * debouncedCurrentPrice;
        const remainingCapital = debouncedCapital - totalPositionValue;

        return {
            maxRisk,
            maxPositionSizeShares,
            maxPositionSizeLots,
            totalPositionValue,
            totalPositionValueLots,
            remainingCapital,
        };
    }, [debouncedCapital, debouncedRisk, debouncedCurrentPrice, debouncedStopLoss]);

    const handleAddCapital = (amount: number) => {
        setCapital((prev) => (prev || 0) + amount);
    };

    const handleReset = () => {
        setRiskTolerance(2);
        setCapital(null);
        setCurrentPrice(null);
        setStopLoss(null);
    };

    return (
        <div className="grid gap-4">
            <Card>
                <CardContent className="grid gap-4">
                    <Field className="gap-1">
                        <FieldLabel className="text-muted-foreground" htmlFor="riskTolerance">
                            Risk tolerance
                            <InfoDrawer
                                title="Risk Tolerance"
                                descriptions={[
                                    "The 2% risk strategy is a proven investment approach designed to protect your portfolio from significant losses. It ensures that any single trade or investment exposes only 2% of your total portfolio value to risk.",
                                    "By setting a strict limit on potential loss, you can confidently navigate the markets, knowing your capital is preserved for future opportunities. This strategy balances the ambition to grow wealth with the discipline to safeguard it, making it ideal for long-term success.",
                                ]}
                            />
                        </FieldLabel>
                        <div className="relative">
                            <InputNumeric
                                id="riskTolerance"
                                mode="decimal"
                                value={riskTolerance}
                                onValueChange={setRiskTolerance}
                                className="h-7 px-2 border-0 shadow-none border-b rounded-none focus:border-b-primary focus-visible:ring-0 focus:outline-none"
                            />
                            <span className="absolute right-0 top-1 px-2 text-sm text-muted-foreground">%</span>
                        </div>
                    </Field>
                    <Field className="gap-1">
                        <div className="flex justify-between items-center">
                            <FieldLabel className="text-muted-foreground" htmlFor="capital">
                                Total capital{" "}
                                <InfoDrawer
                                    title="Total Capital"
                                    descriptions={[
                                        "The total amount of funds available in your portfolio for investment purposes. It includes all cash and liquid assets that can be allocated to trades or investments. Total capital serves as the basis for calculating position sizes, risk levels, and overall portfolio management strategies.",
                                    ]}
                                />
                            </FieldLabel>
                            <div className="flex gap-1 overflow-x-auto no-scrollbar">
                                {[
                                    { label: "+100K", value: 100_000 },
                                    { label: "+1M", value: 1_000_000 },
                                    { label: "+5M", value: 5_000_000 },
                                    { label: "+10M", value: 10_000_000 },
                                    { label: "+50M", value: 50_000_000 },
                                ].map((btn) => (
                                    <Button
                                        key={btn.label}
                                        variant="outline"
                                        size="sm"
                                        className="h-5 px-2 text-[10px] rounded-full whitespace-nowrap"
                                        onClick={() => handleAddCapital(btn.value)}
                                    >
                                        {btn.label}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <InputNumeric
                            id="capital"
                            mode="integer"
                            value={capital}
                            onValueChange={setCapital}
                            className="h-7 px-2 border-0 shadow-none border-b rounded-none focus:border-b-primary focus-visible:ring-0 focus:outline-none"
                        />
                    </Field>
                    <Field className="gap-1">
                        <FieldLabel className="text-muted-foreground" htmlFor="currentSharePrice">
                            Current share price
                        </FieldLabel>
                        <InputNumeric
                            id="currentSharePrice"
                            mode="integer"
                            value={currentPrice}
                            onValueChange={setCurrentPrice}
                            className="h-7 px-2 border-0 shadow-none border-b rounded-none focus:border-b-primary focus-visible:ring-0 focus:outline-none"
                        />
                    </Field>
                    <Field className="gap-1">
                        <FieldLabel className="text-muted-foreground" htmlFor="stopLossPrice">
                            Stop loss price
                        </FieldLabel>
                        <div className="relative">
                            <InputNumeric
                                id="stopLossPrice"
                                mode="integer"
                                value={stopLoss}
                                onValueChange={setStopLoss}
                                className="h-7 px-2 border-0 shadow-none border-b rounded-none focus:border-b-primary focus-visible:ring-0 focus:outline-none"
                            />
                            {debouncedCurrentPrice && debouncedStopLoss && (
                                <span
                                    className={`absolute right-0 top-1 px-2 text-sm ${
                                        debouncedStopLoss < debouncedCurrentPrice ? "text-red-500" : "text-green-500"
                                    }`}
                                >
                                    {formatDecimal(((debouncedStopLoss - debouncedCurrentPrice) / debouncedCurrentPrice) * 100)}%
                                </span>
                            )}
                        </div>
                    </Field>
                </CardContent>
            </Card>
            {results && (
                <Item variant="outline" className="border-0 shadow-sm">
                    <ItemMedia variant="default">
                        <CircleGaugeIcon />
                    </ItemMedia>
                    <ItemContent className="gap-0">
                        <p className="text-muted-foreground text-sm">Maximum risk you can take</p>
                        <p className="font-bold text-primary text-lg">{formatDecimal(results.maxRisk)}</p>
                        <hr className="my-4" />
                        <p className="text-muted-foreground text-sm">Maximum position size</p>
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-primary text-lg">
                                {formatNumber(results.maxPositionSizeShares, "integer")} shares
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                {formatNumber(results.maxPositionSizeLots, "integer")} lot
                                <InfoDrawer
                                    title="Lot"
                                    descriptions={
                                        <>
                                            If you are investing stocks in the <b>Indonesia Stock Exchange</b>, 1 lot is equivalent to 100
                                            shares.
                                        </>
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-sm text-primary">≈{formatDecimal(results.totalPositionValue)}</p>
                            <div className="text-sm text-muted-foreground">≈{formatDecimal(results.totalPositionValueLots)}</div>
                        </div>
                    </ItemContent>
                </Item>
            )}
            <div className="flex justify-center">
                <Button variant={"link"} onClick={handleReset}>Reset</Button>
            </div>
        </div>
    );
}
