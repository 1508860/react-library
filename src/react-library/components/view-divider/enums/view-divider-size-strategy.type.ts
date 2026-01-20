/**
 * View divider size strategy
 */
export const ViewDividerSizeStrategy = {
	Percent: "percent",
	Static: "static"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ViewDividerSizeStrategy}
 */
export type ViewDividerSizeStrategy = (typeof ViewDividerSizeStrategy)[keyof typeof ViewDividerSizeStrategy];
