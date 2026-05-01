import { useCallback, useState } from "react";

import type { Callback } from "@react-library/common";

import { SWITCH_COLOUR_STATE_CONTEXT } from "../../constants/switch-colour-state-context.const";
import { SWITCH_IS_HOVERED_CONTEXT } from "../../constants/switch-is-hovered-context.const";
import { useSwitchColourState } from "../../hooks/use-switch-colour-state.hook";

import { switchContainerStyle } from "./styles/switch-container-style.function";
import type { SwitchContainerProps } from "./types/switch-container-props.type";

/**
 * Switch container
 */
export function SwitchContainer(props: SwitchContainerProps) {

	// Is hovered
	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const handleOnPointerEnter = useCallback<Callback<void>>(() => setIsHovered(true), []);
	const handleOnPointerLeave = useCallback<Callback<void>>(() => setIsHovered(false), []);

	// Colour state
	const colourState = useSwitchColourState(props.isDisabled, props.isRequired, props.value);

	return (
		<SWITCH_IS_HOVERED_CONTEXT value={isHovered}>
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
		</SWITCH_IS_HOVERED_CONTEXT>
	);
}
