import { TextFieldSupportingText } from "../../../shared/components/supporting-text";

import type { TextFieldCurrencyProps } from "../../types/text-field-currency-props.type";

import { useTextFieldCurrencySupportingTextLeftState } from "./hooks/text-field-currency-supporting-text-left-state.hook";
import { useTextFieldCurrencySupportingTextRightState } from "./hooks/text-field-currency-supporting-text-right-state.hook";

/**
 * Text field currency supporting text component
 */
export function TextFieldCurrencySupportingText(props: TextFieldCurrencyProps) {

	const leftConfig = useTextFieldCurrencySupportingTextLeftState(props);
	const rightConfig = useTextFieldCurrencySupportingTextRightState(props);

	return (
		<TextFieldSupportingText
			left={leftConfig}
			right={rightConfig}
			style={props.style}
		/>
	);
}
