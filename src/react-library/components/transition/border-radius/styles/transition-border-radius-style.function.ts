import type { CSSProperties } from "react";

import { TransitionTimingMap } from "../../shared/enums/transition-timing-map.type";
import { TransitionBorderRadiusScope } from "../enums/transition-border-radius-scope.type";
import type { TransitionBorderRadiusProps } from "../types/transition-border-radius-props.type";

/**
 * Resolve transition border radius style based on parameters
 * @param props
 */
export function transitionBorderRadiusStyle(props: TransitionBorderRadiusProps): CSSProperties {

	if (props.scope === TransitionBorderRadiusScope.All) return {
		borderColor: props.style?.colour?.toColourString(),
		borderRadius: props.style?.radius,
		borderStyle: props.style?.style,
		borderWidth: props.style?.width,
		boxShadow: props.style?.boxShadow,
		boxSizing: "border-box",
		display: "block",
		height: props.height,
		overflow: "hidden",
		transitionDuration: `${props.durationMs}ms`,
		transitionProperty: "border-radius border-color",
		transitionTimingFunction: TransitionTimingMap[props.timing],
		width: props.width
	};

	return {
		borderBottomColor: props.style?.bottom?.colour?.toColourString(),
		borderLeftColor: props.style?.left?.colour?.toColourString(),
		borderRightColor: props.style?.right?.colour?.toColourString(),
		borderTopColor: props.style?.top?.colour?.toColourString(),

		borderBottomLeftRadius: props.style?.bottom?.leftRadius,
		borderBottomRightRadius: props.style?.bottom?.rightRadius,
		borderTopLeftRadius: props.style?.top?.leftRadius,
		borderTopRightRadius: props.style?.top?.rightRadius,

		borderBottomStyle: props.style?.bottom?.style,
		borderLeftStyle: props.style?.left?.style,
		borderRightStyle: props.style?.right?.style,
		borderTopStyle: props.style?.top?.style,

		borderBottomWidth: props.style?.bottom?.width,
		borderLeftWidth: props.style?.left?.width,
		borderRightWidth: props.style?.right?.width,
		borderTopWidth: props.style?.top?.width,

		boxShadow: props.style?.boxShadow,
		boxSizing: "border-box",
		display: "block",
		height: props.height,
		overflow: "hidden",
		transitionDuration: `${props.durationMs}ms`,
		transitionProperty: "border-radius border-color",
		transitionTimingFunction: TransitionTimingMap[props.timing],
		width: props.width
	};
}
