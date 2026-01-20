/**
 * Currency codes
 * 
 * Based on ISO 4217
 */
export const CurrencyCode = {
	Gbp: "GBP"
} as const satisfies Record<string, string>;

/**
 * Type for {@link CurrencyCode}
 */
export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];
