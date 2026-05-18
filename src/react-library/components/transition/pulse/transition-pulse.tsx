import { Fragment, useCallback, useEffect, useState } from "react";

import { useTransitionPulseColourContext } from "./hooks/transition-pulse-colour-context.hook";
import { useTransitionPulseInsetDataContext } from "./hooks/transition-pulse-inset-data-context.hook";
import { transitionPulseStyle } from "./styles/transition-pulse-style.function";
import "./styles/transition-pulse.css";
import type { TransitionPulseProps } from "./types/transition-pulse-props.type";

/**
 * Component for handling a pulse effect within a containing relative component
 * @param props
 */
export function TransitionPulse(props: TransitionPulseProps) {

	// Contexts
	const colour = useTransitionPulseColourContext();
	const insetData = useTransitionPulseInsetDataContext();

	// Internal show state
	const [show, setShow] = useState<boolean>(() => !!insetData);

	useEffect(() => setShow(!!insetData), [insetData]);

	// Handle transition complete
	const handleOnComplete = useCallback(
		() => {
			setShow(false);
			if (props.onComplete) props.onComplete();
		},
		[props]
	);

	if (!show) return (
		<Fragment key="no-pulse" />
	);

	return (
		<div
			key={`pulse-${insetData?.key}`}
			onAnimationEnd={handleOnComplete}
			style={transitionPulseStyle(props.durationMs, props.timing, colour, insetData)}
		/>
	);
}
