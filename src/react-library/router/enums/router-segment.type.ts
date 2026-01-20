/**
 * Route types
 */
export const RouterSegment = {
	Child: "child",
	Root: "root",
	WithChildren: "with-children"
} as const satisfies Record<string, string>;

/**
 * Type for {@link RouterSegment}
 */
export type RouterSegment = (typeof RouterSegment)[keyof typeof RouterSegment];
