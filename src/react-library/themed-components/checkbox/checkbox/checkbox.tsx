import { MaterialIconName } from "@react-library/material-icons";

import { CheckboxContainer } from "../shared/components/container";
import { CheckboxHoveredLayer } from "../shared/components/hovered-layer";
import { CheckboxIcon } from "../shared/components/icon";
import { CheckboxInput } from "../shared/components/input";
import { CheckboxLabel } from "../shared/components/label";
import { CheckboxProvider } from "../shared/components/provider";
import { CheckboxPulseLayer } from "../shared/components/pulse-layer";
import { CheckboxTarget } from "../shared/components/target";
import { CheckboxTargetContainer } from "../shared/components/target-container";

import type { CheckboxProps } from "./types/checkbox-props.type";

/**
 * Checkbox component
 */
export function Checkbox(props: CheckboxProps) {
	return (
		<CheckboxProvider {...props}>
			<CheckboxContainer {...props}>
				<CheckboxTargetContainer key="target-container">
					<CheckboxTarget
						{...props}
						key="target"
					>
						<CheckboxIcon
							{...props}
							iconName={MaterialIconName.CheckSmall}
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
				<CheckboxInput
					{...props}
					key="input"
				/>
			</CheckboxContainer>
		</CheckboxProvider>
	);
}
