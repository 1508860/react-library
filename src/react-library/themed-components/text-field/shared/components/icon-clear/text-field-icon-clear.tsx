import { Fragment } from "react";

import { MaterialIconName } from "@react-library/material-icons";

import { IconClick } from "../../../../shared";

import { TEXT_FIELD_PROPERTY_MAP } from "../../constants/text-field-property-map.const";
import { useTextFieldColourStateContext } from "../../hooks/text-field-colour-state-context.hook";
import { useTextFieldIsErrored } from "../../hooks/text-field-is-errored-state.hook";
import { useTextFieldIsPopulatedStateContext } from "../../hooks/text-field-is-populated-state-context.hook";

import type { TextFieldIconClearProps } from "./types/text-field-icon-clear-props.type";

/**
 * Text field icon clear component
 */
export function TextFieldIconClear(props: TextFieldIconClearProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();
	const isPopulatedState = useTextFieldIsPopulatedStateContext();

	// Error state
	const isErrored = useTextFieldIsErrored();

	if (isErrored || isPopulatedState.isDefault) return (
		<Fragment key="no-icon-clear" />
	);

	return (
		<IconClick
			colour={colourState.trailingIcon}
			key="icon-clear"
			name={MaterialIconName.Cancel}
			onClick={props.onClear}
			size={TEXT_FIELD_PROPERTY_MAP.style[props.style].iconSize}
		/>
	);
}
