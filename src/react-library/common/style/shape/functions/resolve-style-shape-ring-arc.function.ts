import type { IRatio } from "../../../interfaces";

import { StyleShape } from "../classes/shape.class";
import type { StyleShapeSegment } from "../types/shape-segment.type";

/**
 * Function for resolving a ring shape based on {@link ratio} of {@link width}
 * @param ratio
 * @param width
 */
export function resolveStyleShapeRingArc(ratio: IRatio, widthPercent: number, isRounded: boolean): StyleShape {

	const segments: Array<StyleShapeSegment> = [];

	// Angle
	const fullCircleDegrees: number = 360;
	const halfCircleDegrees: number = fullCircleDegrees / 2;
	const segmentDegrees: number = fullCircleDegrees * (ratio.numerator / ratio.denominator);
	const segmentRadians: number = segmentDegrees * (Math.PI / halfCircleDegrees);

	// Size
	const fullSizePercent: number = 100;
	const halfSizePercent: number = fullSizePercent / 2;
	const innerCircleRadius: number = halfSizePercent - widthPercent;

	// Outer Arc
	const outerArcCircleX = Math.sin(segmentRadians) * halfSizePercent;
	const outerArcCircleY = Math.cos(segmentRadians) * halfSizePercent;
	const outerArcX = halfSizePercent + outerArcCircleX;
	const outerArcY = halfSizePercent - outerArcCircleY;

	// Inner arc
	const innerArcCircleX = Math.sin(segmentRadians) * innerCircleRadius;
	const innerArcCircleY = Math.cos(segmentRadians) * innerCircleRadius;
	const innerArcX = halfSizePercent + innerArcCircleX;
	const innerArcY = halfSizePercent - innerArcCircleY;

	// 50% checkpoint for outer arc
	if (segmentDegrees > halfCircleDegrees) segments.push(`arc to ${halfSizePercent}% ${fullSizePercent}% of ${halfSizePercent}% small cw`);
	else segments.push(`arc to ${outerArcX}% ${outerArcY}% of ${halfSizePercent}% small cw`);

	// To outer arc end
	segments.push(`arc to ${outerArcX}% ${outerArcY}% of ${halfSizePercent}% small cw`);

	// Outer arc end to inner arc end
	if (isRounded) segments.push(`arc to ${innerArcX}% ${innerArcY}% of ${widthPercent / 2}% small cw`);
	else segments.push(`line to ${innerArcX}% ${innerArcY}%`);

	// 50% checkpoint for inner arc
	if (segmentDegrees > halfCircleDegrees) segments.push(`arc to ${halfSizePercent}% ${fullSizePercent - widthPercent}% of ${innerCircleRadius}% small ccw`);
	else segments.push(`arc to ${halfSizePercent}% ${widthPercent}% of ${innerCircleRadius}% small ccw`);

	// To inner arc start
	segments.push(`arc to ${halfSizePercent}% ${widthPercent}% of ${innerCircleRadius}% small ccw`);

	// Inner arc start to outer arc start
	if (isRounded) segments.push(`arc to ${halfSizePercent}% ${0}% of ${widthPercent / 2}% small cw`);
	else segments.push(`line to ${halfSizePercent}% ${0}%`);

	return new StyleShape([
		`from ${halfSizePercent}% ${0}%`,
		...segments
	]);
}
