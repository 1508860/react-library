import {
	MaterialIconName,
	MaterialIconStyle,
	MaterialIconSvg
} from "@react-library/material-icons";

import { RADIO_BUTTON_SIZE_ICON } from "../../constants/radio-button-size.const";
import { useRadioButtonColourStateContext } from "../../hooks/radio-button-colour-state-context.hook";
import { useRadioButtonValueContext } from "../../hooks/radio-button-value-context.hook";

import type { RadioButtonIconProps } from "./types/radio-button-icon-props.type";

/**
 * Radio button icon
 */
export function RadioButtonIcon(props: RadioButtonIconProps) {

	const radioButtonColourState = useRadioButtonColourStateContext();
	const radioButtonValue = useRadioButtonValueContext();

	if (radioButtonValue === props.value) return (
		<MaterialIconSvg
			colour={radioButtonColourState.iconColour}
			key="checked"
			name={MaterialIconName.RadioButtonChecked}
			size={RADIO_BUTTON_SIZE_ICON}
			style={MaterialIconStyle.Default}
		/>
	);

	return (
		<MaterialIconSvg
			colour={radioButtonColourState.iconColour}
			key="unchecked"
			name={MaterialIconName.RadioButtonUnchecked}
			size={RADIO_BUTTON_SIZE_ICON}
			style={MaterialIconStyle.Default}
		/>
	);
}
