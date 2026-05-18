import { HoverLayer, TransitionPulse, TransitionTiming } from "@react-library/components";

import { RadioButtonContainer } from "../shared/components/container";
import { RadioButtonIcon } from "../shared/components/icon";
import { RadioButtonInput } from "../shared/components/input";
import { RadioButtonLabel } from "../shared/components/label";
import { RadioButtonTargetContainer } from "../shared/components/target-container";
import { RADIO_BUTTON_TRANSITION_PULSE_LAYER_MS } from "../shared/constants/radio-button-transition.const";

import type { RadioButtonProps } from "./types/radio-button-props.type";

/**
 * Radio button component
 */
export function RadioButton(props: RadioButtonProps) {

	return (
		<RadioButtonContainer {...props}>
			<RadioButtonTargetContainer key="target-container">
				<RadioButtonIcon {...props} key="icon" />
				<TransitionPulse
					durationMs={RADIO_BUTTON_TRANSITION_PULSE_LAYER_MS}
					key="pulse-layer"
					timing={TransitionTiming.EaseInOut}
				/>
				<HoverLayer key="hover-layer" />
			</RadioButtonTargetContainer>
			<RadioButtonLabel {...props} key="label" />
			<RadioButtonInput {...props} key="input" />
		</RadioButtonContainer>
	);
}
