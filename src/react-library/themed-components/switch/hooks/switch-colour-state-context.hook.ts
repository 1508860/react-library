import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { SWITCH_COLOUR_STATE_CONTEXT } from "../constants/switch-colour-state-context.const";
import type { SwitchColourState } from "../types/switch-colour-state.type";

/**
 * Returns context for {@link SWITCH_COLOUR_STATE_CONTEXT} and ensures a non-null value
 */
export function useSwitchColourStateContext(): SwitchColourState {
	const result = useContext(SWITCH_COLOUR_STATE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
