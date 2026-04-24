import { useCallback } from "react";

import {
	type Callback,
	useResolveState,
	type CallbackWithParameter
} from "@react-library/common";

import { TEXT_FIELD_STYLE_CLASS_INPUT } from "../../../shared/constants/text-field-style-class.const";
import { useTextFieldColourStateContext } from "../../../shared/hooks/text-field-colour-state-context.hook";
import { useTextFieldEventsContext } from "../../../shared/hooks/text-field-events-context.hook";
import { useTextFieldShowContentContext } from "../../../shared/hooks/text-field-show-content-context.hook";
import "../../../shared/styles/text-field-input-style.css";

import { textFieldTextPasswordStyle } from "./styles/text-field-password-input-style.function";
import type { TextFieldPasswordInputProps } from "./types/text-field-password-props.type";

/**
 * Text field password input component
 */
export function TextFieldPasswordInput(props: TextFieldPasswordInputProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();
	const showContent = useTextFieldShowContentContext();
	const textFieldEvents = useTextFieldEventsContext();

	// On value change
	const resolveValue = useCallback<Callback<string>>(() => props.value ?? "", [props.value]);
	const value = useResolveState(resolveValue);
	const handleOnValueChange = useCallback<CallbackWithParameter<React.ChangeEvent<HTMLInputElement>, void>>(
		(event) => {
			if (event.target.value.length === 0) {
				props.onValueChange(undefined);
				return;
			}
			props.onValueChange(event.target.value);
		},
		[props]
	);

	return (
		<input
			className={TEXT_FIELD_STYLE_CLASS_INPUT}
			id={props.name}
			name={props.name}
			onBlur={textFieldEvents.onBlur}
			onChange={handleOnValueChange}
			onFocus={textFieldEvents.onFocus}
			onMouseEnter={textFieldEvents.onMouseEnter}
			onMouseLeave={textFieldEvents.onMouseLeave}
			placeholder={props.label}
			style={textFieldTextPasswordStyle(props.style, colourState)}
			type={showContent ? "text" : "password"}
			value={value}
		/>
	);
}
