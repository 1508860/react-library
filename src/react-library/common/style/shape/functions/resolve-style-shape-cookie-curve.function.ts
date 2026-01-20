import type { NaturalInteger } from "../../../types";
import { StyleShape } from "../classes/shape.class";
import type { StyleShapeSegment } from "../types/shape-segment.type";

/**
 * Function for resolving a cookie shape based on a {@link pointNumber} as a curve
 * @param pointNumber how many points does the cookie have
 */
export function resolveStyleShapeCookieCurve<TPointNumber>(pointNumber: NaturalInteger<TPointNumber>): StyleShape {

	const segments: Array<StyleShapeSegment> = [];

	const fullCircleDegrees: number = 360;

	const fullSize: number = 100; // Percentage based
	const halfSize: number = fullSize / 2;
	const outerCircleRadius: number = fullSize / 1.5;
	const innerCircleRadius: number = fullSize / 3; // TODO add parameter for ratios?

	const segmentSize: number = fullCircleDegrees / pointNumber;

	let initialX: number = 0;
	let initialY: number = 0;

	for (let index = 0; index <= pointNumber; index++) {

		const circleRadians: number = (index * segmentSize) * (Math.PI / 180);
		const circleX: number = Math.sin(circleRadians) * innerCircleRadius;
		const circleY: number = Math.cos(circleRadians) * innerCircleRadius;

		const x = halfSize + circleX;
		const y = halfSize + circleY;

		if (index === 0) {
			initialX = x;
			initialY = y;
		} else {
			// Derive curve peak
			const circleCurveRadians: number = ((index * segmentSize) - (segmentSize / 2)) * (Math.PI / 180);
			const circleCurveX: number = Math.sin(circleCurveRadians) * outerCircleRadius;
			const circleCurveY: number = Math.cos(circleCurveRadians) * outerCircleRadius;

			const xCurve = halfSize + circleCurveX;
			const yCurve = halfSize + circleCurveY;

			segments.push(`curve to ${x}% ${y}% with ${xCurve}% ${yCurve}%`);
		}
	}

	return new StyleShape([
		`from ${initialX}% ${initialY}%`,
		...segments
	]);
}
