import { TransitionPulse, TransitionTiming } from "@react-library/components";

import { ButtonContainer } from "../shared/components/button-container";
import { ButtonContentContainer } from "../shared/components/button-content-container";
import { ButtonContentResolver } from "../shared/components/button-content-resolver";
import { ButtonDisabledLayer } from "../shared/components/button-disabled-layer";
import { ButtonHoveredLayer } from "../shared/components/button-hovered-layer";
import { BUTTON_TRANSITION_PULSE_LAYER__MS } from "../shared/constants/button-transition.const";

import { BUTTON_TEXT_PROPERTY_MAP } from "./constants/button-text-property-map.const";
import { useButtonTextColourState } from "./hooks/use-button-text-colour-state.hook";
import type { ButtonTextProps } from "./types/button-text-props.type";

/**
 * Component to handle standard text buttons
 * @param props
 */
export function ButtonText(props: ButtonTextProps) {
	return (
		<ButtonContainer<ButtonTextProps>
			colourStateConfig={props}
			isDisabled={!!props.isDisabled}
			onClick={props.onClick}
			useColourState={useButtonTextColourState}
		>
			<ButtonContentContainer
				borderBottomLeftRadius={BUTTON_TEXT_PROPERTY_MAP.size[props.size].borderRadius}
				borderBottomRightRadius={BUTTON_TEXT_PROPERTY_MAP.size[props.size].borderRadius}
				borderTopLeftRadius={BUTTON_TEXT_PROPERTY_MAP.size[props.size].borderRadius}
				borderTopRightRadius={BUTTON_TEXT_PROPERTY_MAP.size[props.size].borderRadius}
				borderWidth={BUTTON_TEXT_PROPERTY_MAP.style[props.style].borderWidth}
				columnGap={BUTTON_TEXT_PROPERTY_MAP.size[props.size].gap}
				fontSize={BUTTON_TEXT_PROPERTY_MAP.size[props.size].fontSize}
				height={BUTTON_TEXT_PROPERTY_MAP.size[props.size].height}
				paddingHorizontal={BUTTON_TEXT_PROPERTY_MAP.size[props.size].content[props.content.content].paddingHorizontal}
			>
				<ButtonContentResolver
					content={props.content}
					iconSize={BUTTON_TEXT_PROPERTY_MAP.size[props.size].iconSize}
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
				<ButtonHoveredLayer
					isDisabled={!!props.isDisabled}
					key="button-hovered-layer"
				/>
			</ButtonContentContainer>
		</ButtonContainer>
	);
}
