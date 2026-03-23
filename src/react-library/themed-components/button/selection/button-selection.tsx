import { ButtonContainer } from "../shared/components/button-container";
import { ButtonDisabledLayer } from "../shared/components/button-disabled-layer";
import { ButtonHoveredLayer } from "../shared/components/button-hovered-layer";
import { ButtonPulseLayer } from "../shared/components/button-pulse-layer";

import { ButtonSelectionContentResolver } from "./components/button-selection-content-resolver";
import { BUTTON_SELECTION_PROPERTY_MAP } from "./constants/button-selection-property-map.const";
import { useButtonSelectionColourState } from "./hooks/use-button-selection-colour-state.hook";
import { useButtonSelectionStyleState } from "./hooks/use-button-selection-style-state.hook";
import type { ButtonSelectionProps } from "./types/button-selection-props.type";

/**
 * Component to handle standard selection buttons
 * @param props
 */
export function ButtonSelection(props: ButtonSelectionProps) {
	return (
		<ButtonContainer<ButtonSelectionProps, ButtonSelectionProps>
			colourStateConfig={props}
			isDisabled={!!props.isDisabled}
			onClick={props.onClick}
			styleConfig={props}
			useColourState={useButtonSelectionColourState}
			useStyleState={useButtonSelectionStyleState}
		>
			<ButtonSelectionContentResolver
				content={props.content}
				iconSize={BUTTON_SELECTION_PROPERTY_MAP.size[props.size].iconSize}
				isSelected={props.isSelected}
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
