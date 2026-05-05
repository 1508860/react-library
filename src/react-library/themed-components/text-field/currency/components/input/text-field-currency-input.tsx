import { TEXT_FIELD_STYLE_CLASS_INPUT } from "../../../shared/constants/text-field-style-class.const";
import { useTextFieldColourStateContext } from "../../../shared/hooks/text-field-colour-state-context.hook";
import { useTextFieldEventsContext } from "../../../shared/hooks/text-field-events-context.hook";
import "../../../shared/styles/text-field-input-style.css";

import type { TextFieldCurrencyProps } from "../../types/text-field-currency-props.type";

import { textFieldCurrencyInputStyle } from "./styles/text-field-currency-input-style.function";
import { InputCurrency } from "@react-library/components";

/**
 * Text field currency input component
 */
export function TextFieldCurrencyInput(props: TextFieldCurrencyProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();
	const textFieldEvents = useTextFieldEventsContext();

	return (
		<InputCurrency
			className={TEXT_FIELD_STYLE_CLASS_INPUT}
			isDisabled={props.isDisabled}
			id={props.id}
			maxValue={props.validation?.maxValue}
			minValue={props.validation?.minValue}
			name={props.name}
			onBlur={textFieldEvents.onBlur}
			onValueChange={props.onValueChange}
			onFocus={textFieldEvents.onFocus}
			onMouseEnter={textFieldEvents.onMouseEnter}
			onMouseLeave={textFieldEvents.onMouseLeave}
			placeholder={props.label}
			valueStep={props.valueStep}
			style={textFieldCurrencyInputStyle(props.extraTextPosition, props.style, colourState)}
			value={props.value}
		/>
	);
}
