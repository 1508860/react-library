import { FLOATING_BUTTON_GROUP_POSITION_CONTEXT } from "../../constants/floating-button-group-position-context.const";

import { useFloatingButtonGroupPositionState } from "./hooks/use-floating-button-group-position-state.hook";
import type { FloatingButtonGroupPositionProps } from "./types/floating-button-group-position-props.type";

/**
 * Floating button group position component
 * Provides no structural influence, only a single source of truth to provide a calculated postion for other components
 * @param props
 */
export function FloatingButtonGroupPosition(props: FloatingButtonGroupPositionProps) {

	const [positionState] = useFloatingButtonGroupPositionState(props.positionStrategy, props.orientation);

	return (
		<FLOATING_BUTTON_GROUP_POSITION_CONTEXT value={positionState}>
			{props.children}
		</FLOATING_BUTTON_GROUP_POSITION_CONTEXT>
	);
}
