/**
 * Language codes
 * 
 * Based on ISO 639 standard language codes
 */
export const LanguageCode = {
	En_Gb: "en-gb"
} as const satisfies Record<string, string>;

/**
 * Type for {@link LanguageCode}
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];
