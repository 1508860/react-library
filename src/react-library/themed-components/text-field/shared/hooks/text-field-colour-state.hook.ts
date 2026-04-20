import { useCallback } from "react";

import {
	useColourSchemeContext,
	useResolveState,
	type Callback
} from "@react-library/common";

import { TextFieldStyleState } from "../enums/text-field-style-state.type";
import { TextFieldStyle } from "../enums/text-field-style.type";
import { resolveTextFieldColourStateStyleFilled } from "../functions/resolve-text-field-colour-state-style-filled.function";
import { resolveTextFieldColourStateStyleOutlined } from "../functions/resolve-text-field-colour-state-style-outlined.function";
import { resolveTextFieldColourStateSupportingText } from "../functions/resolve-text-field-colour-state-supporting-text.function";
import type { TextFieldColourState } from "../types/text-field-colour-state.type";

/**
 * Custom hook to resolve {@link TextFieldColourState} based on parameters
 * @param style
 * @param styleState
 */
export function useTextFieldColourState(style: TextFieldStyle, styleState: TextFieldStyleState): TextFieldColourState {

	const colourScheme = useColourSchemeContext();

	const resolveState = useCallback<Callback<TextFieldColourState>>(
		() => {
			switch (style) {
				case TextFieldStyle.Filled: return {
					style: resolveTextFieldColourStateStyleFilled(styleState, colourScheme),
					supportingText: resolveTextFieldColourStateSupportingText(colourScheme)
				};
				case TextFieldStyle.Outlined: return {
					style: resolveTextFieldColourStateStyleOutlined(styleState, colourScheme),
					supportingText: resolveTextFieldColourStateSupportingText(colourScheme)
				};
			}
		},
		[style, styleState, colourScheme]
	);
	const state = useResolveState(resolveState);

	return state;
};
