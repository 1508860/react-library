import { Fragment } from "react";

import { MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import { TEXT_FIELD_PROPERTY_MAP } from "../../constants/text-field-property-map.const";
import { useTextFieldColourStateContext } from "../../hooks/text-field-colour-state-context.hook";

import type { TextFieldLeadingIconProps } from "./types/text-field-leading-icon-props.type";

/**
 * Text field leading icon component
 */
export function TextFieldLeadingIcon(props: TextFieldLeadingIconProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();

	if (props.leadingIconName === undefined) return (
		<Fragment key="no-leading-icon" />
	);

	return (
		<MaterialIconSvg
			colour={colourState.style.leadingIcon}
			key="leading-icon"
			name={props.leadingIconName}
			size={TEXT_FIELD_PROPERTY_MAP.style[props.style].iconSize}
			style={MaterialIconStyle.Default}
		/>
	);
}
