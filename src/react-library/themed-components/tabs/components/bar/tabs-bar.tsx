import { Orientation } from "@react-library/common";
import { Divider } from "@react-library/themed-components";

import { useTabsColourStateContext } from "../../hooks/tabs-colour-state-context.hook";

import { TABS_BAR_CONTENT_SCROLL_STYLE } from "./styles/tabs-bar-content-scroll-style.const";
import { TABS_BAR_CONTENT_STYLE } from "./styles/tabs-bar-content-style.const";
import { tabsBarStyle } from "./styles/tabs-bar-style.function";
import type { TabsBarProps } from "./types/tabs-bar-props.type";

/**
 * Component to handle a tabs bar
 * @param props
 */
export function TabsBar(props: TabsBarProps) {

	const colourState = useTabsColourStateContext();

	return (
		<div style={tabsBarStyle(colourState)}>
			<div style={TABS_BAR_CONTENT_SCROLL_STYLE}>
				<div
					key="content"
					style={TABS_BAR_CONTENT_STYLE}
				>
					{props.children}
				</div>
			</div>
			<Divider
				key="divider"
				orientation={Orientation.Horizontal}
			/>
		</div>
	);
}
