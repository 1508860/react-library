import { TextFieldSupportingText } from "../../../shared/components/supporting-text";

import type { TextFieldNumberProps } from "../../types/text-field-number-props.type";

import { useTextFieldNumberSupportingTextLeftState } from "./hooks/text-field-number-supporting-text-left-state.hook";
import { useTextFieldNumberSupportingTextRightState } from "./hooks/text-field-number-supporting-text-right-state.hook";

/**
 * Text field currency supporting text component
 */
export function TextFieldNumberSupportingText(props: TextFieldNumberProps) {

	const leftConfig = useTextFieldNumberSupportingTextLeftState(props);
	const rightConfig = useTextFieldNumberSupportingTextRightState(props);

	return (
		<TextFieldSupportingText
			left={leftConfig}
			right={rightConfig}
			style={props.style}
		/>
	);
}
