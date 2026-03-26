import { useCallback } from "react";
import { transitionFadeContainerStyle } from "./styles/transition-fade-container-style.function";
import "./styles/transition-fade.css";
import type { TransitionFadeProps } from "./types/transition-fade-props.type";

/**
 * Component for handling an fade transition
 * @param props
 */
export function TransitionFade(props: TransitionFadeProps) {

	const handleOnComplete = useCallback<() => void>(
		() => {
			if (props.onComplete) props.onComplete();
		},
		[props]
	);

	return (
		<div
			key={`transition-fade-container-${props.direction}`}
			onAnimationEnd={handleOnComplete}
			style={transitionFadeContainerStyle(props)}
		>
			{props.children}
		</div>
	);
}
