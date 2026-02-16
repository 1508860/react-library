import { useFontContext } from "@react-library/common";

import type { DemoItemProps } from "./demo-item-props.type";
import {
	demoItemContent,
	demoItemStyle,
	demoItemLabel
} from "./demo-item-style.function";


export function DemoItem(props: DemoItemProps) {

	const font = useFontContext();

	return (
		<div style={demoItemStyle()}>
			<div style={demoItemContent()}>
				{props.children}
			</div>
			{
				((props.label?.length ?? 0) > 0) ?
					<div style={demoItemLabel(font)}>{props.label}</div> :
					<></>
			}
			{
				(Array.isArray(props.config)) ?
					<ul>
						{props.config.map(configItem => <li>{configItem.key}: {configItem.value}</li>)}
					</ul> :
					<></>
			}
		</div>
	);
}
