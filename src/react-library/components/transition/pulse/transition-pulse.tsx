import { useCallback, useEffect, useState } from "react";

import { transitionPulseStyle } from "./styles/transition-pulse-style.function";
import type { TransitionPulseProps } from "./types/transition-pulse-props.type";

/**
 * Component for handling a pulse effect within a containing relative component
 * @param props
 */
export function TransitionPulse(props: TransitionPulseProps) {
	return (
		<TransitionPulseItem {...props} key={props.transitionId} />
	);
}

function TransitionPulseItem(props: TransitionPulseProps) {

	const [applyTransition, setApplyTransition] = useState<boolean>(false);

	useEffect(
		() => setApplyTransition(true),
		[props]
	);

	const handleTransitionEnd = useCallback(
		() => {
			props.onComplete();
			setApplyTransition(false);
		},
		[props]
	);

	return (
		<div
			onTransitionEnd={handleTransitionEnd}
			style={transitionPulseStyle(props, applyTransition)}
		/>
	);
}
