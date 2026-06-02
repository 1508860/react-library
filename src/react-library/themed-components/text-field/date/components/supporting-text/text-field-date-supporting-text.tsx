import { useState } from "react";

import { TextFieldSupportingText } from "../../../shared/components/supporting-text";
import type { TextFieldSupportingTextConfigsRight } from "../../../shared/types/text-field-props-supporting-text-config.type";

import type { TextFieldDateProps } from "../../types/text-field-date-props.type";

import { useTextFieldDateSupportingTextLeftState } from "./hooks/text-field-date-supporting-text-left-state.hook";

/**
 * Text field date supporting text component
 */
export function TextFieldDateSupportingText(props: TextFieldDateProps) {

	const leftConfig = useTextFieldDateSupportingTextLeftState(props);
	const [rightConfig] = useState<TextFieldSupportingTextConfigsRight>(() => []);

	return (
		<TextFieldSupportingText
			left={leftConfig}
			right={rightConfig}
			style={props.style}
		/>
	);
}
