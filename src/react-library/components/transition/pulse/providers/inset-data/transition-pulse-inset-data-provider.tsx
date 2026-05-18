import { TRANSITION_PULSE_INSET_DATA_CONTEXT } from "../../constants/transition-pulse-inset-data-context.const";

import type { TransitionPulseInsetDataProviderProps } from "./types/transition-pulse-inset-data-provider-props.type";

/**
 * Component for providing inset data for the transition pulse component
 * @param props
 */
export function TransitionPulseInsetDataProvider(props: TransitionPulseInsetDataProviderProps) {
	return (
		<TRANSITION_PULSE_INSET_DATA_CONTEXT value={props.insetData}>
			{props.children}
		</TRANSITION_PULSE_INSET_DATA_CONTEXT>
	);
}
