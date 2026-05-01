import type { CSSProperties } from "react";

import { TransitionTimingMap } from "../../shared/enums/transition-timing-map.type";
import type { TransitionInsetProps } from "../types/transition-inset-props.type";

/**
 * Resolve transition inset style based on parameters
 * @param props
 */
export function transitionInsetStyle(props: TransitionInsetProps): CSSProperties {
	return {
		bottom: props.bottom,
		display: "inline-block",
		height: props.height,
		left: props.left,
		overflow: "visible",
		position: "absolute",
		right: props.right,
		top: props.top,
		transitionDuration: `${props.durationMs}ms`,
		transitionProperty: "bottom left right top",
		transitionTimingFunction: TransitionTimingMap[props.timing],
		width: props.width
	};
}
