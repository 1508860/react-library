import { useCallback } from "react";

import type { CallbackWithParameter } from "@react-library/common";

import { TEXT_FIELD_STYLE_CLASS_INPUT_PLACEHOLDER } from "../../../shared/constants/text-field-style-class.const";
import { useTextFieldColourStateContext } from "../../../shared/hooks/text-field-colour-state-context.hook";
import { useTextFieldEventsContext } from "../../../shared/hooks/text-field-events-context.hook";
import "../../../shared/styles/text-field-input-placeholder-style.css";

import type { TextFieldNumberProps } from "../../types/text-field-number-props.type";

import { textFieldNumberInputStyle } from "./styles/text-field-number-input-style.function";

/**
 * Text field number input component
 */
export function TextFieldNumberInput(props: TextFieldNumberProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();
	const textFieldEvents = useTextFieldEventsContext();

	// On value change
	const handleOnValueChange = useCallback<CallbackWithParameter<React.ChangeEvent<HTMLInputElement>, void>>(
		(event) => {
			if (event.target.value.trim().length === 0) props.onValueChange(undefined)
			props.onValueChange(parseFloat(event.target.value))
		},
		[props]
	);

	return (
		<input
			className={TEXT_FIELD_STYLE_CLASS_INPUT_PLACEHOLDER}
			disabled={props.isDisabled}
			id={props.name}
			max={props.validation?.maxValue}
			min={props.validation?.minValue}
			name={props.name}
			onBlur={textFieldEvents.onBlur}
			onChange={handleOnValueChange}
			onFocus={textFieldEvents.onFocus}
			onMouseEnter={textFieldEvents.onMouseEnter}
			onMouseLeave={textFieldEvents.onMouseLeave}
			placeholder={props.label}
			step={props.valueStep}
			style={textFieldNumberInputStyle(props.extraTextPosition, props.style, colourState)}
			type="number"
			value={props.value}
		/>
	);
}
