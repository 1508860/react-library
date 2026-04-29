import { RADIO_BUTTON_TARGET_CONTAINER_STYLE } from "./styles/radio-button-target-container-style.const";
import type { RadioButtonTargetContainerProps } from "./types/radio-button-target-container-props.type";

/**
 * Radio button target container
 */
export function RadioButtonTargetContainer(props: RadioButtonTargetContainerProps) {
	return (
		<div style={RADIO_BUTTON_TARGET_CONTAINER_STYLE}>
			{props.children}
		</div>
	);
}
