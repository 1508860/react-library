import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TEXT_FIELD_EVENTS_CONTEXT } from "../constants/text-field-events-context.const";
import type { TextFieldEvents } from "../types/text-field-events.type";

/**
 * Returns context for {@link TEXT_FIELD_EVENTS_CONTEXT} and ensures a non-null value
 */
export function useTextFieldEventsContext(): TextFieldEvents {
	const result = useContext(TEXT_FIELD_EVENTS_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
