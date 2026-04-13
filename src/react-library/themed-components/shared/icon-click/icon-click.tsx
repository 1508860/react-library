import { Fragment, useCallback, useEffect, useState } from "react"

import { MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import type { IconClickProps } from "./types/icon-click-props.type";
import { iconClickStyle } from "./styles/icon-click-style.function";

/**
 * Icon click component
 */
export function IconClick(props: IconClickProps) {

	// Handle click event
	const handleClick = useCallback(
		(event: React.MouseEvent<Element>) => {
			if (props.isDisabled) return;
			props.onClick(event);
		},
		[props]
	);

	// Handle hovered state
	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const handlePointerEnter = useCallback(() => setIsHovered(true), []);
	const handlePointerLeave = useCallback(() => setIsHovered(false), []);

	// Handle pressed state
	const [isPressed, setIsPressed] = useState<boolean>(() => false);
	const handlePointerDown = useCallback(() => setIsPressed(true), []);
	const handlePointerUp = useCallback(() => setIsPressed(false), []);

	// Resolve icon style
	const [iconStyle, setIconStyle] = useState<MaterialIconStyle>(() => MaterialIconStyle.Default);
	useEffect(
		() => {
			if (isPressed) setIconStyle(MaterialIconStyle.DefaultFilled);
			else if (isHovered) setIconStyle(MaterialIconStyle.Thick);
			else setIconStyle(MaterialIconStyle.Default);
		},
		[isHovered, isPressed]
	);

	if (!props.onClick) return (
		<Fragment key="no-icon" />
	);

	return (
		<div
			key="icon"
			onClick={handleClick}
			onPointerCancel={handlePointerLeave}
			onPointerDown={handlePointerDown}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handlePointerLeave}
			onPointerUp={handlePointerUp}
			style={iconClickStyle(props.padding, isHovered)}
		>
			<MaterialIconSvg
				colour={props.colour}
				name={props.name}
				style={iconStyle}
				size={props.size}
			/>
		</div>
	);
}
