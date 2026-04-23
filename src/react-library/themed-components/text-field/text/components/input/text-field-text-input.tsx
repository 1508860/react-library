import { useCallback } from "react";

import {
	type Callback,
	useResolveState,
	type CallbackWithParameter
} from "@react-library/common";

import { TEXT_FIELD_STYLE_CLASS_INPUT } from "../../../shared/constants/text-field-style-class.const";
import { useTextFieldColourStateContext } from "../../../shared/hooks/text-field-colour-state-context.hook";
import { useTextFieldEventsContext } from "../../../shared/hooks/text-field-events-context.hook";
import "../../../shared/styles/text-field-input-style.css";

import type { TextFieldTextProps } from "../../types/text-field-text-props.type";

import { textFieldTextInputStyle } from "./styles/text-field-text-input-style.function";

/**
 * Text field text input component
 */
export function TextFieldTextInput(props: TextFieldTextProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();
	const textFieldEvents = useTextFieldEventsContext();

	// On value change
	const resolveValue = useCallback<Callback<string>>(() => props.value ?? "", [props.value]);
	const value = useResolveState(resolveValue);
	const handleOnValueChange = useCallback<CallbackWithParameter<React.ChangeEvent<HTMLInputElement>, void>>(
		(event) => {
			if (event.target.value.trim().length === 0) props.onValueChange(undefined);
			props.onValueChange(event.target.value);
		},
		[props]
	);

	return (
		<input
			className={TEXT_FIELD_STYLE_CLASS_INPUT}
			disabled={props.isDisabled}
			id={props.name}
			name={props.name}
			onBlur={textFieldEvents.onBlur}
			onChange={handleOnValueChange}
			onFocus={textFieldEvents.onFocus}
			onMouseEnter={textFieldEvents.onMouseEnter}
			onMouseLeave={textFieldEvents.onMouseLeave}
			placeholder={props.label}
			style={textFieldTextInputStyle(props.extraTextPosition, props.style, colourState)}
			type="text"
			value={value}
		/>
	);
}
