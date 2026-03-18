import { Fragment } from "react";

import { TransitionPulse, TransitionPulseTiming } from "@react-library/components";

import { BUTTON_PULSE_LAYER_TRANSITION_MS } from "./constants/button-pulse-layer-transition.const";
import type { ButtonPulseLayerProps } from "./types/button-pulse-layer-props.type";

/**
 * Button pulse layer component.
 * For creating a pulse effect when clicking the button
 * @param props
 */
export function ButtonPulseLayer(props: ButtonPulseLayerProps) {

	if (!props.inset) return (
		<Fragment key="no-button-pulse-layer" />
	);

	return (
		<TransitionPulse
			colour={props.colour}
			durationMs={BUTTON_PULSE_LAYER_TRANSITION_MS}
			inset={props.inset.inset}
			key={`button-clicked-inset-layer-${props.inset.key}`}
			onComplete={props.onComplete}
			timing={TransitionPulseTiming.EaseInOut}
		/>
	);
}
