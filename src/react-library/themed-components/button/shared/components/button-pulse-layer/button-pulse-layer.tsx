import { Fragment } from "react";

import { TransitionPulse, TransitionPulseTiming } from "@react-library/components";

import { useButtonClickedInsetContextOptional } from "../../hooks/button-clicked-inset-context-optional.hook";
import { useButtonColourStateContext } from "../../hooks/button-colour-state-context.hook";

import { BUTTON_PULSE_LAYER_TRANSITION_MS } from "./constants/button-pulse-layer-transition.const";

/**
 * Button pulse layer component.
 * For creating a pulse effect when clicking the button
 * @param props
 */
export function ButtonPulseLayer() {

	const buttonClickedInset = useButtonClickedInsetContextOptional();
	const buttonColourState = useButtonColourStateContext();

	if (!buttonClickedInset) return (
		<Fragment key="no-button-pulse-layer" />
	);

	return (
		<TransitionPulse
			colour={buttonColourState.pulseColour}
			durationMs={BUTTON_PULSE_LAYER_TRANSITION_MS}
			inset={buttonClickedInset.inset}
			key={`button-clicked-inset-layer-${buttonClickedInset.key}`}
			timing={TransitionPulseTiming.EaseInOut}
		/>
	);
}
