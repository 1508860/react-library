/**
 * Button content types
 */
export const ButtonContent = {
	Icon: "icon",
	IconLabel: "icon-label",
	Label: "label"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ButtonContent}
 */
export type ButtonContent = (typeof ButtonContent)[keyof typeof ButtonContent];
