import type { NaturalInteger } from "../../../types";
import { StyleShape } from "../classes/shape.class";
import type { StyleShapeArcDirection } from "../enums/shape-arc-direction.type";
import { StyleShapeArcSize } from "../enums/shape-arc-size.type";
import type { StyleShapeSegment } from "../types/shape-segment.type";

/**
 * Function for resolving a cookie shape based on a {@link pointNumber} using arcs
 * @param pointNumber how many points does the cookie have
 * @param arcDirection
 */
export function resolveStyleShapeCookieArc<TPointNumber>(
	pointNumber: NaturalInteger<TPointNumber>,
	arcDirection: StyleShapeArcDirection
): StyleShape {

	const segments: Array<StyleShapeSegment> = [];

	// Angle
	const fullCircleDegrees: number = 360;
	const halfCircleDegrees: number = fullCircleDegrees / 2;
	const segmentDegrees: number = fullCircleDegrees / pointNumber;
	const arcSize: StyleShapeArcSize = segmentDegrees > halfCircleDegrees ? StyleShapeArcSize.Large : StyleShapeArcSize.Small;

	// Size
	const fullSizePercent: number = 100;
	const halfSizePercent: number = fullSizePercent / 2;
	const innerCircleRadius: number = fullSizePercent / 3;

	let initialX: number = 0;
	let initialY: number = 0;

	for (let index = 0; index <= pointNumber; index++) {

		const circleRadians: number = (index * segmentDegrees) * (Math.PI / 180);
		const circleX: number = Math.sin(circleRadians) * innerCircleRadius;
		const circleY: number = Math.cos(circleRadians) * innerCircleRadius;

		const x = halfSizePercent + circleX;
		const y = halfSizePercent + circleY;

		if (index === 0) {
			initialX = x;
			initialY = y;
		} else {
			segments.push(`arc to ${x}% ${y}% of ${0.05}% ${arcSize} ${arcDirection}`);
		}
	}

	return new StyleShape([
		`from ${initialX}% ${initialY}%`,
		...segments
	]);
}
