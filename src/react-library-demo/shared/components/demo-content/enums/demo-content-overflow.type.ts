/**
 * Demo content overflow
 */
export const DemoContentOverflow = {
	Auto: "auto",
	Hidden: "hidden",
	Visible: "visible"
} as const satisfies Record<string, string>;

/**
 * Type for {@link DemoContentOverflow}
 */
export type DemoContentOverflow = (typeof DemoContentOverflow)[keyof typeof DemoContentOverflow];
