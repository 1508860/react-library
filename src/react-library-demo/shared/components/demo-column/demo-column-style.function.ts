import type { CSSProperties } from "react";
import type { DemoColumnProps } from "./demo-column-props.type";

export function demoColumnStyle(props: DemoColumnProps): CSSProperties {
	return {
		display: "inline-block",
		flexGrow: Math.max(props.weight, 1),
		flexShrink: 0,
		overflow: "hidden"
	};
}
