import { useCallback, useEffect, useState } from "react";

import type { TransitionPulseProps } from "./transition-pulse-props.type";
import { transitionPulseStyle } from "./transition-pulse-style.function";

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
			props.onDismiss();
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
