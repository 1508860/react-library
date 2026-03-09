import type { CSSProperties } from "react";

import type { TransitionRotateIndefiniteProps } from "../types/transition-rotate-indefinite-props.type";

/**
 * Resolve transition rotate indefinite container style based on parameters
 * @param props
 */
export function transitionRotateIndefiniteContainerStyle(props: TransitionRotateIndefiniteProps): CSSProperties {
	return {
		alignItems: "center",
		animationDuration: `${props.fullRotationDurationMs}ms`,
		animationIterationCount: "infinite",
		animationName: "react-library-components-transition-rotate-indefinite",
		animationTimingFunction: "ease-in-out",
		display: "inline-flex"
	};
}
