import { TransitionPulseColourProvider } from "@react-library/components";

import { TABS_ACTIVE_ITEM_ID_CONTEXT } from "../../constants/tabs-active-item-id-context.const";
import { TABS_COLOUR_STATE_CONTEXT } from "../../constants/tabs-colour-state-context.const";
import { useTabsColourState } from "../../hooks/tabs-colour-state.hook";

import type { TabsProviderProps } from "./types/tabs-provider-props.type";

/**
 * Tabs provider component
 */
export function TabsProvider(props: TabsProviderProps) {

	const colourState = useTabsColourState();

	return (
		<TransitionPulseColourProvider colour={colourState.pulse}>
			<TABS_ACTIVE_ITEM_ID_CONTEXT value={props.value}>
				<TABS_COLOUR_STATE_CONTEXT value={colourState}>
					{props.children}
				</TABS_COLOUR_STATE_CONTEXT>
			</TABS_ACTIVE_ITEM_ID_CONTEXT>
		</TransitionPulseColourProvider>
	);
}
