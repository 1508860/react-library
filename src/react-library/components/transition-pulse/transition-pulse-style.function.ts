import type { CSSProperties } from "react";

import type { SizePx } from "@react-library/common";

import type { TransitionPulseProps } from "./transition-pulse-props.type";

/**
 * Resolve transition pulse style based on parameters
 * @param props
 * @param applyTransition
 */
export function transitionPulseStyle(
	props: TransitionPulseProps,
	applyTransition: boolean
): CSSProperties {

	const layerSize: SizePx = (
		(!props.inset || !applyTransition) ? 0 :
			Math.max((props.inset.left + props.inset.right), (props.inset.bottom + props.inset.top)) * 2
	);

	return {
		backgroundColor: props.colour.toColourString(),
		borderRadius: "50%",
		height: layerSize,
		left: props.inset?.left,
		opacity: props.opacity,
		position: "absolute",
		top: props.inset?.top,
		transformOrigin: "center",
		transitionDuration: (!props.inset || !applyTransition) ? undefined : `${props.durationMs}ms`,
		transitionProperty: "height, width",
		translate: "-50% -50%",
		width: layerSize
	};
}
