import { Fragment, useCallback, useEffect, useState } from "react";

import type { Callback } from "@react-library/common";
import { TransitionPulse, TransitionTiming } from "@react-library/components";

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

	const [show, setShow] = useState<boolean>(() => !!buttonClickedInset);
	const handleOnComplete = useCallback<Callback<void>>(() => setShow(false), []);

	useEffect(() => setShow(!!buttonClickedInset), [buttonClickedInset]);

	if (!buttonClickedInset || !show) return (
		<Fragment key="no-pulse-layer" />
	);

	return (
		<TransitionPulse
			colour={buttonColourState.pulseColour}
			durationMs={BUTTON_PULSE_LAYER_TRANSITION_MS}
			inset={buttonClickedInset.inset}
			key={`pulse-layer-${buttonClickedInset.key}`}
			timing={TransitionTiming.EaseInOut}
			onComplete={handleOnComplete}
		/>
	);
}
