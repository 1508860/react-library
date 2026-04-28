import { useContext } from "react";

import { CHECKBOX_SUBSCRIBER_STATE_CONTEXT } from "../constants/checkbox-subscriber-state-context.const";
import type { CheckboxSubscriberState } from "../types/checkbox-subscriber-state.type";

/**
 * Returns context for {@link CHECKBOX_SUBSCRIBER_STATE_CONTEXT} and allows for an optional value
 */
export function useCheckboxSubscriberStateContextOptional(): CheckboxSubscriberState | null {
	const result = useContext(CHECKBOX_SUBSCRIBER_STATE_CONTEXT);
	return result;
};
