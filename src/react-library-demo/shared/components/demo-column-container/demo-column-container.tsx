import { demoColumnContainerStyle } from "./demo-column-container-style.function";
import type { DemoColumnContainerProps } from "./demo-column-container-props.type";

export function DemoColumnContainer(props: DemoColumnContainerProps) {
	return (
		<div style={demoColumnContainerStyle(props)}>
			{props.children}
		</div>
	);
}
