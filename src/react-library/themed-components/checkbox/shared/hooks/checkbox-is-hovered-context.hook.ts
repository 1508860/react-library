import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { CHECKBOX_IS_HOVERED_CONTEXT } from "../constants/checkbox-is-hovered-context.const";

/**
 * Returns context for {@link CHECKBOX_IS_HOVERED_CONTEXT} and ensures a non-null value
 */
export function useCheckboxIsHoveredContext(): boolean {
	const result = useContext(CHECKBOX_IS_HOVERED_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
