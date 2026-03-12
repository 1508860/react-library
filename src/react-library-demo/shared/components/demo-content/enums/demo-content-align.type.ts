/**
 * Demo content alignment
 */
export const DemoContentAlign = {
	Start: "start",
	Center: "center",
	End: "end"
} as const satisfies Record<string, string>;

/**
 * Type for {@link DemoContentAlign}
 */
export type DemoContentAlign = (typeof DemoContentAlign)[keyof typeof DemoContentAlign];
