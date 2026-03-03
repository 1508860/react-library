import type { CSSProperties } from "react";
import type { DemoColumnContainerProps } from "./demo-column-container-props.type";

export function demoColumnStyle(props: DemoColumnContainerProps): CSSProperties {
	return {
		display: "flex",
		flexDirection: "row",
		height: props.height,
		overflow: "hidden",
		width: props.width
	};
}
