import { useCallback } from "react";

import { type Callback, useResolveState } from "@react-library/common";

import { ScrollTextArea, type ScrollColour } from "../../../../shared";

import { TEXT_FIELD_STYLE_CLASS_INPUT } from "../../../shared/constants/text-field-style-class.const";
import { useTextFieldColourStateContext } from "../../../shared/hooks/text-field-colour-state-context.hook";
import "../../../shared/styles/text-field-input-style.css";

import type { TextFieldReadonlyTextareaProps } from "../../types/text-field-readonly-textarea-props.type";

import { textFieldReadonlyTextareaInputStyle } from "./styles/text-field-readonly-textarea-input-style.function";

/**
 * Text field readonly textarea input component
 */
export function TextFieldReadonlyTextareaInput(props: TextFieldReadonlyTextareaProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();

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

	return (
		<ScrollTextArea
			className={TEXT_FIELD_STYLE_CLASS_INPUT}
			colour={scrollTextareaColour}
			disabled={true}
			id={props.name}
			name={props.name}
			style={textFieldReadonlyTextareaInputStyle(
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
