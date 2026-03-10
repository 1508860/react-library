import type { HexRgb } from "../classes/hex/hex-rgb.class";
import type { HexRgba } from "../classes/hex/hex-rgba.class";
import type { Rgb } from "../classes/rgb/rgb.class";
import type { Rgba } from "../classes/rgb/rgba.class";

/**
 * Represents all supported forms of colour types:
 * {@link HexRgb}, {@link HexRgba}, {@link Rgb}, {@link Rgba}
 */
export type Colour = (
	HexRgb |
	HexRgba |
	Rgb |
	Rgba
);

/**
 * Represents all supported forms of colour types without an alpha value:
 * {@link HexRgb}, {@link Rgb}
 */
export type ColourSolid = (
	HexRgb |
	Rgb
);

/**
 * Represents all supported forms of colour types with an alpha value:
 * {@link HexRgba}, {@link Rgba}
 */
export type ColourAlpha = (
	HexRgba |
	Rgba
);
