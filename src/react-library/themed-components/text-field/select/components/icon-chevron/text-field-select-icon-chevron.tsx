import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";
import { useTooltipShowContext } from "@react-library/components";
import {
	MaterialIconName,
	MaterialIconStyle,
	MaterialIconSvg
} from "@react-library/material-icons";

import { TEXT_FIELD_PROPERTY_MAP } from "../../../shared/constants/text-field-property-map.const";
import { useTextFieldColourStateContext } from "../../../shared/hooks/text-field-colour-state-context.hook";

import type { TextFieldSelectIconChevronProps } from "./types/text-field-select-icon-chevron-props.type";

/**
 * Text field select icon chevron component
 */
export function TextFieldSelectIconChevron(props: TextFieldSelectIconChevronProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();
	const tooltipShow = useTooltipShowContext();

	const resolveIconName = useCallback<Callback<MaterialIconName>>(
		() => tooltipShow ? MaterialIconName.KeyboardArrowUp : MaterialIconName.KeyboardArrowDown,
		[tooltipShow]
	);
	const iconName = useResolveState(resolveIconName);

	return (
		<MaterialIconSvg
			colour={colourState.style.trailingIcon}
			key="trailing-icon-error"
			name={iconName}
			size={TEXT_FIELD_PROPERTY_MAP.style[props.style].iconSize}
			style={MaterialIconStyle.DefaultFilled}
		/>
	);
}
