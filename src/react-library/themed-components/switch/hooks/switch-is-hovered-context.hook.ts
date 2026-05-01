import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { SWITCH_IS_HOVERED_CONTEXT } from "../constants/switch-is-hovered-context.const";

/**
 * Returns context for {@link SWITCH_IS_HOVERED_CONTEXT}
 */
export function useSwitchIsHoveredContext(): boolean {
	const result = useContext(SWITCH_IS_HOVERED_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
