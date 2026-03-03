import { demoResizeStyle } from "./demo-resize-style.function";
import type { DemoResizeProps } from "./demo-resize-props.type";

export function DemoResize(props: DemoResizeProps) {
	return (
		<div style={demoResizeStyle(props)}>
			{props.children}
		</div>
	);
}
