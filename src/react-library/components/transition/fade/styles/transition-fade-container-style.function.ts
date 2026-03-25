import type { CSSProperties } from "react";

import { TransitionTimingMap } from "../../shared/enums/transition-timing-map.type";
import type { TransitionFadeProps } from "../types/transition-fade-props.type";
import { TransitionFadeDirection } from "../enums/transition-fade-direction.type";

/**
 * Resolve transition fade container style based on parameters
 * @param props
 */
export function transitionFadeContainerStyle(props: TransitionFadeProps): CSSProperties {
	return {
		alignItems: "center",
		animationDuration: `${props.durationMs}ms`,
		animationFillMode: "forwards",
		animationIterationCount: 1,
		animationName: props.direction !== TransitionFadeDirection.None ? `react-library-components-transition-fade-${props.direction}` : undefined,
		animationTimingFunction: TransitionTimingMap[props.timing],
		display: "inline-flex"
	};
}
