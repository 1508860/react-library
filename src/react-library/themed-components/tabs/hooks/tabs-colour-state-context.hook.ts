import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TABS_COLOUR_STATE_CONTEXT } from "../constants/tabs-colour-state-context.const";
import type { TabsColourState } from "../types/tabs-colour-state.type";

/**
 * Returns context for {@link TABS_COLOUR_STATE_CONTEXT} and ensures a non-null value
 */
export function useTabsColourStateContext(): TabsColourState {
	const result = useContext(TABS_COLOUR_STATE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
