import { useFontContext } from "@react-library/common";

import { useTextFieldColourStateContext } from "../../hooks/text-field-colour-state-context.hook";
import { useTextFieldStyleStateContext } from "../../hooks/text-field-style-state-context.hook";

import { textFieldInnerContainerStyle } from "./styles/text-field-inner-container-style.function";
import type { TextFieldInnerContainerProps } from "./types/text-field-inner-container-props.type";

/**
 * Text field inner container component
 */
export function TextFieldInnerContainer(props: TextFieldInnerContainerProps) {

	// Contexts
	const font = useFontContext();

	// Local contexts
	const colourState = useTextFieldColourStateContext();
	const styleState = useTextFieldStyleStateContext();

	return (
		<div style={textFieldInnerContainerStyle(props, font, colourState, styleState)}>
			{props.children}
		</div>
	);
}
