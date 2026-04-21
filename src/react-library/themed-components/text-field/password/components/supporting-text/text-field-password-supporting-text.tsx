import { TextFieldSupportingText } from "../../../shared/components/supporting-text";

import type { TextFieldPasswordProps } from "../../types/text-field-password-props.type";

import { useTextFieldPasswordSupportingTextLeftState } from "./hooks/text-field-password-supporting-text-left-state.hook";
import { useTextFieldpasswordSupportingTextRightState } from "./hooks/text-field-password-supporting-text-right-state.hook";

/**
 * Text field password supporting text component
 */
export function TextFieldPasswordSupportingText(props: TextFieldPasswordProps) {

	const leftConfig = useTextFieldPasswordSupportingTextLeftState(props);
	const rightConfig = useTextFieldpasswordSupportingTextRightState(props);

	return (
		<TextFieldSupportingText
			left={leftConfig}
			right={rightConfig}
			style={props.style}
		/>
	);
}
