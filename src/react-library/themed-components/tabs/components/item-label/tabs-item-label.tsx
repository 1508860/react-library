import { useFontContext } from "@react-library/common";

import { useTabsColourStateContext } from "../../hooks/tabs-colour-state-context.hook";
import { useTabsItemIsActiveContext } from "../../hooks/tabs-item-is-active-context.hook";

import { tabsItemLabelStyle } from "./styles/tabs-item-label-style.function";
import type { TabsItemLabelProps } from "./types/tabs-item-label-props.type";

/**
 * Component to handle a tabs item label
 * @param props
 */
export function TabsItemLabel(props: TabsItemLabelProps) {

	// Contexts
	const font = useFontContext();

	// Local contexts
	const colourState = useTabsColourStateContext();
	const isActive = useTabsItemIsActiveContext();

	return (
		<span style={tabsItemLabelStyle(props.style, font, colourState, isActive)}>
			{props.label}
		</span>
	);
}
