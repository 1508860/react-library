import { useColourSchemeContext } from "@react-library/common";
import { TransitionFade, TransitionFadeDirection, TransitionTiming } from "@react-library/components";

import { MODAL_FULL_TRANSITION_MS } from "../../constants/modal-full-transition.const";

import { modalFullContainerStyle } from "./styles/modal-full-container-style.function";
import type { ModalFullContainerProps } from "./types/modal-full-container-props.type";

/**
 * Modal full container component
 * @param props
 */
export function ModalFullContainer(props: ModalFullContainerProps) {

	const colourScheme = useColourSchemeContext();

	return (
		<TransitionFade
			direction={props.show ? TransitionFadeDirection.In : TransitionFadeDirection.Out}
			durationMs={MODAL_FULL_TRANSITION_MS}
			height="100%"
			timing={TransitionTiming.EaseInOut}
			width="100%"
		>
			<div style={modalFullContainerStyle(colourScheme)}>
				{props.children}
			</div>
		</TransitionFade>
	);
}
