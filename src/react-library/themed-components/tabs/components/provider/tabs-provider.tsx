

import { TABS_COLOUR_STATE_CONTEXT } from "../../constants/tabs-colour-state-context.const";
import { useTabsColourState } from "../../hooks/tabs-colour-state.hook";

import type { TabsProviderProps } from "./types/tabs-provider-props.type";

/**
 * Tabs provider component
 */
export function TabsProvider(props: TabsProviderProps) {

	const colourState = useTabsColourState();

	return (
		<TABS_COLOUR_STATE_CONTEXT value={colourState}>
			{props.children}
		</TABS_COLOUR_STATE_CONTEXT>
	);
}
