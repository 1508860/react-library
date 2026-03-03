import { demoColumnStyle } from "./demo-column-container-style.function";
import type { DemoColumnContainerProps } from "./demo-column-container-props.type";

export function DemoColumnContainer(props: DemoColumnContainerProps) {
	return (
		<div style={demoColumnStyle(props)}>
			{props.children}
		</div>
	);
}
