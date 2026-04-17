import type { CSSProperties } from "react";

import type { DemoPositionAbsoluteProps } from "../types/demo-position-absolute-props.type";

export function demoPositionAbsoluteStyle(props: DemoPositionAbsoluteProps): CSSProperties {
	return {
		backgroundColor: "inherit",
		bottom: props.bottom,
		height: props.height,
		left: props.left,
		position: "absolute",
		right: props.right,
		top: props.top,
		width: props.width
	};
}
