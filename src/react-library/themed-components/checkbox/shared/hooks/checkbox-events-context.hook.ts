import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { CHECKBOX_EVENTS_CONTEXT } from "../constants/checkbox-events-context.const";
import type { CheckboxEvents } from "../types/checkbox-events.type";

/**
 * Returns context for {@link CHECKBOX_EVENTS_CONTEXT} and ensures a non-null value
 */
export function useCheckboxEventsContext(): CheckboxEvents {
	const result = useContext(CHECKBOX_EVENTS_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
