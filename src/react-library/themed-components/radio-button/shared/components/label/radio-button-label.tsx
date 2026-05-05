import { useFontContext } from "@react-library/common";

import { useRadioButtonColourStateContext } from "../../hooks/radio-button-colour-state-context.hook";
import { useRadioButtonIsHoveredContext } from "../../hooks/radio-button-is-hovered-context.hook";

import { radioButtonLabelStyle } from "./styles/radio-button-label-style.function";
import type { RadioButtonLabelProps } from "./types/radio-button-label-props.type";

/**
 * Radio button label
 */
export function RadioButtonLabel(props: RadioButtonLabelProps) {

	// Contexts
	const font = useFontContext();

	// Local contexts
	const colourState = useRadioButtonColourStateContext();
	const isHovered = useRadioButtonIsHoveredContext();

	return (
		<label
			htmlFor={props.id}
			style={radioButtonLabelStyle(props.isDisabled, font, colourState, isHovered)}
		>
			{props.label}
		</label>
	);
}
