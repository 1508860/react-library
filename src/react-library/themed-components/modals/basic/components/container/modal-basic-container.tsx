import { useColourSchemeContext } from "@react-library/common";
import { TransitionFade, TransitionFadeDirection, TransitionTiming } from "@react-library/components";

import { MODAL_BASIC_TRANSITION_MS } from "../../constants/modal-basic-transition.const";

import { modalBasicContainerStyle } from "./styles/modal-basic-container-style.function";
import type { ModalBasicContainerProps } from "./types/modal-basic-container-props.type";

/**
 * Modal basic container component
 * @param props
 */
export function ModalBasicContainer(props: ModalBasicContainerProps) {

	const colourScheme = useColourSchemeContext();

	return (
		<TransitionFade
			direction={props.show ? TransitionFadeDirection.In : TransitionFadeDirection.Out}
			durationMs={MODAL_BASIC_TRANSITION_MS}
			height="100%"
			timing={TransitionTiming.EaseInOut}
			width="100%"
		>
			<div style={modalBasicContainerStyle(colourScheme)}>
				{props.children}
			</div>
		</TransitionFade>
	);
}
