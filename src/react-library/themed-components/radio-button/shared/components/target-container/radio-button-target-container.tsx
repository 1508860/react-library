import { useRadioButtonEventsContext } from "../../hooks/radio-button-events-context.hook";

import { RADIO_BUTTON_TARGET_CONTAINER_STYLE } from "./styles/radio-button-target-container-style.const";
import type { RadioButtonTargetContainerProps } from "./types/radio-button-target-container-props.type";

/**
 * Radio button target container
 */
export function RadioButtonTargetContainer(props: RadioButtonTargetContainerProps) {

	// Contexts
	const radioButtonEvents = useRadioButtonEventsContext();

	return (
		<div
			onClick={radioButtonEvents.onChecked}
			style={RADIO_BUTTON_TARGET_CONTAINER_STYLE}>
			{props.children}
		</div>
	);
}
