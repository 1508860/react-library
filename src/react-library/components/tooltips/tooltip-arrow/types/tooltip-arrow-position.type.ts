import type {
	IAlign,
	IJustify,
	ITransform,
	StyleTransformCollection,
	StyleTransformRotate
} from "@react-library/common";
import type { Property } from "csstype";

/**
 * Type to describe the necessary information to position a tooltip arrow
 */
export type TooltipArrowPosition = (
	ITransform<StyleTransformCollection<[StyleTransformRotate]>> &
	IAlign<Property.AlignSelf> &
	IJustify<Property.JustifySelf>
);
