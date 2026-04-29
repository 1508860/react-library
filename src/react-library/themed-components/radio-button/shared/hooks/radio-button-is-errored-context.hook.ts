import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { RADIO_BUTTON_IS_ERRORED_CONTEXT } from "../constants/radio-button-is-errored-context.const";

/**
 * Returns context for {@link RADIO_BUTTON_IS_ERRORED_CONTEXT}
 */
export function useRadioButtonIsErroredContext(): boolean {
	const result = useContext(RADIO_BUTTON_IS_ERRORED_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
