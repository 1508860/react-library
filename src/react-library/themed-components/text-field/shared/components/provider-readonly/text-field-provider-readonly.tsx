import { useState } from "react";

import { TEXT_FIELD_COLOUR_STATE_CONTEXT } from "../../constants/text-field-colour-state-context.const";
import { TEXT_FIELD_IS_POPULATED_STATE_CONTEXT } from "../../constants/text-field-is-populated-state-context.const";
import { TEXT_FIELD_STYLE_STATE_CONTEXT } from "../../constants/text-field-style-state-context.const";
import { useTextFieldColourState } from "../../hooks/text-field-colour-state.hook";
import { TextFieldStyleState } from "../../enums/text-field-style-state.type";
import type { TextFieldIsPopulatedState } from "../../types/text-field-is-populated-state.type";

import type { TextFieldProviderReadonlyProps } from "./types/text-field-provider-readonly-props.type";

/**
 * Text field provider readonly component
 */
export function TextFieldProviderReadonly(props: TextFieldProviderReadonlyProps) {

	const [isPopulated] = useState<TextFieldIsPopulatedState>(() => ({
		isDefault: false,
		isPopulated: true
	}));

	const [styleState] = useState<TextFieldStyleState>(() => TextFieldStyleState.Enabled);

	// Colour state
	const colourState = useTextFieldColourState(props.style, styleState);

	return (
		<TEXT_FIELD_IS_POPULATED_STATE_CONTEXT value={isPopulated}>
			<TEXT_FIELD_STYLE_STATE_CONTEXT value={styleState}>
				<TEXT_FIELD_COLOUR_STATE_CONTEXT value={colourState}>
					{props.children}
				</TEXT_FIELD_COLOUR_STATE_CONTEXT>
			</TEXT_FIELD_STYLE_STATE_CONTEXT>
		</TEXT_FIELD_IS_POPULATED_STATE_CONTEXT>
	);
}
