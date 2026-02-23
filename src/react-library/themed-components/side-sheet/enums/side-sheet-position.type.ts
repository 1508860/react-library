/**
 * Side sheet positions
 */
export const SideSheetPosition = {
	Start: "start",
	End: "end"
} as const satisfies Record<string, string>;

/**
 * Type for {@link SideSheetPosition}
 */
export type SideSheetPosition = (typeof SideSheetPosition)[keyof typeof SideSheetPosition];
