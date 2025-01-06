import { LOCALE } from '../config/common';

export function formatCurrency(currency, number) {
  return new Intl.NumberFormat(LOCALE, {
    style: 'currency',
    currency: currency,
  }).format(number);
}

export function formatNumber(number, decimals = 2) {
  return new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(number);
}
