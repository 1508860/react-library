import type { Property } from "csstype";
import type { CSSProperties } from "react";

import type { DemoResizeProps } from "./demo-resize-props.type";

export function demoResizeStyle(props: DemoResizeProps): CSSProperties {
	return {
		backgroundColor: "inherit",
		display: "flex",
		flexDirection: "row",
		height: props.height,
		overflow: "hidden",
		resize: resolveResize(props),
		width: props.width
	};
}

function resolveResize(props: DemoResizeProps): Property.Resize | undefined {

	if (props.resizeHorizontal && props.resizeVertical) return "both";
	if (props.resizeHorizontal) return "horizontal";
	if (props.resizeVertical) return "vertical";

	return undefined;
}
