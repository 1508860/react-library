import {
	TransitionBorderRadius,
	TransitionBorderRadiusScope,
	TransitionTiming
} from "@react-library/components";

import { useButtonColourStateContext } from "../../hooks/button-colour-state-context.hook";
import { BUTTON_CONTENT_CONTAINER_TRANSITION_BORDER_RADIUS_MS } from "./constants/button-content-container-transition.const";
import type { ButtonContentContainerProps } from "./types/button-content-container-props.type";
import { buttonContentContainerStyle } from "./styles/button-content-container-style.function";

/**
 * Button content container component.
 * @param props
 */
export function ButtonContentContainer(props: ButtonContentContainerProps) {

	const buttonColourState = useButtonColourStateContext();

	return (
		<TransitionBorderRadius
			durationMs={BUTTON_CONTENT_CONTAINER_TRANSITION_BORDER_RADIUS_MS}
			height={props.height}
			scope={TransitionBorderRadiusScope.Single}
			style={{
				boxShadow: buttonColourState.boxShadow,
				bottom: {
					colour: buttonColourState.borderColour,
					leftRadius: props.borderBottomLeftRadius,
					rightRadius: props.borderBottomRightRadius,
					style: props.borderWidth !== undefined ? "solid" : undefined,
					width: props.borderWidth
				},
				left: {
					colour: buttonColourState.borderColour,
					style: props.borderWidth !== undefined ? "solid" : undefined,
					width: props.borderWidth
				},
				right: {
					colour: buttonColourState.borderColour,
					style: props.borderWidth !== undefined ? "solid" : undefined,
					width: props.borderWidth
				},
				top: {
					colour: buttonColourState.borderColour,
					leftRadius: props.borderTopLeftRadius,
					rightRadius: props.borderTopRightRadius,
					style: props.borderWidth !== undefined ? "solid" : undefined,
					width: props.borderWidth
				},
			}}
			timing={TransitionTiming.OvershootInOut}
			width={props.width}
		>
			<div style={buttonContentContainerStyle(buttonColourState.backgroundColour, props.columnGap, props.fontSize, props.paddingHorizontal)}>
				{props.children}
			</div>
		</TransitionBorderRadius>
	);
}
