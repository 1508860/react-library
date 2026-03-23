import { ButtonContainer } from "../shared/components/button-container";
import { ButtonContentResolver } from "../shared/components/button-content-resolver";
import { ButtonDisabledLayer } from "../shared/components/button-disabled-layer";
import { ButtonHoveredLayer } from "../shared/components/button-hovered-layer";
import { ButtonPulseLayer } from "../shared/components/button-pulse-layer";

import { BUTTON_CLICK_PROPERTY_MAP } from "./constants/button-click-property-map.const";
import { useButtonClickColourState } from "./hooks/use-button-click-colour-state.hook";
import { useButtonClickStyleState } from "./hooks/use-button-click-style-state.hook";
import type { ButtonClickProps } from "./types/button-click-props.type";

/**
 * Component to handle standard click buttons
 * @param props
 */
export function ButtonClick(props: ButtonClickProps) {
	return (
		<ButtonContainer<ButtonClickProps, ButtonClickProps>
			colourStateConfig={props}
			isDisabled={!!props.isDisabled}
			onClick={props.onClick}
			styleConfig={props}
			useColourState={useButtonClickColourState}
			useStyleState={useButtonClickStyleState}
		>
			<ButtonContentResolver
				content={props.content}
				iconSize={BUTTON_CLICK_PROPERTY_MAP.size[props.size].iconSize}
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
