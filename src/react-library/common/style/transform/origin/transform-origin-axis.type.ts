import type { StyleGlobal } from "../../global";
import type { Extends } from "../../../types";
import type { SizeCm, SizePxUnits } from "../../../units";
import type { StyleTransformSize } from "../transform-size.type";

/**
 * Origin transform for an element on the x axis
 */
export type StyleTransformOriginAxisValueX = (
	StyleGlobal |
	"left" |
	"center" |
	"right" |
	StyleTransformSize
);

/**
 * Origin transform for an element on the y axis
 */
export type StyleTransformOriginAxisValueY = (
	StyleGlobal |
	"top" |
	"center" |
	"bottom" |
	StyleTransformSize
);

/**
 * Origin transform for an element on the z axis
 */
export type StyleTransformOriginAxisValueZ = (
	Extends<StyleTransformSize, (SizeCm | SizePxUnits)>
);
