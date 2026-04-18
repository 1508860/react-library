import { useCallback, useState } from "react";

import { useFontContext, useResolveState, type Callback } from "@react-library/common";

import { TEXT_FIELD_COLOUR_STATE_CONTEXT } from "../../constants/text-field-colour-state-context.const";
import { TEXT_FIELD_EVENTS_CONTEXT } from "../../constants/text-field-events-context.const";
import { TEXT_FIELD_STYLE_STATE_CONTEXT } from "../../constants/text-field-style-state-context.const";
import { useTextFieldColourState } from "../../hooks/text-field-colour-state.hook";
import { TextFieldStyleState } from "../../enums/text-field-style-state.type";
import type { TextFieldEvents } from "../../types/text-field-events.type";

import { TEXT_FIELD_CONTAINER_STYLE } from "./styles/text-field-container-style.function";
import { textFieldInnerContainerStyle } from "./styles/text-field-inner-container-style.function";
import type { TextFieldContainerProps } from "./types/text-field-container-props.type";

/**
 * Text field container component
 */
export function TextFieldContainer(props: TextFieldContainerProps) {

	const font = useFontContext();

	// Input event states
	const [isErrored, setIsErrored] = useState<boolean>(() => false);
	const [isFocused, setIsFocused] = useState<boolean>(() => false);
	const [isHovered, setIsHovered] = useState<boolean>(() => false);

	const [TextFieldEvents] = useState<TextFieldEvents>(() => ({
		onBlur: () => setIsFocused(false),
		onError: () => setIsErrored(true),
		onFocus: () => setIsFocused(true),
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		onValid: () => setIsErrored(false)
	}));

	// Style state
	const resolveStyleState = useCallback<Callback<TextFieldStyleState>>(
		() => {
			if (props.common.isDisabled) return TextFieldStyleState.Disabled;
			if (isErrored) {
				if (isFocused) return TextFieldStyleState.ErroredFocused;
				if (isHovered) return TextFieldStyleState.ErroredHovered;
				return TextFieldStyleState.Errored;
			}
			if (isFocused) return TextFieldStyleState.Focused;
			if (isHovered) return TextFieldStyleState.Hovered;
			return TextFieldStyleState.Enabled;
		},
		[props.common.isDisabled, isErrored, isFocused, isHovered]
	);
	const styleState = useResolveState(resolveStyleState);

	// Colour state
	const colourState = useTextFieldColourState(props.common.style, styleState);

	return (
		<div style={TEXT_FIELD_CONTAINER_STYLE}>
			<div style={textFieldInnerContainerStyle(props.common, font, colourState, styleState)}>
				<TEXT_FIELD_EVENTS_CONTEXT value={TextFieldEvents}>
					<TEXT_FIELD_STYLE_STATE_CONTEXT value={styleState}>
						<TEXT_FIELD_COLOUR_STATE_CONTEXT value={colourState}>
							{props.children}
						</TEXT_FIELD_COLOUR_STATE_CONTEXT>
					</TEXT_FIELD_STYLE_STATE_CONTEXT>
				</TEXT_FIELD_EVENTS_CONTEXT>
			</div>
		</div>
	);
}
