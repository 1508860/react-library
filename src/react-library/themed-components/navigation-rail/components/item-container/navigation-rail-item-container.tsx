import { Fragment, useCallback, useEffect, useState } from "react";

import { Orientation, useColourSchemeContext } from "@react-library/common";
import { MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import { Badge } from "../../../badge";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../constants/navigation-rail-property-map.const";
import { navigationRailItemContainerStyle } from "./styles/navigation-rail-item-container-style.function";
import { navigationRailItemLayerStyle } from "./styles/navigation-rail-item-layer-style.function";
import { navigationRailItemStyle } from "./styles/navigation-rail-item-style.function";
import type { NavigationRailItemContainerProps } from "./types/navigation-rail-item-container-props.type";

/**
 * Component to handle a navigation rail item container
 * @param props
 */
export function NavigationRailItemContainer(props: NavigationRailItemContainerProps) {

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
			style={navigationRailItemContainerStyle(props.orientation, (!isActive && isHovered))}
		>
			<div
				style={navigationRailItemStyle(props.orientation, colourScheme, isActive)}
			>
				<Badge
					key="badge"
					label={props.badgeLabel}
					show={props.showBadge}
				>
					<MaterialIconSvg
						colour={isActive ? colourScheme.secondary.container.onColour : colourScheme.surface.variant.onColour}
						name={props.iconName}
						size={NAVIGATION_RAIL_PROPERTY_MAP.itemIconSize}
						style={isActive ? MaterialIconStyle.DefaultFilled : MaterialIconStyle.Default}
					/>
				</Badge>
				{props.orientation === Orientation.Horizontal ? <span key="label">{props.label}</span> : <Fragment key="no-label" />}
				{
					(!isActive && (isPressed || isHovered)) ?
						<div
							key="target-background"
							style={navigationRailItemLayerStyle(
								props.orientation,
								colourScheme.secondary.container.onColour,
								isPressed ? colourScheme.pressed.opacity : colourScheme.hovered.opacity
							)}
						/> :
						<Fragment key="target-background" />
				}
			</div>
			{props.orientation === Orientation.Vertical ? <span key="label">{props.label}</span> : <Fragment key="no-label" />}
		</div>
	);
}
