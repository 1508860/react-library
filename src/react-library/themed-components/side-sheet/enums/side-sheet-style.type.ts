/**
 * Side sheet styles
 */
export const SideSheetStyle = {
	Modal: "modal",
	Standard: "standard"
} as const satisfies Record<string, string>;

/**
 * Type for {@link SideSheetStyle}
 */
export type SideSheetStyle = (typeof SideSheetStyle)[keyof typeof SideSheetStyle];
