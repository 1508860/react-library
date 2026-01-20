import type { StyleTransformSize } from "../transform-size.type";

/**
 * Union type of all valid values for styling translate transforms for an element
 */
export type StyleTransformTranslate = (
	`translate(${StyleTransformSize})` |
	`translate(${StyleTransformSize}, ${StyleTransformSize})` |
	`translate3d(${StyleTransformSize}, ${StyleTransformSize}, ${StyleTransformSize})` |
	`translateX(${StyleTransformSize})` |
	`translateY(${StyleTransformSize})` |
	`translateZ(${StyleTransformSize})`
);
