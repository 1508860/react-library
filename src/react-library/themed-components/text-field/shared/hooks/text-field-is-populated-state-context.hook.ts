import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TEXT_FIELD_IS_POPULATED_STATE_CONTEXT } from "../constants/text-field-is-populated-state-context.const";
import type { TextFieldIsPopulatedState } from "../types/text-field-is-populated-state.type";

/**
 * Returns context for {@link TEXT_FIELD_IS_POPULATED_STATE_CONTEXT} and ensures a non-null value
 */
export function useTextFieldIsPopulatedStateContext(): TextFieldIsPopulatedState {
	const result = useContext(TEXT_FIELD_IS_POPULATED_STATE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
