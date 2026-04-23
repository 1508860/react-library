import { useCallback } from "react";

import { type Callback, useResolveState, type CallbackWithParameter } from "@react-library/common";

import { ScrollTextArea, type ScrollColour } from "../../../../shared";

import { TEXT_FIELD_STYLE_CLASS_INPUT } from "../../../shared/constants/text-field-style-class.const";
import { useTextFieldColourStateContext } from "../../../shared/hooks/text-field-colour-state-context.hook";
import { useTextFieldEventsContext } from "../../../shared/hooks/text-field-events-context.hook";
import "../../../shared/styles/text-field-input-style.css";

import type { TextFieldTextareaProps } from "../../types/text-field-textarea-props.type";

import { textFieldTextareaInputStyle } from "./styles/text-field-textarea-input-style.function";

/**
 * Text field textarea input component
 */
export function TextFieldTextareaInput(props: TextFieldTextareaProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();
	const textFieldEvents = useTextFieldEventsContext();

	// Scroll textarea
	const resolveScrollTextareaColour = useCallback<Callback<ScrollColour>>(
		() => ({
			scrollbarColour: colourState.style.border
		}),
		[colourState.style.border]
	);
	const scrollTextareaColour = useResolveState(resolveScrollTextareaColour);

	// On value change
	const resolveValue = useCallback<Callback<string>>(() => props.value ?? "", [props.value]);
	const value = useResolveState(resolveValue);
	const handleOnValueChange = useCallback<CallbackWithParameter<React.ChangeEvent<HTMLTextAreaElement>, void>>(
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
		<ScrollTextArea
			className={TEXT_FIELD_STYLE_CLASS_INPUT}
			colour={scrollTextareaColour}
			disabled={props.isDisabled}
			id={props.name}
			name={props.name}
			onBlur={textFieldEvents.onBlur}
			onChange={handleOnValueChange}
			onFocus={textFieldEvents.onFocus}
			onMouseEnter={textFieldEvents.onMouseEnter}
			onMouseLeave={textFieldEvents.onMouseLeave}
			placeholder={props.label}
			style={textFieldTextareaInputStyle(
				props.inputheight,
				props.inputMaxheight,
				props.inputMinheight,
				props.style,
				colourState
			)}
			value={value}
		/>
	);
}
