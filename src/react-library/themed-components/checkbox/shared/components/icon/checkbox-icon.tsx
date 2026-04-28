import { Fragment } from "react";

import {
	MaterialIconStyle,
	MaterialIconSvg
} from "@react-library/material-icons";

import { CHECKBOX_SIZE_ICON } from "../../constants/checkbox-size.const";
import { useCheckboxColourStateContext } from "../../hooks/checkbox-colour-state-context.hook";
import { useCheckboxSelectedStateContext } from "../../hooks/checkbox-selected-state-context.hook";

import type { CheckboxIconProps } from "./types/checkbox-icon-props.type";

/**
 * Checkbox icon
 */
export function CheckboxIcon(props: CheckboxIconProps) {

	const checkboxColourState = useCheckboxColourStateContext();
	const checkboxSelectedState = useCheckboxSelectedStateContext();

	return (
		checkboxSelectedState === props.selectedState ?
			<MaterialIconSvg
				colour={checkboxColourState.iconColour}
				key="icon"
				name={props.iconName}
				size={CHECKBOX_SIZE_ICON}
				style={MaterialIconStyle.Default}
			/> :
			<Fragment key="no-icon" />
	);
}
