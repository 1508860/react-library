import { useCallback } from "react";

import {
	type Callback,
	useResolveState,
	type CallbackWithParameter
} from "@react-library/common";

import { useTextFieldColourStateContext } from "../../../shared/hooks/text-field-colour-state-context.hook";
import { useTextFieldEventsContext } from "../../../shared/hooks/text-field-events-context.hook";
import type { TextFieldPasswordProps } from "../../types/text-field-password-props.type";

import "./styles/text-field-password-input-style.css";
import { textFieldTextPasswordStyle } from "./styles/text-field-password-input-style.function";

/**
 * Text field text password component
 */
export function TextFieldTextPassword(props: TextFieldPasswordProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();
	const textFieldEvents = useTextFieldEventsContext();

	// On value change
	const resolveValue = useCallback<Callback<string>>(() => props.value ?? "", [props.value]);
	const value = useResolveState(resolveValue);
	const handleOnValueChange = useCallback<CallbackWithParameter<React.ChangeEvent<HTMLInputElement>, void>>(
		(event) => {
			if (event.target.value.trim().length === 0) props.onValueChange(undefined)
			props.onValueChange(event.target.value)
		},
		[props]
	);

	return (
		<input
			className="react-library-themed-components-text-field-text"
			id={props.name}
			key="input"
			name={props.name}
			onBlur={textFieldEvents.onBlur}
			onChange={handleOnValueChange}
			onFocus={textFieldEvents.onFocus}
			onMouseEnter={textFieldEvents.onMouseEnter}
			onMouseLeave={textFieldEvents.onMouseLeave}
			placeholder={props.label}
			style={textFieldTextPasswordStyle(props.style, colourState)}
			type="password"
			value={value}
		/>
	);
}
