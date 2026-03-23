import { ButtonContainer } from "../../../shared/components/button-container";
import { ButtonContentResolver } from "../../../shared/components/button-content-resolver";
import { ButtonDisabledLayer } from "../../../shared/components/button-disabled-layer";
import { ButtonHoveredLayer } from "../../../shared/components/button-hovered-layer";
import { ButtonPulseLayer } from "../../../shared/components/button-pulse-layer";

import { BUTTON_SPLIT_PROPERTY_MAP } from "../../constants/button-split-property-map.const";
import { useButtonSplitColourState } from "../../hooks/use-button-split-colour-state.hook";
import type { ButtonSplitProps } from "../../types/button-split-props.type";

import { useButtonSplitStandardStyleState } from "./hooks/use-button-split-standard-style-state.hook";

/**
 * Component to handle the button split standard button
 * @param props
 */
export function ButtonSplitStandard(props: ButtonSplitProps) {
	return (
		<ButtonContainer<ButtonSplitProps, ButtonSplitProps>
			colourStateConfig={props}
			isDisabled={!!props.isDisabled}
			onClick={props.onClick}
			styleConfig={props}
			useColourState={useButtonSplitColourState}
			useStyleState={useButtonSplitStandardStyleState}
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
			<ButtonPulseLayer key="button-pulse-layer" />
			<ButtonHoveredLayer
				isDisabled={!!props.isDisabled}
				key="button-hovered-layer"
			/>
		</ButtonContainer>
	);
}
