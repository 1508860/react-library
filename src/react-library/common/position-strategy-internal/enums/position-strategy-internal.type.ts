/**
 * Defines position strategies for how elements can be laid out relative to and inside another element
 */
export const PositionStrategyInternal = {
	BottomCenter: "bottom-center",
	BottomLeft: "bottom-left",
	BottomRight: "bottom-right",
	MiddleCenter: "middle-center",
	MiddleLeft: "middle-left",
	MiddleRight: "middle-right",
	TopCenter: "top-center",
	TopLeft: "top-left",
	TopRight: "top-right"
} as const satisfies Record<string, string>;

/**
 * Type for {@link PositionStrategyInternal}
 */
export type PositionStrategyInternal = (typeof PositionStrategyInternal)[keyof typeof PositionStrategyInternal];

/**
 * Scope down {@link PositionStrategyInternal} to corner strategies
 */
export type PositionStrategyInternalCorner = (
	typeof PositionStrategyInternal.BottomLeft |
	typeof PositionStrategyInternal.BottomRight |
	typeof PositionStrategyInternal.TopLeft |
	typeof PositionStrategyInternal.TopRight
);
