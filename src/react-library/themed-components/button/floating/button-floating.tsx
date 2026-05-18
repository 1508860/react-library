import { HoverLayer, TransitionPulse, TransitionTiming } from "@react-library/components";

import { ButtonContainer } from "../shared/components/button-container";
import { ButtonContentContainer } from "../shared/components/button-content-container";
import { ButtonContentResolver } from "../shared/components/button-content-resolver";
import { ButtonDisabledLayer } from "../shared/components/button-disabled-layer";
import { BUTTON_TRANSITION_PULSE_LAYER__MS } from "../shared/constants/button-transition.const";

import { BUTTON_FLOATING_PROPERTY_MAP } from "./constants/button-floating-property-map.const";
import { useButtonFloatingColourState } from "./hooks/use-button-floating-colour-state.hook";
import type { ButtonFloatingProps } from "./types/button-floating-props.type";

/**
 * Component to handle standard floating buttons
 * @param props
 */
export function ButtonFloating(props: ButtonFloatingProps) {
	return (
		<ButtonContainer<ButtonFloatingProps>
			colourStateConfig={props}
			isDisabled={!!props.isDisabled}
			onClick={props.onClick}
			useColourState={useButtonFloatingColourState}
		>
			<ButtonContentContainer
				borderBottomLeftRadius={BUTTON_FLOATING_PROPERTY_MAP.size[props.size].shape[props.shape].borderRadius}
				borderBottomRightRadius={BUTTON_FLOATING_PROPERTY_MAP.size[props.size].shape[props.shape].borderRadius}
				borderTopLeftRadius={BUTTON_FLOATING_PROPERTY_MAP.size[props.size].shape[props.shape].borderRadius}
				borderTopRightRadius={BUTTON_FLOATING_PROPERTY_MAP.size[props.size].shape[props.shape].borderRadius}
				columnGap={BUTTON_FLOATING_PROPERTY_MAP.size[props.size].gap}
				fontSize={BUTTON_FLOATING_PROPERTY_MAP.size[props.size].fontSize}
				height={BUTTON_FLOATING_PROPERTY_MAP.size[props.size].height}
				paddingHorizontal={BUTTON_FLOATING_PROPERTY_MAP.size[props.size].content[props.content.content].paddingHorizontal}
				width={BUTTON_FLOATING_PROPERTY_MAP.size[props.size].content[props.content.content].iconWidth}
			>
				<ButtonContentResolver
					content={props.content}
					iconSize={BUTTON_FLOATING_PROPERTY_MAP.size[props.size].iconSize}
					key="button-content-resolver"
				/>
				<ButtonDisabledLayer
					isDisabled={!!props.isDisabled}
					key="button-disabled-layer"
				/>
				<TransitionPulse
					durationMs={BUTTON_TRANSITION_PULSE_LAYER__MS}
					key="button-pulse-layer"
					timing={TransitionTiming.EaseInOut}
				/>
				<HoverLayer key="button-hover-layer" />
			</ButtonContentContainer>
		</ButtonContainer>
	);
}
