import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const numberFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDecimal (decimal: number) {
  return numberFormatter.format(decimal)
}

export function formatNumber (value: number, mode: 'integer' | 'decimal') {
  if (isNaN(value)) return ''

  const [intPart, decPart] = value.toString().split('.')

  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  if (mode === 'decimal' && decPart !== undefined) {
    return `${formattedInt}.${decPart}`
  }

  return formattedInt
}

export function parseInput (
  input: string,
  mode: 'integer' | 'decimal'
): number | null {
  if (!input) return null

  const sanitized =
    mode === 'decimal'
      ? input.replace(/,/g, '.').replace(/[^0-9.]/g, '')
      : input.replace(/[^0-9]/g, '')

  if (!sanitized) return null

  // If after replacing comma with dot we have multiple dots, only take the first part
  // this is a safety measure if somehow the input bypassed isValidDecimalInput
  const parts = sanitized.split('.')
  const normalized = parts.length > 2 ? `${parts[0]}.${parts.slice(1).join('')}` : sanitized

  const num = Number(normalized)
  return isNaN(num) ? null : num
}

export function isValidDecimalInput (value: string) {
  // Allow numbers, one dot OR one comma, but not both at the same time in raw typing
  // Or handle them interchangeably. Let's allow one separator (dot or comma).
  return /^\d*([.,]\d*)?$/.test(value)
}
