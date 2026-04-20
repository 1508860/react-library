import type { ColourScheme } from "@react-library/common";

import { TextFieldStyleState } from "../enums/text-field-style-state.type";
import type { TextFieldColourStateStyle } from "../types/text-field-colour-state.type";

/**
 * Resolve {@link TextFieldColourStateStyle} for a filled style text field
 * @param styleState
 * @param colourScheme
 */
export function resolveTextFieldColourStateStyleFilled(styleState: TextFieldStyleState, colourScheme: ColourScheme): TextFieldColourStateStyle {
	switch (styleState) {
		case TextFieldStyleState.Disabled: {
			const disabledColour = colourScheme.surface.default.onColour.toColourWithStyleOpacity(0.38);
			return {
				background: disabledColour,
				border: disabledColour,
				inputText: disabledColour,
				label: disabledColour,
				leadingIcon: disabledColour,
				text: disabledColour,
				trailingIcon: disabledColour
			};
		}
		case TextFieldStyleState.Enabled: return {
			background: colourScheme.surface.container.highest,
			border: colourScheme.surface.variant.onColour,
			inputText: colourScheme.surface.default.onColour,
			label: colourScheme.surface.variant.onColour,
			leadingIcon: colourScheme.surface.variant.onColour,
			text: colourScheme.surface.variant.onColour,
			trailingIcon: colourScheme.surface.variant.onColour
		};
		case TextFieldStyleState.Errored: return {
			background: colourScheme.surface.container.highest,
			border: colourScheme.error.default.colour,
			inputText: colourScheme.surface.default.onColour,
			label: colourScheme.error.default.colour,
			leadingIcon: colourScheme.surface.variant.onColour,
			text: colourScheme.surface.variant.onColour,
			trailingIcon: colourScheme.error.default.colour
		};
		case TextFieldStyleState.ErroredFocused: return {
			background: colourScheme.surface.container.highest,
			border: colourScheme.error.default.colour,
			caret: colourScheme.error.default.colour,
			inputText: colourScheme.surface.default.onColour,
			label: colourScheme.error.default.colour,
			leadingIcon: colourScheme.surface.variant.onColour,
			text: colourScheme.surface.variant.onColour,
			trailingIcon: colourScheme.error.default.colour
		};
		case TextFieldStyleState.ErroredHovered: return {
			background: colourScheme.surface.default.onColour.toColourWithStyleOpacity(0.08),
			border: colourScheme.error.container.onColour,
			inputText: colourScheme.surface.default.onColour,
			label: colourScheme.error.container.onColour,
			leadingIcon: colourScheme.surface.variant.onColour,
			text: colourScheme.surface.variant.onColour,
			trailingIcon: colourScheme.error.container.onColour
		};
		case TextFieldStyleState.Focused: return {
			background: colourScheme.surface.container.highest,
			border: colourScheme.primary.default.colour,
			caret: colourScheme.primary.default.colour,
			inputText: colourScheme.surface.default.onColour,
			label: colourScheme.primary.default.colour,
			leadingIcon: colourScheme.surface.variant.onColour,
			text: colourScheme.surface.variant.onColour,
			trailingIcon: colourScheme.surface.variant.onColour
		};
		case TextFieldStyleState.Hovered: return {
			background: colourScheme.surface.default.onColour.toColourWithStyleOpacity(0.08),
			border: colourScheme.surface.default.onColour,
			inputText: colourScheme.surface.default.onColour,
			label: colourScheme.surface.variant.onColour,
			leadingIcon: colourScheme.surface.variant.onColour,
			text: colourScheme.surface.variant.onColour,
			trailingIcon: colourScheme.surface.variant.onColour
		};
	}
}
