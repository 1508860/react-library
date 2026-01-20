/**
 * View divider view type
 */
export const ViewDividerView = {
	Start: "start",
	End: "end"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ViewDividerView}
 */
export type ViewDividerView = (typeof ViewDividerView)[keyof typeof ViewDividerView];
