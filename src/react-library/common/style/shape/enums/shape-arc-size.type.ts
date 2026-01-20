/**
 * Represents style shape arc size
 */
export const StyleShapeArcSize = {
	Large: "large",
	Small: "small"
} as const satisfies Record<string, string>;

/**
 * Type for {@link StyleShapeArcSize}
 */
export type StyleShapeArcSize = (typeof StyleShapeArcSize)[keyof typeof StyleShapeArcSize];
