import type { CSSProperties } from "react";

import { TransitionTimingMap } from "../../shared/enums/transition-timing-map.type";
import type { TransitionBorderRadiusProps } from "../types/transition-border-radius-props.type";

/**
 * Resolve transition border radius style based on parameters
 * @param props
 */
export function transitionBorderRadiusStyle(props: TransitionBorderRadiusProps): CSSProperties {
	return {
		borderBottomLeftRadius: props.borderBottomLeftRadius,
		borderBottomRightRadius: props.borderBottomRightRadius,
		borderTopLeftRadius: props.borderTopLeftRadius,
		borderTopRightRadius: props.borderTopRightRadius,
		display: "block",
		overflow: "hidden",
		transitionDuration: `${props.durationMs}ms`,
		transitionProperty: "border-radius",
		transitionTimingFunction: TransitionTimingMap[props.timing]
	};
}
