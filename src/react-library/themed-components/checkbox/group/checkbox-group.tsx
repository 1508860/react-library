import { MaterialIconName } from "@react-library/material-icons";

import { CheckboxContainer } from "../shared/components/container";
import { CheckboxGroupProvider } from "../shared/components/group-provider";
import { CheckboxHoveredLayer } from "../shared/components/hovered-layer";
import { CheckboxIcon } from "../shared/components/icon";
import { CheckboxLabel } from "../shared/components/label";
import { CheckboxPulseLayer } from "../shared/components/pulse-layer";
import { CheckboxTarget } from "../shared/components/target";
import { CheckboxTargetContainer } from "../shared/components/target-container";
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
					<CheckboxHoveredLayer
						{...props}
						key="hovered-layer"
					/>
					<CheckboxPulseLayer key="pulse-layer" />
				</CheckboxTargetContainer>
				<CheckboxLabel
					{...props}
					key="label"
				/>
			</CheckboxContainer>
		</CheckboxGroupProvider>
	);
}
