import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TEXT_FIELD_STYLE_STATE_CONTEXT } from "../constants/text-field-style-state-context.const";
import type { TextFieldStyleState } from "../enums/text-field-style-state.type";

/**
 * Returns context for {@link TEXT_FIELD_STYLE_STATE_CONTEXT} and ensures a non-null value
 */
export function useTextFieldStyleStateContext(): TextFieldStyleState {
	const result = useContext(TEXT_FIELD_STYLE_STATE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
