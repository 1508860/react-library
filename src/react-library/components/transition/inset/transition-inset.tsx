import { useCallback } from "react";

import type { Callback } from "@react-library/common";

import { transitionInsetStyle } from "./styles/transition-inset-style.function";
import type { TransitionInsetProps } from "./types/transition-inset-props.type";

/**
 * Component for handling an inset transition
 * @param props
 */
export function TransitionInset(props: TransitionInsetProps) {

	const handleOnComplete = useCallback<Callback<void>>(
		() => {
			if (props.onComplete) props.onComplete();
		},
		[props]
	);

	return (
		<div
			key="transition-inset"
			onTransitionEnd={handleOnComplete}
			style={transitionInsetStyle(props)}
		>
			{props.children}
		</div>
	);
}
