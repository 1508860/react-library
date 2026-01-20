import type { CSSProperties } from "react";

import {
	resolveStyleShapeRingArc,
	SCALE_PERCENT_MAX,
	ScalePercent,
	StyleTransformCollection,
	type Colour,
	type StyleTransformRotate
} from "@react-library/common";

/**
 * Resolve progress indicator style based on parameters for a circle
 * @param scalePercent
 * @param rotatePercent
 * @param colour
 */
export function progressIndicatorCircleStyle(
	scalePercent: ScalePercent,
	rotatePercent: ScalePercent,
	colour: Colour
): CSSProperties {

	const styleShape = resolveStyleShapeRingArc(
		{
			denominator: SCALE_PERCENT_MAX,
			numerator: scalePercent
		},
		10,
		true
	);
	const styleTransformRotate: StyleTransformRotate | undefined = (
		rotatePercent !== ScalePercent[0] ?
			`rotate(${(rotatePercent / SCALE_PERCENT_MAX) * 360}deg)` :
			undefined
	);

	return {
		backgroundColor: colour.toColourString(),
		clipPath: styleShape.toStyleShapeString(),
		flexShrink: 0,
		height: "100%",
		position: "absolute",
		transform: styleTransformRotate ? new StyleTransformCollection([styleTransformRotate]).toStyleTransformCollectionString() : undefined,
		transformOrigin: "center",
		width: "100%"
	};
}
