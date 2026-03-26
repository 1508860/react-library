import type { Property } from "csstype";
import type { CSSProperties } from "react";

import { TransitionTimingMap } from "../../shared/enums/transition-timing-map.type";
import { TransitionSizeDirection } from "../enums/transition-size-direction.type";
import type { TransitionSizeProps } from "../types/transition-size-props.type";

/**
 * Resolve transition size style based on parameters
 * @param props
 */
export function transitionSizeStyle(props: TransitionSizeProps): CSSProperties {

	let transitionProperty: Property.TransitionProperty | undefined = undefined;

	switch (props.direction) {
		case TransitionSizeDirection.All:
			transitionProperty = "height, width";
			break;
		case TransitionSizeDirection.Horizontal:
			transitionProperty = "width";
			break;
		case TransitionSizeDirection.Vertical:
			transitionProperty = "height";
			break;
	}

	return {
		display: "block",
		height: props.height ?? "auto",
		overflow: "visible",
		transitionDuration: `${props.durationMs}ms`,
		transitionProperty: transitionProperty,
		transitionTimingFunction: TransitionTimingMap[props.timing],
		width: props.width ?? "auto"
	};
}
