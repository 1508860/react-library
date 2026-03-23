import { useContext } from "react";

import { BUTTON_IS_HOVERED_CONTEXT } from "../constants/button-is-hovered-context.const";

/**
 * Returns context for {@link BUTTON_IS_HOVERED_CONTEXT} and ensures a non-null value
 */
export function useButtonIsHoveredContext(): boolean {
	const result = useContext(BUTTON_IS_HOVERED_CONTEXT);
	return result;
};
