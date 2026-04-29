

import { CHECKBOX_COLOUR_STATE_CONTEXT } from "../../constants/checkbox-colour-state-context.const";
import { useCheckboxSelectedStateContext } from "../../hooks/checkbox-selected-state-context.hook";
import { useCheckboxColourState } from "../../hooks/use-checkbox-colour-state.hook";

import type { CheckboxGroupProviderProps } from "./types/checkbox-group-provider-props.type";

/**
 * Checkbox group provider
 */
export function CheckboxGroupProvider(props: CheckboxGroupProviderProps) {

	const selectedState = useCheckboxSelectedStateContext();

	// Colour state
	const colourState = useCheckboxColourState(props.isDisabled, false, selectedState);

	return (
		<CHECKBOX_COLOUR_STATE_CONTEXT value={colourState}>
			{props.children}
		</CHECKBOX_COLOUR_STATE_CONTEXT>
	);
}
