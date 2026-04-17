import type { CSSProperties } from "react";

import type { DemoColumnContainerProps } from "./demo-column-container-props.type";

export function demoColumnContainerStyle(props: DemoColumnContainerProps): CSSProperties {
	return {
		backgroundColor: "inherit",
		display: "flex",
		flexDirection: "row",
		overflow: "hidden",
		width: props.width
	};
}
