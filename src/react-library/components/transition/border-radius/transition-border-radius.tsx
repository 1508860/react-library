import { useCallback } from "react";

import { transitionBorderRadiusStyle } from "./styles/transition-border-radius-style.function";
import type { TransitionBorderRadiusProps } from "./types/transition-border-radius-props.type";

/**
 * Component for handling an border radius transition
 * @param props
 */
export function TransitionBorderRadius(props: TransitionBorderRadiusProps) {

	const handleOnComplete = useCallback<() => void>(
		() => {
			if (props.onComplete) props.onComplete();
		},
		[props]
	)

	return (
		<div
			onTransitionEnd={handleOnComplete}
			style={transitionBorderRadiusStyle(props)}
		>
			{props.children}
		</div>
	);
}
