/**
 * Demo content children
 */
export const DemoContentChildren = {
	Any: "any",
	Text: "text",
	Items: "items"
} as const satisfies Record<string, string>;

/**
 * Type for {@link DemoContentChildren}
 */
export type DemoContentChildren = (typeof DemoContentChildren)[keyof typeof DemoContentChildren];
