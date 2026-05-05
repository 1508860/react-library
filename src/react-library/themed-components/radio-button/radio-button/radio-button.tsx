import { RadioButtonContainer } from "../shared/components/container";
import { RadioButtonHoveredLayer } from "../shared/components/hovered-layer";
import { RadioButtonIcon } from "../shared/components/icon";
import { RadioButtonInput } from "../shared/components/input";
import { RadioButtonLabel } from "../shared/components/label";
import { RadioButtonPulseLayer } from "../shared/components/pulse-layer";
import { RadioButtonTargetContainer } from "../shared/components/target-container";

import type { RadioButtonProps } from "./types/radio-button-props.type";

/**
 * Radio button component
 */
export function RadioButton(props: RadioButtonProps) {

	return (
		<RadioButtonContainer {...props}>
			<RadioButtonTargetContainer
				{...props}
				key="target-container"
			>
				<RadioButtonIcon {...props} key="icon" />
				<RadioButtonHoveredLayer
					{...props}
					key="hovered-layer"
				/>
				<RadioButtonPulseLayer key="pulse-layer" />
			</RadioButtonTargetContainer>
			<RadioButtonLabel {...props} key="label" />
			<RadioButtonInput {...props} key="input" />
		</RadioButtonContainer>
	);
}
