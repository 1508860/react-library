import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { RADIO_BUTTON_ON_VALUE_CHANGE_CONTEXT } from "../constants/radio-button-on-value-change-context.const";
import type { RadioButtonOnValueChange } from "../types/radio-button-on-value-change.type";

/**
 * Returns context for {@link RADIO_BUTTON_ON_VALUE_CHANGE_CONTEXT}
 */
export function useRadioButtonOnValueChangeContext(): RadioButtonOnValueChange {
	const result = useContext(RADIO_BUTTON_ON_VALUE_CHANGE_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
