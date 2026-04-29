import { useFontContext } from "@react-library/common";

import { useRadioButtonColourStateContext } from "../../hooks/radio-button-colour-state-context.hook";

import { radioButtonLabelStyle } from "./styles/radio-button-label-style.function";
import type { RadioButtonLabelProps } from "./types/radio-button-label-props.type";

/**
 * Radio button label
 */
export function RadioButtonLabel(props: RadioButtonLabelProps) {

	const font = useFontContext();

	const radioButtonColourState = useRadioButtonColourStateContext();

	return (
		<label
			htmlFor={props.id}
			style={radioButtonLabelStyle(font, radioButtonColourState)}
		>
			{props.label}
		</label>
	);
}
