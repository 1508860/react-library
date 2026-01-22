import {
	Fragment,
	useCallback,
	useRef,
	useState,
	type CSSProperties,
	type MouseEventHandler,
	type RefCallback
} from "react";

import {
	generateGuid,
	pointerPositionInElement,
	useFontContext,
	type SizePx
} from "@react-library/common";
import {
	TransitionPulse,
	type TransitionPulseInsetData
} from "@react-library/components";
import { MaterialIconSvg } from "@react-library/material-icons";

import { ButtonContent } from "../shared/enums/button-content.type";
import type { ButtonColourState } from "../shared/types/button-colour-state.type";

import { BUTTON_BASE_TIME_TRANSITION_PULSE_MS } from "./constants/button-base-time.const";
import { buttonBaseLabelStyle } from "./styles/button-base-label-style.function";
import { buttonBaseLayerStyle } from "./styles/button-base-layer-style.function";
import type { ButtonBaseContent } from "./types/button-base-content.type";

/**
 * Component base to handle buttons and their interactions
 * @param content
 * @param onClick
 * @param buttonColourState
 * @param isHovered
 * @param handleIsHovered
 * @param handleIsPressed
 * @param iconSize
 * @param buttonContainerStyle
 * @param isDisabled
 * @param refCallback
 */
export function ButtonBase(
	content: ButtonBaseContent,
	onClick: MouseEventHandler<HTMLDivElement>,
	buttonColourState: ButtonColourState,
	isHovered: boolean,
	handleIsHovered: (value: boolean) => void,
	handleIsPressed: (value: boolean) => void,
	iconSize: SizePx,
	buttonContainerStyle: CSSProperties,
	isDisabled?: boolean,
	refCallback?: RefCallback<HTMLDivElement | null>
) {
	const font = useFontContext();

	const [clickedInset, setClickedInset] = useState<TransitionPulseInsetData | undefined>(() => undefined);
	const buttonContainerElementRef = useRef<HTMLDivElement | null>(null);

	// Handle setting refs
	const handleButtonContainerElementRef = useCallback(
		(element: HTMLDivElement) => {
			if (refCallback) refCallback(element);
			buttonContainerElementRef.current = element;
		},
		[refCallback]
	);

	// Click event handler
	const handleOnClick = useCallback(
		(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			if (isDisabled) return;
			if (buttonContainerElementRef.current) setClickedInset({
				insetData: pointerPositionInElement(buttonContainerElementRef.current, event),
				transitionId: generateGuid()
			});
			onClick(event);
		},
		[onClick, isDisabled]
	);

	// Pointer event handlers (for cosmetics etc)
	const handlePointerEnter = useCallback(() => handleIsHovered(true), [handleIsHovered]);
	const handleOnPointerLeave = useCallback(() => handleIsHovered(false), [handleIsHovered]);
	const handlePointerDown = useCallback(() => handleIsPressed(true), [handleIsPressed]);
	const handlePointerUp = useCallback(() => handleIsPressed(false), [handleIsPressed]);

	return (
		<div
			onClick={handleOnClick}
			onPointerCancel={handleOnPointerLeave}
			onPointerDown={handlePointerDown}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handleOnPointerLeave}
			onPointerUp={handlePointerUp}
			ref={handleButtonContainerElementRef}
			style={buttonContainerStyle}
		>
			{
				(content.content === ButtonContent.Icon || content.content === ButtonContent.IconLabel) ?
					<MaterialIconSvg
						colour={buttonColourState.onColour}
						key="button-icon"
						name={content.iconName}
						size={iconSize}
						style={content.iconStyle}
					/> :
					<Fragment key="no-button-icon" />
			}
			{
				(content.content === ButtonContent.IconLabel || content.content === ButtonContent.Label) ?
					<span
						key="button-label"
						style={buttonBaseLabelStyle(buttonColourState, font)}
					>
						{content.label}
					</span> :
					<Fragment key="no-button-label" />
			}
			{
				isDisabled ?
					<div
						key="button-disabled-layer"
						style={buttonBaseLayerStyle(buttonColourState.onColour, buttonColourState.disabledOpacity, false)}
					/> :
					<Fragment key="no-button-disabled-layer" />
			}
			{
				clickedInset ?
					<TransitionPulse
						colour={buttonColourState.onColour}
						durationMs={BUTTON_BASE_TIME_TRANSITION_PULSE_MS}
						insetData={clickedInset.insetData}
						key="button-clicked-inset-layer"
						onDismiss={() => setClickedInset(undefined)}
						opacity={buttonColourState.pulseOpacity}
						transitionId={clickedInset.transitionId}
					/> :
					<Fragment key="no-button-clicked-inset-layer" />
			}
			{
				(!isDisabled && isHovered) ?
					<div
						key="button-hovered-layer"
						style={buttonBaseLayerStyle(buttonColourState.onColour, buttonColourState.hoverOpacity, isHovered)}
					/> :
					<Fragment key="no-button-hovered-layer" />
			}
		</div>
	);
}
