import { Fragment, useCallback, useEffect, useState } from "react"

import { useColourSchemeContext } from "@react-library/common";
import { MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import type { SideSheetPanelHeaderIconProps } from "./types/side-sheet-panel-header-icon-props.type";
import { SIDE_SHEET_PANEL_HEADER_ICON_SIZE } from "./constants/side-sheet-panel-header-icon-size.const";

/**
 * Side sheet panel header icon component
 */
export function SideSheetPanelHeaderIcon(props: SideSheetPanelHeaderIconProps) {

	const colourScheme = useColourSchemeContext();

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
			onClick={props.onClick}
			onPointerCancel={handlePointerLeave}
			onPointerDown={handlePointerDown}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handlePointerLeave}
			onPointerUp={handlePointerUp}
		>
			<MaterialIconSvg
				colour={colourScheme.surface.variant.onColour}
				name={props.name}
				style={iconStyle}
				size={SIDE_SHEET_PANEL_HEADER_ICON_SIZE}
			/>
		</div>
	);
}
