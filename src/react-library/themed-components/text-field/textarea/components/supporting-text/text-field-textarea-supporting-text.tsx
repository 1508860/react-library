import { TextFieldSupportingText } from "../../../shared/components/supporting-text";

import type { TextFieldTextareaProps } from "../../types/text-field-textarea-props.type";

import { useTextFieldTextareaSupportingTextLeftState } from "./hooks/text-field-textarea-supporting-text-left-state.hook";
import { useTextFieldTextareaSupportingTextRightState } from "./hooks/text-field-textarea-supporting-text-right-state.hook";

/**
 * Text field textarea supporting text component
 */
export function TextFieldTextareaSupportingText(props: TextFieldTextareaProps) {

	const leftConfig = useTextFieldTextareaSupportingTextLeftState(props);
	const rightConfig = useTextFieldTextareaSupportingTextRightState(props);

	return (
		<TextFieldSupportingText
			left={leftConfig}
			right={rightConfig}
			style={props.style}
		/>
	);
}
