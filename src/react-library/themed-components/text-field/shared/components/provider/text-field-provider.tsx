import { useCallback, useState } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import { TEXT_FIELD_COLOUR_STATE_CONTEXT } from "../../constants/text-field-colour-state-context.const";
import { TEXT_FIELD_EVENTS_CONTEXT } from "../../constants/text-field-events-context.const";
import { TEXT_FIELD_IS_POPULATED_STATE_CONTEXT } from "../../constants/text-field-is-populated-state-context.const";
import { TEXT_FIELD_STYLE_STATE_CONTEXT } from "../../constants/text-field-style-state-context.const";
import { useTextFieldColourState } from "../../hooks/text-field-colour-state.hook";
import { TextFieldStyleState } from "../../enums/text-field-style-state.type";
import type { TextFieldEvents } from "../../types/text-field-events.type";

import type { TextFieldProviderProps } from "./types/text-field-provider-props.type";

/**
 * Text field provider component
 */
export function TextFieldProvider<TProps>(props: TextFieldProviderProps<TProps>) {

	// Input event states
	const [isErrored, setIsErrored] = useState<boolean>(() => false);
	const [isFocused, setIsFocused] = useState<boolean>(() => false);
	const [isHovered, setIsHovered] = useState<boolean>(() => false);

	const [TextFieldEvents] = useState<TextFieldEvents>(() => ({
		onBlur: () => setIsFocused(false),
		onFocus: () => setIsFocused(true),
		onIsErrored: setIsErrored,
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false)
	}));

	// Is populated
	const isPopulated = props.useIsPopulatedState(props.props);

	// Style state
	const resolveStyleState = useCallback<Callback<TextFieldStyleState>>(
		() => {
			if (props.isDisabled) return TextFieldStyleState.Disabled;
			if (isErrored) {
				if (isFocused) return TextFieldStyleState.ErroredFocused;
				if (isHovered) return TextFieldStyleState.ErroredHovered;
				return TextFieldStyleState.Errored;
			}
			if (isFocused) return TextFieldStyleState.Focused;
			if (isHovered) return TextFieldStyleState.Hovered;
			return TextFieldStyleState.Enabled;
		},
		[props.isDisabled, isErrored, isFocused, isHovered]
	);
	const styleState = useResolveState(resolveStyleState);

	// Colour state
	const colourState = useTextFieldColourState(props.style, styleState);

	return (
		<TEXT_FIELD_EVENTS_CONTEXT value={TextFieldEvents}>
			<TEXT_FIELD_IS_POPULATED_STATE_CONTEXT value={isPopulated}>
				<TEXT_FIELD_STYLE_STATE_CONTEXT value={styleState}>
					<TEXT_FIELD_COLOUR_STATE_CONTEXT value={colourState}>
						{props.children}
					</TEXT_FIELD_COLOUR_STATE_CONTEXT>
				</TEXT_FIELD_STYLE_STATE_CONTEXT>
			</TEXT_FIELD_IS_POPULATED_STATE_CONTEXT>
		</TEXT_FIELD_EVENTS_CONTEXT>
	);
}
