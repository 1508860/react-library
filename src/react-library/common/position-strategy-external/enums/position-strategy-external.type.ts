/**
 * Defines position strategies for how elements can be laid out relative to and outside another element
 */
export const PositionStrategyExternal = {
	BottomCenter: "bottom-center",
	BottomEnd: "bottom-end",
	BottomLeft: "bottom-left",
	BottomRight: "bottom-right",
	BottomStart: "bottom-start",
	LeftCenter: "left-center",
	LeftEnd: "left-end",
	LeftStart: "left-start",
	RightCenter: "right-center",
	RightEnd: "right-end",
	RightStart: "right-start",
	TopCenter: "top-center",
	TopEnd: "top-end",
	TopLeft: "top-left",
	TopRight: "top-right",
	TopStart: "top-start"
} as const satisfies Record<string, string>;

/**
 * Type for {@link PositionStrategyExternal}
 */
export type PositionStrategyExternal = (typeof PositionStrategyExternal)[keyof typeof PositionStrategyExternal];
