import { useCallback } from "react";

import { type Callback, useResolveState } from "@react-library/common";
import {
	isTransitionBorderRadiusStyleAllEqual,
	TransitionBorderRadius,
	TransitionBorderRadiusScope,
	TransitionColour,
	TransitionTiming,
	type TransitionBorderRadiusStyleAll
} from "@react-library/components";

import { SWITCH_PROPERTY_MAP } from "../../constants/switch-property-map.const";
import { SWITCH_TRANSITION_DURATION_MS } from "../../constants/switch-transition.const";
import { useSwitchColourStateContext } from "../../hooks/switch-colour-state-context.hook";

import { SWITCH_TRACK_INNER_STYLE } from "./styles/switch-track-inner-style.const";
import { SWITCH_TRACK_STYLE } from "./styles/switch-track-style.const";
import type { SwitchTrackProps } from "./types/switch-track-props.type";

/**
 * Switch track
 */
export function SwitchTrack(props: SwitchTrackProps) {

	// Colour state
	const colourState = useSwitchColourStateContext();

	const resolveBorderStyle = useCallback<Callback<TransitionBorderRadiusStyleAll>>(
		() => ({
			colour: colourState.borderColour,
			radius: SWITCH_PROPERTY_MAP.track.borderRadius,
			style: "solid",
			width: SWITCH_PROPERTY_MAP.track.borderWidth
		}),
		[colourState.borderColour]
	);
	const isBorderStyleEqual = useCallback(isTransitionBorderRadiusStyleAllEqual, []);
	const borderStyle = useResolveState<TransitionBorderRadiusStyleAll>(resolveBorderStyle, isBorderStyleEqual);

	// Handle click event
	const handleOnClick = useCallback<Callback<void>>(
		() => {
			if (props.isDisabled) return;
			props.onValueChange(!props.value);
		},
		[props]
	);

	return (
		<div
			onClick={handleOnClick}
			style={SWITCH_TRACK_STYLE}
		>
			<div style={{
				position: "absolute",
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			}}>
				<TransitionBorderRadius
					durationMs={SWITCH_TRANSITION_DURATION_MS}
					height="100%"
					scope={TransitionBorderRadiusScope.All}
					style={borderStyle}
					timing={TransitionTiming.EaseInOut}
					width="100%"
				/>
			</div>
			<TransitionColour
				colour={colourState.backgroundColour}
				durationMs={SWITCH_TRANSITION_DURATION_MS}
				height={"100%"}
				timing={TransitionTiming.EaseInOut}
				width={"100%"}
			>
				<div style={SWITCH_TRACK_INNER_STYLE}>
					{props.children}
				</div>
			</TransitionColour>
		</div>
	);
}
