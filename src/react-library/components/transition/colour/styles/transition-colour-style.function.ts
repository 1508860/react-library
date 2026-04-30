import type { CSSProperties } from "react";

import { TransitionTimingMap } from "../../shared/enums/transition-timing-map.type";
import type { TransitionColourProps } from "../types/transition-colour-props.type";

/**
 * Resolve transition colour style based on parameters
 * @param props
 */
export function transitionColourStyle(props: TransitionColourProps): CSSProperties {
	return {
		backgroundColor: props.colour.toColourString(),
		display: "inline-block",
		height: props.height,
		overflow: "visible",
		transitionDuration: `${props.durationMs}ms`,
		transitionProperty: "background-color",
		transitionTimingFunction: TransitionTimingMap[props.timing],
		width: props.width
	};
}
