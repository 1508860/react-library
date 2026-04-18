import { TextFieldContent } from "../../enums/text-field-content.type";
import type { TextFieldProps } from "../../types/text-field-props.type";

import { TextFieldInputText } from "../input-text";

/**
 * Text field input component
 */
export function TextFieldInput(props: TextFieldProps) {

	if (props.content === TextFieldContent.Currency) return (
		<div />
	);

	if (props.content === TextFieldContent.Number) return (
		<div />
	);

	if (props.content === TextFieldContent.TextArea) return (
		<div />
	);

	// Text
	return (
		<TextFieldInputText {...props} />
	);
}
