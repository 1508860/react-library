import { tabsContainerStyle } from "./styles/tabs-container-style.function";
import type { TabsContainerProps } from "./types/tabs-container-props.type";

/**
 * Component to handle a tabs container
 * @param props
 */
export function TabsContainer(props: TabsContainerProps) {

	return (
		<div style={tabsContainerStyle(props.style)}>
			{props.children}
		</div>
	);
}
