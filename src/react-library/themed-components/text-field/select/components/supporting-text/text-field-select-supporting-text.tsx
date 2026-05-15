import { useState } from "react";

import { TextFieldSupportingText } from "../../../shared/components/supporting-text";
import type { TextFieldSupportingTextConfigsRight } from "../../../shared/types/text-field-props-supporting-text-config.type";

import type { TextFieldSelectItemId } from "../../types/text-field-select-item-id.type";
import type { TextFieldSelectProps } from "../../types/text-field-select-props.type";

import { useTextFieldSelectSupportingTextLeftState } from "./hooks/text-field-select-supporting-text-left-state.hook";

/**
 * Text field select supporting text component
 */
export function TextFieldSelectSupportingText<TId extends TextFieldSelectItemId>(props: TextFieldSelectProps<TId>) {

	const leftConfig = useTextFieldSelectSupportingTextLeftState(props);
	const [rightConfig] = useState<TextFieldSupportingTextConfigsRight>(() => []);

	return (
		<TextFieldSupportingText
			left={leftConfig}
			right={rightConfig}
			style={props.style}
		/>
	);
}
