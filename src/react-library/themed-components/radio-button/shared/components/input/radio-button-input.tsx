import { useRadioButtonEventsContext } from "../../hooks/radio-button-events-context.hook";
import { useRadioButtonNameContext } from "../../hooks/radio-button-name-context.hook";

import { RADIO_BUTTON_INPUT_STYLE } from "./styles/radio-button-input-style.const";
import type { RadioButtonInputProps } from "./types/radio-button-input-props.type";

/**
 * Radio button input
 */
export function RadioButtonInput(props: RadioButtonInputProps) {

	// Local contexts
	const radioButtonEvents = useRadioButtonEventsContext();
	const radioButtonName = useRadioButtonNameContext();

	return (
		<input
			disabled={props.isDisabled}
			id={props.id}
			name={radioButtonName}
			onChange={radioButtonEvents.onChecked}
			placeholder={props.label}
			style={RADIO_BUTTON_INPUT_STYLE}
			type="radio"
			value={props.value}
		/>
	);
}
