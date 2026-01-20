import type { HexRgb } from "./hex/hex-rgb.class";
import type { HexRgba } from "./hex/hex-rgba.class";
import type { Rgb } from "./rgb/rgb.class";
import type { Rgba } from "./rgb/rgba.class";

/**
 * Represents all supported forms of colour types:
 * {@link HexRgb}, {@link HexRgba}, {@link Rgb}, {@link Rgba}
 */
export type Colour = HexRgb | HexRgba | Rgb | Rgba;
