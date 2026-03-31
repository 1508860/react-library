import { useCallback } from "react";

import type { Callback } from "@react-library/common";

import { transitionRotateContainerStyle } from "./styles/transition-rotate-container-style.function";
import type { TransitionRotateProps } from "./types/transition-rotate-props.type";

/**
 * Component for handling a rotation
 * @param props
 */
export function TransitionRotate(props: TransitionRotateProps) {


	const handleOnComplete = useCallback<Callback<void>>(
		() => {
			if (props.onComplete) props.onComplete({
				rotate: props.rotate
			});
		},
		[props]
	);

	return (
		<div
			onTransitionEnd={handleOnComplete}
			style={transitionRotateContainerStyle(props)}
		>
			{props.children}
		</div>
	);
}
