import { useCallback } from "react";

import { type Callback, useResolveState } from "@react-library/common";

import { useTextFieldColourStateContext } from "../../../shared/hooks/text-field-colour-state-context.hook";

import type { TextFieldReadonlyProps } from "../../types/text-field-readonly-props.type";

import { textFieldReadonlyInputStyle } from "./styles/text-field-readonly-input-style.function";

/**
 * Text field readonly input component
 */
export function TextFieldReadonlyInput(props: TextFieldReadonlyProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();

	// On value change
	const resolveValue = useCallback<Callback<string>>(() => props.value ?? "", [props.value]);
	const value = useResolveState(resolveValue);

	return (
		<input
			disabled={true}
			id={props.name}
			name={props.name}
			style={textFieldReadonlyInputStyle(props.extraTextPosition, props.style, colourState)}
			type="text"
			value={value}
		/>
	);
}
