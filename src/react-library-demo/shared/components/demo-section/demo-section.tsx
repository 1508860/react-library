import { useFontContext } from "@react-library/common";

import type { DemoSectionProps } from "./demo-section-props.type";
import {
	demoSectionContent,
	demoSectionStyle,
	demoSectionTitle
} from "./demo-section-style.function";


export function DemoSection(props: DemoSectionProps) {

	const font = useFontContext();

	return (
		<div style={demoSectionStyle()}>
			<div style={demoSectionTitle(font)}>{props.title}</div>
			<div style={demoSectionContent(props)}>
				{props.children}
			</div>
		</div>
	);
}
