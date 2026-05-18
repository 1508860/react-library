import { TransitionPulse, TransitionTiming } from "@react-library/components";

import { ButtonContainer } from "../../../shared/components/button-container";
import { ButtonContentContainer } from "../../../shared/components/button-content-container";
import { ButtonContentResolver } from "../../../shared/components/button-content-resolver";
import { ButtonDisabledLayer } from "../../../shared/components/button-disabled-layer";
import { ButtonHoveredLayer } from "../../../shared/components/button-hovered-layer";
import { BUTTON_TRANSITION_PULSE_LAYER__MS } from "../../../shared/constants/button-transition.const";

import { BUTTON_SPLIT_PROPERTY_MAP } from "../../constants/button-split-property-map.const";
import { useButtonSplitColourState } from "../../hooks/use-button-split-colour-state.hook";
import type { ButtonSplitProps } from "../../types/button-split-props.type";

/**
 * Component to handle the button split standard button
 * @param props
 */
export function ButtonSplitStandard(props: ButtonSplitProps) {
	return (
		<ButtonContainer<ButtonSplitProps>
			colourStateConfig={props}
			isDisabled={!!props.isDisabled}
			onClick={props.onClick}
			useColourState={useButtonSplitColourState}
		>
			<ButtonContentContainer
				borderBottomLeftRadius={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.borderRadius.outside}
				borderBottomRightRadius={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.borderRadius.inside}
				borderTopLeftRadius={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.borderRadius.outside}
				borderTopRightRadius={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.borderRadius.inside}
				borderWidth={BUTTON_SPLIT_PROPERTY_MAP.style[props.style].borderWidth}
				columnGap={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.gap}
				fontSize={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.fontSize}
				height={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].height}
				paddingHorizontal={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.content[props.content.content].paddingHorizontal}
				width={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.content[props.content.content].width}
			>
				<ButtonContentResolver
					content={props.content}
					iconSize={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.iconSize}
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
