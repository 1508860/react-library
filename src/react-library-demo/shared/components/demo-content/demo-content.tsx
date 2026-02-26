import { useFontContext } from "@react-library/common";

import { demoContentStyle } from "./styles/demo-content-style.function";
import type { DemoContentProps } from "./types/demo-content-props.type";


export function DemoContent(props: DemoContentProps) {

	const font = useFontContext();

	return (
		<div style={demoContentStyle(props, font)}>
			{props.text.map(text => <span key={text.id}>{text.text}</span>)}
		</div>
	);
}
