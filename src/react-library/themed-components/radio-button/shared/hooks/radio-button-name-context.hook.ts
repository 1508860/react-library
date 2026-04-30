import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { RADIO_BUTTON_NAME_CONTEXT } from "../constants/radio-button-name-context.const";
import type { RadioButtonName } from "../types/radio-button-name.type";

/**
 * Returns context for {@link RADIO_BUTTON_NAME_CONTEXT} and ensures a non-null value
 */
export function useRadioButtonNameContext(): RadioButtonName {
	const result = useContext(RADIO_BUTTON_NAME_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
