import { useCallback } from "react";

import type { Callback } from "@react-library/common";

import { useRadioButtonNameContext } from "../../hooks/radio-button-name-context.hook";
import { useRadioButtonOnValueChangeContext } from "../../hooks/radio-button-on-value-change-context.hook";

import { RADIO_BUTTON_INPUT_STYLE } from "./styles/radio-button-input-style.const";
import type { RadioButtonInputProps } from "./types/radio-button-input-props.type";

/**
 * Radio button input
 */
export function RadioButtonInput(props: RadioButtonInputProps) {

	// Local contexts
	const radioButtonName = useRadioButtonNameContext();
	const radioButtonOnValueChange = useRadioButtonOnValueChangeContext();

	const handleOnValueChange = useCallback<Callback<void>>(
		() => radioButtonOnValueChange(props.value),
		[props.value, radioButtonOnValueChange]
	)

	return (
		<input
			disabled={props.isDisabled}
			id={props.id}
			name={radioButtonName}
			onChange={handleOnValueChange}
			placeholder={props.label}
			style={RADIO_BUTTON_INPUT_STYLE}
			type="radio"
			value={props.value}
		/>
	);
}
