import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TEXT_FIELD_IS_HOVERED_STATE_CONTEXT } from "../constants/text-field-is-hovered-state-context.const";

/**
 * Returns context for {@link TEXT_FIELD_IS_HOVERED_STATE_CONTEXT} and ensures a non-null value
 */
export function useTextFieldIsHoveredStateContext(): boolean {
	const result = useContext(TEXT_FIELD_IS_HOVERED_STATE_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
