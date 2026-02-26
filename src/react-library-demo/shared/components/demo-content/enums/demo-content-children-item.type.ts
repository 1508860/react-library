/**
 * Demo content children item
 */
export const DemoContentChildrenItem = {
	Button: "button",
	Text: "text"
} as const satisfies Record<string, string>;

/**
 * Type for {@link DemoContentChildrenItem}
 */
export type DemoContentChildrenItem = (typeof DemoContentChildrenItem)[keyof typeof DemoContentChildrenItem];
