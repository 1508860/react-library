import { useFontContext } from "@react-library/common";

import type { DemoContentProps } from "./demo-content-props.type";
import { demoContentStyle } from "./demo-content-style.function";


export function DemoContent(props: DemoContentProps) {

	const font = useFontContext();

	return (
		<div style={demoContentStyle(props, font)}>
			{props.text.map(text => <span key={text.id}>{text.text}</span>)}
		</div>
	);
}
