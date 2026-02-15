"use client"

import * as React from "react"
import { CopyIcon, CheckIcon } from "lucide-react"
import { toast } from "sonner"

import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CopyButtonProps extends ButtonProps {
  value: string
  label?: string
}

export function CopyButton({
  value,
  className,
  variant = "ghost",
  size = "icon-sm",
  label = "Copied to clipboard",
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    let timeout: NodeJS.Timeout

    if (hasCopied) {
      timeout = setTimeout(() => {
        setHasCopied(false)
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [hasCopied])

  const copyToClipboard = React.useCallback((value: string) => {
    navigator.clipboard.writeText(value)
    setHasCopied(true)
    toast.success(label)
  }, [label])

  return (
    <Button
      size={size}
      variant={variant}
      className={cn("relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700/50 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3", className)}
      onClick={() => copyToClipboard(value)}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  )
}
