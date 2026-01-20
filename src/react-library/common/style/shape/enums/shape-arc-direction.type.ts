/**
 * Represents style shape 
 */
export const StyleShapeArcDirection = {
	Clockwise: "cw",
	CounterClockwise: "ccw"
} as const satisfies Record<string, string>;

/**
 * Type for {@link StyleShapeArcDirection}
 */
export type StyleShapeArcDirection = (typeof StyleShapeArcDirection)[keyof typeof StyleShapeArcDirection];
