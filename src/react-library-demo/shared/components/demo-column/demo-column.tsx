import type { DemoColumnProps } from "./demo-column-props.type";
import { demoColumnStyle } from "./demo-column-style.function";


export function DemoColumn(props: DemoColumnProps) {
	return (
		<div style={demoColumnStyle(props)}>
			{props.children}
		</div>
	);
}
