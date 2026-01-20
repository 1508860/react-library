import { useFontContext } from "@react-library/common";

import type { IDemoItemProps } from "./demo-item-props.interface";
import {
	demoItemContent,
	demoItemStyle,
	demoItemLabel
} from "./demo-item-style.function";


export function DemoItem(props: IDemoItemProps) {

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
				(Array.isArray(props.configItems)) ?
					<ul>
						{props.configItems.map(configItem => <li>{configItem.key}: {configItem.value}</li>)}
					</ul> :
					<></>
			}
		</div>
	);
}
