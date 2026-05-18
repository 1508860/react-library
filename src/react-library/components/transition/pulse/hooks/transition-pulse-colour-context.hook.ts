import { useContext } from "react";

import { NullContextError, type Colour } from "@react-library/common";

import { TRANSITION_PULSE_COLOUR_CONTEXT } from "../constants/transition-pulse-colour-context.const";

/**
 * Returns context for {@link TRANSITION_PULSE_COLOUR_CONTEXT} and ensures a non-null value
 */
export function useTransitionPulseColourContext(): Colour {
	const result = useContext(TRANSITION_PULSE_COLOUR_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
