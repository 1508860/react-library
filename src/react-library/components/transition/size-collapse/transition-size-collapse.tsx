import { useCallback } from "react";

import type { Callback } from "@react-library/common";

import { transitionSizeCollapseContentStyle } from "./styles/transition-size-collapse-content-style.function";
import { transitionSizeCollapseStyle } from "./styles/transition-size-collapse-style.function";
import type { TransitionSizeCollapseProps } from "./types/transition-size-collapse-props.type";

/**
 * Component for handling an size collapse transition
 * @param props
 */
export function TransitionSizeCollapse(props: TransitionSizeCollapseProps) {

	const handleOnComplete = useCallback<Callback<void>>(
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
			<div style={transitionSizeCollapseContentStyle(props.direction)}>
				{props.children}
			</div>
		</div>
	);
}
