import { textFieldInputContainerStyle } from "./styles/text-field-input-container-style.function";
import type { TextFieldInputContainerProps } from "./types/text-field-input-container-props.type";

/**
 * Text field input container component
 */
export function TextFieldInputContainer(props: TextFieldInputContainerProps) {
	return (
		<div
			key="input"
			style={textFieldInputContainerStyle(props.style)}
		>
			{props.children}
		</div>
	);
}
