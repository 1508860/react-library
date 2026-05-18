import { TransitionPulse, TransitionTiming } from "@react-library/components";

import { MaterialIconName } from "@react-library/material-icons";

import { CheckboxContainer } from "../shared/components/container";
import { CheckboxHoveredLayer } from "../shared/components/hovered-layer";
import { CheckboxIcon } from "../shared/components/icon";
import { CheckboxInput } from "../shared/components/input";
import { CheckboxLabel } from "../shared/components/label";
import { CheckboxProvider } from "../shared/components/provider";
import { CheckboxTarget } from "../shared/components/target";
import { CheckboxTargetContainer } from "../shared/components/target-container";
import { CHECKBOX_TRANSITION_PULSE_LAYER_MS } from "../shared/constants/checkbox-transition.const";
import { CheckboxSelectedState } from "../shared/enums/checkbox-selected-state.type";

import type { CheckboxProps } from "./types/checkbox-props.type";

/**
 * Checkbox component
 */
export function Checkbox(props: CheckboxProps) {
	return (
		<CheckboxProvider {...props}>
			<CheckboxContainer {...props}>
				<CheckboxTargetContainer
					{...props}
					key="target-container"
				>
					<CheckboxTarget
						{...props}
						key="target"
					>
						<CheckboxIcon
							iconName={MaterialIconName.CheckSmall}
							selectedState={CheckboxSelectedState.Selected}
						/>
					</CheckboxTarget>
					<CheckboxHoveredLayer
						{...props}
						key="hovered-layer"
					/>
					<TransitionPulse
						durationMs={CHECKBOX_TRANSITION_PULSE_LAYER_MS}
						key="pulse-layer"
						timing={TransitionTiming.EaseInOut}
					/>
				</CheckboxTargetContainer>
				<CheckboxLabel
					{...props}
					key="label"
				/>
				<CheckboxInput
					{...props}
					key="input"
				/>
			</CheckboxContainer>
		</CheckboxProvider>
	);
}
