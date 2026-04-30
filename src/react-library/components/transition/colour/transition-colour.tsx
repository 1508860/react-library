import { useCallback } from "react";

import type { Callback } from "@react-library/common";

import { transitionColourStyle } from "./styles/transition-colour-style.function";
import type { TransitionColourProps } from "./types/transition-colour-props.type";

/**
 * Component for handling an colour transition
 * @param props
 */
export function TransitionColour(props: TransitionColourProps) {

	const handleOnComplete = useCallback<Callback<void>>(
		() => {
			if (props.onComplete) props.onComplete();
		},
		[props]
	);

	return (
		<div
			key="transition-colour"
			onTransitionEnd={handleOnComplete}
			style={transitionColourStyle(props)}
		>
			{props.children}
		</div>
	);
}
