import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { RADIO_BUTTON_EVENTS_CONTEXT } from "../constants/radio-button-events-context.const";
import type { RadioButtonEvents } from "../types/radio-button-events.type";

/**
 * Returns context for {@link RADIO_BUTTON_EVENTS_CONTEXT} and ensures a non-null value
 */
export function useRadioButtonEventsContext(): RadioButtonEvents {
	const result = useContext(RADIO_BUTTON_EVENTS_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
