import type { CSSProperties } from "react";

import type { SizePx } from "@react-library/common";

import type { TransitionPulseProps } from "../types/transition-pulse-props.type";

/**
 * Resolve transition pulse style based on parameters
 * @param props
 */
export function transitionPulseStyle(props: TransitionPulseProps): CSSProperties {

	const insetHorizontal: SizePx = (props.inset.left + props.inset.right);
	const insetVertical: SizePx = (props.inset.bottom + props.inset.top);

	const animationNameSuffix = (insetVertical > insetHorizontal) ? "height" : "width";

	const animationName = `react-library-components-transition-pulse-${animationNameSuffix}-${props.direction}`;

	return {
		animationDuration: `${props.durationMs}ms`,
		animationFillMode: "forwards",
		animationIterationCount: 1,
		animationName: animationName,
		animationTimingFunction: "ease-in-out",
		aspectRatio: 1,
		backgroundColor: props.colour.toColourString(),
		borderRadius: "50%",
		bottom: props.inset.bottom,
		left: props.inset.left,
		position: "absolute",
		right: props.inset.right,
		top: props.inset.top,
		transformOrigin: "center",
		translate: "-50% -50%"
	};
}
