import { Fragment, useCallback, useEffect, useState } from "react";

import type { Callback } from "@react-library/common";
import { TransitionPulse, TransitionTiming } from "@react-library/components";

import { useCheckboxClickedInsetContextOptional } from "../../hooks/checkbox-clicked-inset-context-optional.hook";
import { useCheckboxColourStateContext } from "../../hooks/checkbox-colour-state-context.hook";

import { CHECKBOX_PULSE_LAYER_TRANSITION_MS } from "./constants/checkbox-pulse-layer-transition.const";

/**
 * checkbox pulse layer component.
 * For creating a pulse effect when clicking the checkbox
 * @param props
 */
export function CheckboxPulseLayer() {

	const checkboxClickedInset = useCheckboxClickedInsetContextOptional();
	const checkboxColourState = useCheckboxColourStateContext();

	const [show, setShow] = useState<boolean>(() => !!checkboxClickedInset);
	const handleOnComplete = useCallback<Callback<void>>(() => setShow(false), []);

	useEffect(() => setShow(!!checkboxClickedInset), [checkboxClickedInset]);

	if (!checkboxClickedInset || !show) return (
		<Fragment key="no-checkbox-pulse-layer" />
	);

	return (
		<TransitionPulse
			colour={checkboxColourState.pulseColour}
			durationMs={CHECKBOX_PULSE_LAYER_TRANSITION_MS}
			inset={checkboxClickedInset.inset}
			key={`checkbox-clicked-inset-layer-${checkboxClickedInset.key}`}
			timing={TransitionTiming.EaseInOut}
			onComplete={handleOnComplete}
		/>
	);
}
