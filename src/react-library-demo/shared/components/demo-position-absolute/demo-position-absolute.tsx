import { demoPositionAbsoluteStyle } from "./styles/demo-position-absolute-style.function";
import type { DemoPositionAbsoluteProps } from "./types/demo-position-absolute-props.type";


export function DemoPositionAbsolute(props: DemoPositionAbsoluteProps) {
	return (
		<div style={demoPositionAbsoluteStyle(props)}>
			{props.children}
		</div>
	);
}
