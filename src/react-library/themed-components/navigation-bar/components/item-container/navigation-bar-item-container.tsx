import { Fragment, useCallback, useEffect, useState } from "react";

import { Orientation, useColourSchemeContext } from "@react-library/common";
import { MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import { Badge } from "../../../badge";

import { NAVIGATION_BAR_PROPERTY_MAP } from "../../constants/navigation-bar-property-map.const";
import { navigationBarItemContainerStyle } from "./styles/navigation-bar-item-container-style.function";
import { navigationBarItemLayerStyle } from "./styles/navigation-bar-item-layer-style.function";
import { navigationBarItemStyle } from "./styles/navigation-bar-item-style.function";
import type { NavigationBarItemProps } from "./types/navigation-bar-item-container-props.type";

/**
 * Component to handle a navigation bar item container
 * @param props
 */
export function NavigationBarItemContainer(props: NavigationBarItemProps) {

	const colourScheme = useColourSchemeContext();

	// Handle active state
	const [isActive, setIsActive] = useState<boolean>(() => false);
	useEffect(() => setIsActive(props.activeItemId === props.itemId), [props.activeItemId, props.itemId]);
	const handleClick = useCallback(() => props.onChange(props.itemId), [props]);

	// Pointer event handlers (for cosmetics etc)
	const [isPressed, setIsPressed] = useState<boolean>(() => false);
	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const handlePointerEnter = useCallback(
		() => {
			if (isActive) return;
			setIsHovered(true);
		},
		[isActive]
	);
	const handlePointerLeave = useCallback(() => setIsHovered(false), []);
	const handlePointerDown = useCallback(
		() => {
			if (isActive) return;
			setIsPressed(true);
		},
		[isActive]
	);
	const handlePointerUp = useCallback(() => setIsPressed(false), []);

	return (
		<div
			onClick={handleClick}
			onPointerCancel={handlePointerLeave}
			onPointerDown={handlePointerDown}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handlePointerLeave}
			onPointerUp={handlePointerUp}
			style={navigationBarItemContainerStyle(isHovered)}
		>
			<div
				style={navigationBarItemStyle(props.orientation, colourScheme, isActive)}
			>
				<Badge
					key="badge"
					label={props.badgeLabel}
					show={props.showBadge}
				>
					<MaterialIconSvg
						colour={isActive ? colourScheme.secondary.container.onColour : colourScheme.surface.variant.onColour}
						key="icon"
						name={props.iconName}
						size={NAVIGATION_BAR_PROPERTY_MAP.iconSize}
						style={isActive ? MaterialIconStyle.DefaultFilled : MaterialIconStyle.Default}
					/>
				</Badge>
				{props.orientation === Orientation.Horizontal ? <span key="label">{props.label}</span> : <Fragment key="no-label" />}
				{
					(!isActive && (isPressed || isHovered)) ?
						<div
							key="target-background"
							style={navigationBarItemLayerStyle(
								props.orientation,
								colourScheme.secondary.container.onColour,
								isPressed ? colourScheme.pressed.opacity : colourScheme.hovered.opacity
							)}
						/> :
						<Fragment key="no-target-background" />
				}
			</div>
			{props.orientation === Orientation.Vertical ? <span key="label">{props.label}</span> : <Fragment key="no-label" />}
		</div>
	);
}
