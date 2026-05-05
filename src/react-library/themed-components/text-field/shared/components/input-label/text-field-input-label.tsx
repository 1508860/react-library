import { useTextFieldColourStateContext } from "../../hooks/text-field-colour-state-context.hook";
import { useTextFieldIsPopulatedStateContext } from "../../hooks/text-field-is-populated-state-context.hook";

import { useTextFieldInputLabelState } from "./hooks/text-field-input-label-state.hook";
import { textFieldInputLabelStyle } from "./styles/text-field-input-label-style.function";
import type { TextFieldInputLabelProps } from "./types/text-field-input-label-props.type";

/**
 * Text field input label component
 */
export function TextFieldInputLabel(props: TextFieldInputLabelProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();
	const isPopulatedState = useTextFieldIsPopulatedStateContext();

	// Label
	const label = useTextFieldInputLabelState(props.label, props.isRequired);

	return (
		<label
			htmlFor={props.id}
			key="label"
			style={textFieldInputLabelStyle(props.style, colourState, isPopulatedState.isPopulated)}
		>
			{label}
		</label>
	);
}
