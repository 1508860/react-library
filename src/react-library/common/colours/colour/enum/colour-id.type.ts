/**
 * Colour id type
 * Can discriminate different classes with a protected id to uniquely identify each colour
 */
export const ColourId = {
	HexRgb: "hex-rgb",
	HexRgba: "hex-rgba",
	Rgb: "rgb",
	Rgba: "rgba"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ColourId}
 */
export type ColourId = (typeof ColourId)[keyof typeof ColourId];
