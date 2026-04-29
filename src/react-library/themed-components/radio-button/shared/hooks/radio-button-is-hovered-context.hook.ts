import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { RADIO_BUTTON_IS_HOVERED_CONTEXT } from "../constants/radio-button-is-hovered-context.const";

/**
 * Returns context for {@link RADIO_BUTTON_IS_HOVERED_CONTEXT}
 */
export function useRadioButtonIsHoveredContext(): boolean {
	const result = useContext(RADIO_BUTTON_IS_HOVERED_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
