/**
 * Button icon width types
 */
export const ButtonIconWidth = {
	Default: "default",
	Narrow: "narrow",
	Wide: "wide"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ButtonIconWidth}
 */
export type ButtonIconWidth = (typeof ButtonIconWidth)[keyof typeof ButtonIconWidth];
