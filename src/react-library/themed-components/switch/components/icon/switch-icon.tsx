import { Fragment } from "react";

import { useDelayBooleanState, UseDelayBooleanStateDirection } from "@react-library/common";
import { TransitionFade, TransitionFadeDirection, TransitionTiming } from "@react-library/components";
import { MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import { SWITCH_PROPERTY_MAP } from "../../constants/switch-property-map.const";
import { SWITCH_TRANSITION_DURATION_MS } from "../../constants/switch-transition.const";
import { useSwitchColourStateContext } from "../../hooks/switch-colour-state-context.hook";

import { SWITCH_ICON_STYLE } from "./styles/switch-icon-style.const";
import type { SwitchIconProps } from "./types/switch-icon-props.type";

/**
 * Switch icon
 */
export function SwitchIcon(props: SwitchIconProps) {

	// Local contexts
	const switchColourState = useSwitchColourStateContext();

	// Show icon 
	const [showIcon] = useDelayBooleanState(props.showIcon, UseDelayBooleanStateDirection.ToFalse, SWITCH_TRANSITION_DURATION_MS);

	return (
		<div style={SWITCH_ICON_STYLE}>
			<TransitionFade
				direction={props.showIcon ? TransitionFadeDirection.In : TransitionFadeDirection.Out}
				durationMs={SWITCH_TRANSITION_DURATION_MS}
				timing={TransitionTiming.EaseInOut}
			>
				{
					showIcon ?
						<MaterialIconSvg
							colour={switchColourState.iconColour}
							key="icon"
							name={props.iconName}
							size={SWITCH_PROPERTY_MAP.thumb.iconSize}
							style={MaterialIconStyle.Default}
						/> :
						<Fragment key="no-icon" />
				}
			</ TransitionFade>
		</div>
	);
}
