import { useCallback } from "react";

import { TRANSITION_SIZE_COLLAPSE_CONTENT_STYLE } from "./styles/transition-size-collapse-content-style.const";
import { transitionSizeCollapseStyle } from "./styles/transition-size-collapse-style.function";
import type { TransitionSizeCollapseProps } from "./types/transition-size-collapse-props.type";

/**
 * Component for handling an size collapse transition
 * @param props
 */
export function TransitionSizeCollapse(props: TransitionSizeCollapseProps) {

	const handleOnComplete = useCallback<() => void>(
		() => {
			if (props.onComplete) props.onComplete();
		},
		[props]
	);

	return (
		<div
			key={`transition-size-collapse-${props.direction}`}
			onTransitionEnd={handleOnComplete}
			style={transitionSizeCollapseStyle(props)}
		>
			<div style={TRANSITION_SIZE_COLLAPSE_CONTENT_STYLE}>
				{props.children}
			</div>
		</div>
	);
}
