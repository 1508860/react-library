import { useCallback } from "react";

import { transitionSizeStyle } from "./styles/transition-size-style.function";
import type { TransitionSizeProps } from "./types/transition-size-props.type";

/**
 * Component for handling an size transition
 * @param props
 */
export function TransitionSize(props: TransitionSizeProps) {

	const handleOnComplete = useCallback<() => void>(
		() => {
			if (props.onComplete) props.onComplete();
		},
		[props]
	);

	return (
		<div
			key={`transition-size-${props.direction}`}
			onTransitionEnd={handleOnComplete}
			style={transitionSizeStyle(props)}
		>
			{props.children}
		</div>
	);
}
