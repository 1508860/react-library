import { Fragment, useCallback, useEffect, useState } from "react";

import type { Callback } from "@react-library/common";
import { TransitionPulse, TransitionTiming } from "@react-library/components";

import { useRadioButtonClickedInsetContextOptional } from "../../hooks/radio-button-clicked-inset-context-optional.hook";
import { useRadioButtonColourStateContext } from "../../hooks/radio-button-colour-state-context.hook";

import { RADIO_BUTTON_PULSE_LAYER_TRANSITION_MS } from "./constants/radio-button-pulse-layer-transition.const";

/**
 * Radio button pulse layer component.
 * For creating a pulse effect when clicking the radio button
 * @param props
 */
export function RadioButtonPulseLayer() {

	const radioButtonClickedInset = useRadioButtonClickedInsetContextOptional();
	const radioButtonColourState = useRadioButtonColourStateContext();

	const [show, setShow] = useState<boolean>(() => !!radioButtonClickedInset);
	const handleOnComplete = useCallback<Callback<void>>(() => setShow(false), []);

	useEffect(() => setShow(!!radioButtonClickedInset), [radioButtonClickedInset]);

	if (!radioButtonClickedInset || !show) return (
		<Fragment key="no-pulse-layer" />
	);

	return (
		<TransitionPulse
			colour={radioButtonColourState.pulseColour}
			durationMs={RADIO_BUTTON_PULSE_LAYER_TRANSITION_MS}
			inset={radioButtonClickedInset.inset}
			key={`clicked-inset-layer-${radioButtonClickedInset.key}`}
			timing={TransitionTiming.EaseInOut}
			onComplete={handleOnComplete}
		/>
	);
}
