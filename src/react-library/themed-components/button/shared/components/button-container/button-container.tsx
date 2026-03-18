import { useCallback } from "react";

import type { ButtonClickTarget } from "../../types/button-click-target.type";

import type { ButtonContainerProps } from "./types/button-container-props.type";

/**
 * Button container component
 * @param props
 */
export function ButtonContainer(props: ButtonContainerProps) {

	// Handle setting refs
	const handleButtonContainerElementRef = useCallback(
		(element: ButtonClickTarget) => {
			if (props.ref) props.ref(element);
		},
		[props]
	);

	// Click event handler
	const handleOnClick = useCallback(
		(event: React.MouseEvent<ButtonClickTarget, MouseEvent>) => {
			if (props.isDisabled) return;
			props.onClick(event);
		},
		[props]
	);

	// Pointer event handlers (for cosmetics etc)
	const handlePointerEnter = useCallback(
		() => {
			if (!props.onHover) return;
			props.onHover(true)
		},
		[props]
	);
	const handleOnPointerLeave = useCallback(
		() => {
			if (!props.onHover) return;
			props.onHover(false)
		},
		[props]
	);
	const handlePointerDown = useCallback(
		() => {
			if (!props.onPress) return;
			props.onPress(true)
		},
		[props]
	);
	const handlePointerUp = useCallback(
		() => {
			if (!props.onPress) return;
			props.onPress(false)
		},
		[props]
	);

	return (
		<div
			onClick={handleOnClick}
			onPointerCancel={handleOnPointerLeave}
			onPointerDown={handlePointerDown}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handleOnPointerLeave}
			onPointerUp={handlePointerUp}
			ref={handleButtonContainerElementRef}
			style={props.style}
		>
			{props.children}
		</div>
	);
}
