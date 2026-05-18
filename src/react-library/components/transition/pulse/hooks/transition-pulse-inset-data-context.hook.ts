import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TRANSITION_PULSE_INSET_DATA_CONTEXT } from "../constants/transition-pulse-inset-data-context.const";
import type { TransitionPulseInsetDataContext } from "../types/transition-pulse-inset-data-context.type";

/**
 * Returns context for {@link TRANSITION_PULSE_INSET_DATA_CONTEXT} and ensures a non-null value
 */
export function useTransitionPulseInsetDataContext(): TransitionPulseInsetDataContext {
	const result = useContext(TRANSITION_PULSE_INSET_DATA_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
