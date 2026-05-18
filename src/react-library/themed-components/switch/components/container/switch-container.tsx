import { useCallback, useState } from "react";

import type { Callback } from "@react-library/common";
import { HoverLayerColourProvider, HoverLayerShowProvider } from "@react-library/components";

import { SWITCH_COLOUR_STATE_CONTEXT } from "../../constants/switch-colour-state-context.const";
import { useSwitchColourState } from "../../hooks/use-switch-colour-state.hook";

import { switchContainerStyle } from "./styles/switch-container-style.function";
import type { SwitchContainerProps } from "./types/switch-container-props.type";

/**
 * Switch container
 */
export function SwitchContainer(props: SwitchContainerProps) {

	// Is hovered
	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const handleOnPointerEnter = useCallback<Callback<void>>(
		() => {
			if (props.isDisabled) return;
			setIsHovered(true);
		},
		[props.isDisabled]
	);
	const handleOnPointerLeave = useCallback<Callback<void>>(() => setIsHovered(false), []);

	// Colour state
	const colourState = useSwitchColourState(props.isDisabled, props.isRequired, props.value);

	return (
		<HoverLayerColourProvider colour={colourState.hoverColour}>
			<HoverLayerShowProvider show={isHovered}>
				<SWITCH_COLOUR_STATE_CONTEXT value={colourState}>
					<div
						onPointerCancel={handleOnPointerLeave}
						onPointerEnter={handleOnPointerEnter}
						onPointerLeave={handleOnPointerLeave}
						style={switchContainerStyle(props.width)}
					>
						{props.children}
					</div>
				</SWITCH_COLOUR_STATE_CONTEXT>
			</HoverLayerShowProvider>
		</HoverLayerColourProvider>
	);
}
