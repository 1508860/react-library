import { useCallback } from "react";

import { transitionPulseStyle } from "./styles/transition-pulse-style.function";
import "./styles/transition-pulse.css";
import type { TransitionPulseProps } from "./types/transition-pulse-props.type";

/**
 * Component for handling a pulse effect within a containing relative component
 * @param props
 */
export function TransitionPulse(props: TransitionPulseProps) {

	const handleOnComplete = useCallback(
		() => {
			if (props.onComplete) props.onComplete();
		},
		[props]
	);

	return (
		<div
			onAnimationEnd={handleOnComplete}
			style={transitionPulseStyle(props)}
		/>
	);
}
