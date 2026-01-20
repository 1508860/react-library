import type { StyleTransformRotate } from "./rotate/transform-rotate.type";
import type { StyleTransformTranslate } from "./translate/transform-translate.type";

/**
 * Union type of all valid values for styling transforms for an element
 */
export type StyleTransform = (
	StyleTransformRotate |
	StyleTransformTranslate
);
