/**
 * Demo content justification
 */
export const DemoContentJustify = {
	Start: "start",
	Center: "center",
	End: "end"
} as const satisfies Record<string, string>;

/**
 * Type for {@link DemoContentJustify}
 */
export type DemoContentJustify = (typeof DemoContentJustify)[keyof typeof DemoContentJustify];
