import type { CSSProperties } from "react";

import { scaleDegreesStateValue, type StyleTransformRotate } from "@react-library/common";

import { TransitionTimingMap } from "../../shared/enums/transition-timing-map.type";
import type { TransitionRotateProps } from "../types/transition-rotate-props.type";

/**
 * Resolve transition rotate container style based on parameters
 * @param props
 */
export function transitionRotateContainerStyle(props: TransitionRotateProps): CSSProperties {

	const transformRotate: StyleTransformRotate = `rotate(${scaleDegreesStateValue(props.rotate)}deg)`

	return {
		alignItems: "center",
		display: "inline-flex",
		justifyContent: "center",
		transform: transformRotate,
		transitionDuration: `${props.durationMs}ms`,
		transitionProperty: "transform",
		transitionTimingFunction: TransitionTimingMap[props.timing]
	};
}
