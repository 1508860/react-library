import type { CSSProperties } from "react";

import type { Colour, SizePx } from "@react-library/common";

import { TransitionTimingMap } from "../../shared/enums/transition-timing-map.type";
import type { TransitionTiming } from "../../shared/enums/transition-timing.type";
import type { TransitionPulseInsetDataContext } from "../types/transition-pulse-inset-data-context.type";

/**
 * Resolve transition pulse style based on parameters
 * @param durationMs
 * @param timing
 * @param colour
 * @param insetData
 */
export function transitionPulseStyle(
	durationMs: number,
	timing: TransitionTiming,
	colour: Colour,
	insetData: TransitionPulseInsetDataContext
): CSSProperties {

	const insetHorizontal: SizePx = ((insetData?.inset.left ?? 0) + (insetData?.inset.right ?? 0));
	const insetVertical: SizePx = ((insetData?.inset.bottom ?? 0) + (insetData?.inset.top ?? 0));

	const animationNameSuffix = (insetVertical > insetHorizontal) ? "height" : "width";

	const animationName = `react-library-components-transition-pulse-${animationNameSuffix}`;

	return {
		animationDuration: `${durationMs}ms`,
		animationFillMode: "forwards",
		animationIterationCount: 1,
		animationName: animationName,
		animationTimingFunction: TransitionTimingMap[timing],
		aspectRatio: 1,
		backgroundColor: colour.toColourString(),
		borderRadius: "50%",
		bottom: insetData?.inset.bottom,
		left: insetData?.inset.left,
		position: "absolute",
		right: insetData?.inset.right,
		top: insetData?.inset.top,
		transformOrigin: "center",
		translate: "-50% -50%"
	};
}
