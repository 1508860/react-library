import { useCallback } from "react";

import { useResolveState, type Callback, type CallbackWithParameter } from "@react-library/common";

import { TEXT_FIELD_STYLE_CLASS_INPUT } from "../../../shared/constants/text-field-style-class.const";
import { useTextFieldColourStateContext } from "../../../shared/hooks/text-field-colour-state-context.hook";
import { useTextFieldEventsContext } from "../../../shared/hooks/text-field-events-context.hook";
import "../../../shared/styles/text-field-input-style.css";

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
	const resolveValue = useCallback<Callback<string>>(
		() => {
			if (props.value === undefined || isNaN(props.value)) return "";
			return props.value.toString();
		},
		[props.value]
	);
	const value = useResolveState(resolveValue);
	const handleOnValueChange = useCallback<CallbackWithParameter<React.ChangeEvent<HTMLInputElement>, void>>(
		(event) => {
			const newValue: string = event.target.value.trim();
			if (newValue.length === 0) {
				props.onValueChange(undefined);
				return;
			}
			const newValueParsed: number = parseFloat(newValue);
			props.onValueChange(newValueParsed);
		},
		[props]
	);

	return (
		<input
			className={TEXT_FIELD_STYLE_CLASS_INPUT}
			disabled={props.isDisabled}
			id={props.id}
			max={props.validation?.maxValue}
			min={props.validation?.minValue}
			name={props.name}
			onBlur={textFieldEvents.onBlur}
			onChange={handleOnValueChange}
			onFocus={textFieldEvents.onFocus}
			onPointerCancel={textFieldEvents.onPointerLeave}
			onPointerEnter={textFieldEvents.onPointerEnter}
			onPointerLeave={textFieldEvents.onPointerLeave}
			placeholder={props.label}
			step={props.valueStep}
			style={textFieldNumberInputStyle(props.extraTextPosition, props.style, colourState)}
			type="number"
			value={value}
		/>
	);
}
