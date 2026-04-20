import { TextFieldSupportingText } from "../../../shared/components/supporting-text";

import type { TextFieldTextProps } from "../../types/text-field-text-props.type";

import { useTextFieldTextSupportingTextLeftState } from "../hooks/text-field-text-supporting-text-left-state.hook";
import { useTextFieldTextSupportingTextRightState } from "../hooks/text-field-text-supporting-text-right-state.hook";

/**
 * Text field text supporting text component
 */
export function TextFieldTextSupportingText(props: TextFieldTextProps) {

	const leftConfig = useTextFieldTextSupportingTextLeftState(props);
	const rightConfig = useTextFieldTextSupportingTextRightState(props);

	return (
		<TextFieldSupportingText
			left={leftConfig}
			right={rightConfig}
			style={props.style}
		/>
	);
}
