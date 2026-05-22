import { TABS_CHILDREN_STYLE } from "./styles/tabs-children-style.const";
import type { TabsChildrenProps } from "./types/tabs-children-props.type";

/**
 * Component to handle a tabs children
 * @param props
 */
export function TabsChildren(props: TabsChildrenProps) {

	return (
		<div style={TABS_CHILDREN_STYLE}>
			{props.children}
		</div>
	);
}
