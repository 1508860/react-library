import { Fragment } from "react";

import {
	MaterialIconName,
	MaterialIconStyle,
	MaterialIconSvg
} from "@react-library/material-icons";

import { TEXT_FIELD_PROPERTY_MAP } from "../../constants/text-field-property-map.const";
import { useTextFieldColourStateContext } from "../../hooks/text-field-colour-state-context.hook";
import { useTextFieldIsErrored } from "../../hooks/text-field-is-errored-state.hook";

import type { TextFieldIconErrorProps } from "./types/text-field-icon-error-props.type";

/**
 * Text field icon error component
 */
export function TextFieldIconError(props: TextFieldIconErrorProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();

	// Error state
	const isErrored = useTextFieldIsErrored();

	if (!isErrored) return (
		<Fragment key="no-icon-error" />
	);

	return (
		<MaterialIconSvg
			colour={colourState.trailingIcon}
			key="trailing-icon-error"
			name={MaterialIconName.Error}
			size={TEXT_FIELD_PROPERTY_MAP.style[props.style].iconSize}
			style={MaterialIconStyle.DefaultFilled}
		/>
	);
}
