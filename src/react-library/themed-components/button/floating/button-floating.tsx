import { ButtonContainer } from "../shared/components/button-container";
import { ButtonContentResolver } from "../shared/components/button-content-resolver";
import { ButtonDisabledLayer } from "../shared/components/button-disabled-layer";
import { ButtonHoveredLayer } from "../shared/components/button-hovered-layer";
import { ButtonPulseLayer } from "../shared/components/button-pulse-layer";

import { BUTTON_FLOATING_PROPERTY_MAP } from "./constants/button-floating-property-map.const";
import { useButtonFloatingColourState } from "./hooks/use-button-floating-colour-state.hook";
import { useButtonFloatingStyleState } from "./hooks/use-button-floating-style-state.hook";
import type { ButtonFloatingProps } from "./types/button-floating-props.type";

/**
 * Component to handle standard floating buttons
 * @param props
 */
export function ButtonFloating(props: ButtonFloatingProps) {
	return (
		<ButtonContainer<ButtonFloatingProps, ButtonFloatingProps>
			colourStateConfig={props}
			isDisabled={!!props.isDisabled}
			onClick={props.onClick}
			styleConfig={props}
			useColourState={useButtonFloatingColourState}
			useStyleState={useButtonFloatingStyleState}
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
			<ButtonPulseLayer key="button-pulse-layer" />
			<ButtonHoveredLayer
				isDisabled={!!props.isDisabled}
				key="button-hovered-layer"
			/>
		</ButtonContainer>
	);
}
