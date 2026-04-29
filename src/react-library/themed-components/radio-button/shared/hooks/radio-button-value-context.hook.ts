import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { RADIO_BUTTON_VALUE_CONTEXT } from "../constants/radio-button-value-context.const";
import type { RadioButtonValueOptional } from "../types/radio-button-value-optional.type";

/**
 * Returns context for {@link RADIO_BUTTON_VALUE_CONTEXT}
 */
export function useRadioButtonValueContext(): RadioButtonValueOptional {
	const result = useContext(RADIO_BUTTON_VALUE_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
