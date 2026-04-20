import { useCallback } from "react";

import {
	useColourSchemeContext,
	useResolveState,
	type Callback
} from "@react-library/common";

import { TextFieldStyleState } from "../enums/text-field-style-state.type";
import { TextFieldStyle } from "../enums/text-field-style.type";
import { resolveTextFieldColourStateFilled } from "../functions/resolve-text-field-colour-state-filled.function";
import { resolveTextFieldColourStateOutlined } from "../functions/resolve-text-field-colour-state-outlined.function";
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
				case TextFieldStyle.Filled: return resolveTextFieldColourStateFilled(styleState, colourScheme);
				case TextFieldStyle.Outlined: return resolveTextFieldColourStateOutlined(styleState, colourScheme);
			}
		},
		[style, styleState, colourScheme]
	);
	const state = useResolveState(resolveState);

	return state;
};
