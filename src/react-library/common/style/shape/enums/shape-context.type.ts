/**
 * Represents style shape contexts (i.e. is the coordinate relative to origin of element or the previous coordinate)
 */
export const StyleShapeContext = {
	By: "by",
	To: "to"
} as const satisfies Record<string, string>;

/**
 * Type for {@link StyleShapeContext}
 */
export type StyleShapeContext = (typeof StyleShapeContext)[keyof typeof StyleShapeContext];
