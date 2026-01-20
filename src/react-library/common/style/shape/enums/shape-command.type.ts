/**
 * Represents style shape commands
 */
export const StyleShapeCommand = {
	Arc: "arc",
	Curve: "curve",
	HLine: "hline",
	Line: "line",
	Move: "move",
	Smooth: "smooth",
	VLine: "vline"
} as const satisfies Record<string, string>;

/**
 * Type for {@link StyleShapeCommand}
 */
export type StyleShapeCommand = (typeof StyleShapeCommand)[keyof typeof StyleShapeCommand];
