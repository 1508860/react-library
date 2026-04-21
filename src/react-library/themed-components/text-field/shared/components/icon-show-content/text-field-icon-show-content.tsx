import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";
import { MaterialIconName } from "@react-library/material-icons";

import { IconClick } from "../../../../shared";

import { TEXT_FIELD_PROPERTY_MAP } from "../../constants/text-field-property-map.const";
import { useTextFieldColourStateContext } from "../../hooks/text-field-colour-state-context.hook";

import type { TextFieldIconShowContentProps } from "./types/text-field-icon-show-content-props.type";

/**
 * Text field icon show content component
 */
export function TextFieldIconShowContent(props: TextFieldIconShowContentProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();

	// Handle on click
	const handlOnClick = useCallback<Callback<void>>(
		() => props.setShowcontent(!props.showContent),
		[props]
	);

	// Icon name
	const resolveIconName = useCallback<Callback<MaterialIconName>>(
		() => props.showContent ? MaterialIconName.VisibilityOff : MaterialIconName.Visibility,
		[props]
	);
	const iconName = useResolveState(resolveIconName);

	return (
		<IconClick
			colour={colourState.style.trailingIcon}
			key="icon-show"
			name={iconName}
			onClick={handlOnClick}
			size={TEXT_FIELD_PROPERTY_MAP.style[props.style].iconSize}
		/>
	);
}
