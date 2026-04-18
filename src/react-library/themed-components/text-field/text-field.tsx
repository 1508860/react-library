import { TextFieldContainer } from "./components/container";
import { TextFieldInput } from "./components/input";
import type { TextFieldProps } from "./types/text-field-props.type";

/**
 * Text field component
 */
export function TextField(props: TextFieldProps) {
	
	return (
		<TextFieldContainer common={props}>
			<TextFieldInput {...props} />
		</TextFieldContainer>
	);
}

/**
 * TODO
 * - Implement prefix / suffix text based on content type
 * 	- Add elements
 * - Sort out placeholder alignment?
 * - Supporting text add logic
 * - Fix blur preventing click event
 * - Tidy up
 */
