import { TransitionColour, TransitionInset, TransitionTiming } from "@react-library/components";

import { SWITCH_PROPERTY_MAP } from "../../constants/switch-property-map.const";
import { SWITCH_TRANSITION_DURATION_MS } from "../../constants/switch-transition.const";
import { useSwitchColourStateContext } from "../../hooks/switch-colour-state-context.hook";

import { SWITCH_THUMB_INNER_STYLE } from "./styles/switch-thumb-inner-style.const";
import { SWITCH_TUMB_STYLE } from "./styles/switch-thumb-style.const";
import type { SwitchThumbProps } from "./types/switch-thumb-props.type";

/**
 * Switch thumb
 */
export function SwitchThumb(props: SwitchThumbProps) {

	// Colour state
	const colourState = useSwitchColourStateContext();

	return (
		<TransitionInset
			durationMs={SWITCH_TRANSITION_DURATION_MS}
			height={SWITCH_PROPERTY_MAP.thumb.size}
			left={SWITCH_PROPERTY_MAP.thumb.value[`${props.value}`].left}
			timing={TransitionTiming.OvershootInOut}
			width={SWITCH_PROPERTY_MAP.thumb.size}
		>
			<div style={SWITCH_TUMB_STYLE}>
				<TransitionColour
					colour={colourState.thumbColour}
					durationMs={SWITCH_TRANSITION_DURATION_MS}
					height={"100%"}
					timing={TransitionTiming.EaseInOut}
					width={"100%"}
				>
					<div style={SWITCH_THUMB_INNER_STYLE}>
						{props.children}
					</div>
				</TransitionColour>
			</div>
		</TransitionInset>
	);
}
