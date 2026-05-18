import { HoverLayer, TransitionPulse, TransitionTiming } from "@react-library/components";
import { MaterialIconName } from "@react-library/material-icons";

import { CheckboxContainer } from "../shared/components/container";
import { CheckboxGroupProvider } from "../shared/components/group-provider";
import { CheckboxIcon } from "../shared/components/icon";
import { CheckboxLabel } from "../shared/components/label";
import { CheckboxTarget } from "../shared/components/target";
import { CheckboxTargetContainer } from "../shared/components/target-container";
import { CHECKBOX_TRANSITION_PULSE_LAYER_MS } from "../shared/constants/checkbox-transition.const";
import { CheckboxSelectedState } from "../shared/enums/checkbox-selected-state.type";

import type { CheckboxGroupProps } from "./types/checkbox-group-props.type";

/**
 * Checkbox group component
 */
export function CheckboxGroup(props: CheckboxGroupProps) {
	return (
		<CheckboxGroupProvider {...props}>
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
							key={MaterialIconName.CheckSmall}
							selectedState={CheckboxSelectedState.Selected}
						/>
						<CheckboxIcon
							iconName={MaterialIconName.CheckIndeterminateSmall}
							key={MaterialIconName.CheckIndeterminateSmall}
							selectedState={CheckboxSelectedState.Indeterminate}
						/>
					</CheckboxTarget>
					<TransitionPulse
						durationMs={CHECKBOX_TRANSITION_PULSE_LAYER_MS}
						key="pulse-layer"
						timing={TransitionTiming.EaseInOut}
					/>
					<HoverLayer key="hover-layer" />
				</CheckboxTargetContainer>
				<CheckboxLabel
					{...props}
					key="label"
				/>
			</CheckboxContainer>
		</CheckboxGroupProvider>
	);
}
