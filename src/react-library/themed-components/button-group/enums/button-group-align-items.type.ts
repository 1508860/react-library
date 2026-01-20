/**
 * Button group align item types
 */
export const ButtonGroupAlignItems = {
	End: "end",
	Start: "start"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ButtonGroupAlignItems}
 */
export type ButtonGroupAlignItems = (typeof ButtonGroupAlignItems)[keyof typeof ButtonGroupAlignItems];
