import { useCallback, useState } from "react";

import type { TransitionPulseInsetData } from "@react-library/components";

import { BUTTON_CLICKED_INSET_CONTEXT } from "../../constants/button-clicked-inset-context.const";
import { BUTTON_COLOUR_STATE_CONTEXT } from "../../constants/button-colour-state-context.const";
import { BUTTON_IS_HOVERED_CONTEXT } from "../../constants/button-is-hovered-context.const";
import { resolveButtonClickedInset } from "../../functions/resolve-button-clicked-inset.function";
import type { ButtonClickTarget } from "../../types/button-click-target.type";

import { BUTTON_CONTAINER_STYLE } from "./styles/button-container-style.const";
import type { ButtonContainerProps } from "./types/button-container-props.type";

/**
 * Button container component
 * @param props
 */
export function ButtonContainer<TUseColourStateConfig>(props: ButtonContainerProps<TUseColourStateConfig>) {

	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const [isPressed, setIsPressed] = useState<boolean>(() => false);
	const [clickedInset, setClickedInset] = useState<TransitionPulseInsetData | null>(() => null);

	const [buttonColourState] = props.useColourState({
		config: props.colourStateConfig,
		isHovered: isHovered,
		isPressed: isPressed
	});

	// Handle setting refs
	const handleButtonContainerElementRef = useCallback(
		(element: ButtonClickTarget) => {
			if (props.ref) props.ref(element);
		},
		[props]
	);

	// Click event handler
	const handleOnClick = useCallback(
		(event: React.MouseEvent<ButtonClickTarget>) => {
			if (props.isDisabled) return;
			setClickedInset(resolveButtonClickedInset(event));
			props.onClick(event);
		},
		[props]
	);

	// Pointer event handlers (for cosmetics etc)
	const handlePointerEnter = useCallback(() => setIsHovered(true), []);
	const handlePointerLeave = useCallback(() => setIsHovered(false), []);
	const handlePointerDown = useCallback(() => setIsPressed(true), []);
	const handlePointerUp = useCallback(() => setIsPressed(false), []);

	return (
		<BUTTON_COLOUR_STATE_CONTEXT value={buttonColourState}>
			<BUTTON_CLICKED_INSET_CONTEXT value={clickedInset}>
				<BUTTON_IS_HOVERED_CONTEXT value={isHovered}>
					<div
						onClick={handleOnClick}
						onPointerCancel={handlePointerLeave}
						onPointerDown={handlePointerDown}
						onPointerEnter={handlePointerEnter}
						onPointerLeave={handlePointerLeave}
						onPointerUp={handlePointerUp}
						ref={handleButtonContainerElementRef}
						style={BUTTON_CONTAINER_STYLE}
					>
						{props.children}
					</div>
				</BUTTON_IS_HOVERED_CONTEXT>
			</BUTTON_CLICKED_INSET_CONTEXT>
		</BUTTON_COLOUR_STATE_CONTEXT>
	);
}
