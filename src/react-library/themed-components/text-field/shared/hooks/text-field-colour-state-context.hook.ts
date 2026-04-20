import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TEXT_FIELD_COLOUR_STATE_CONTEXT } from "../constants/text-field-colour-state-context.const";
import type { TextFieldColourState } from "../types/text-field-colour-state.type";

/**
 * Returns context for {@link TEXT_FIELD_COLOUR_STATE_CONTEXT} and ensures a non-null value
 */
export function useTextFieldColourStateContext(): TextFieldColourState {
	const result = useContext(TEXT_FIELD_COLOUR_STATE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
