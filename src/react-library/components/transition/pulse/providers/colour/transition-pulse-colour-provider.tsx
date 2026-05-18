import { TRANSITION_PULSE_COLOUR_CONTEXT } from "../../constants/transition-pulse-colour-context.const";

import type { TransitionPulseColourProviderProps } from "./types/transition-pulse-colour-provider-props.type";

/**
 * Component for providing colour for the transition pulse component
 * @param props
 */
export function TransitionPulseColourProvider(props: TransitionPulseColourProviderProps) {
	return (
		<TRANSITION_PULSE_COLOUR_CONTEXT value={props.colour}>
			{props.children}
		</TRANSITION_PULSE_COLOUR_CONTEXT>
	);
}
