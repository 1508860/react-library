import { Fragment, useEffect, useRef, useState, type ReactElement } from "react";

import { useColourSchemeContext } from "@react-library/common";

import { Backdrop } from "../../../shared";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../constants/navigation-rail-property-map.const";
import { NavigationRailMenuStyle } from "../../enums/navigation-rail-menu-style.type";
import type { NavigationRailItemId } from "../../types/navigation-rail-item-id.type";
import type { NavigationRailItem } from "../../types/navigation-rail-item.type";

import { navigationRailContentStyle } from "./styles/navigation-rail-content-style.function";
import type { NavigationRailContentProps } from "./types/navigation-rail-content-props.type";

/**
 * Component to handle a navigation rail content
 * @param props
 */
export function NavigationRailContent<TItemId extends NavigationRailItemId>(props: NavigationRailContentProps<TItemId>) {

	const colourScheme = useColourSchemeContext();

	// Active child
	const [activeChildElement, setActiveChildElement] = useState<ReactElement | undefined>(undefined);
	const activeChildId = useRef<TItemId | undefined>(undefined);

	useEffect(
		() => {
			const activeChild: NavigationRailItem<TItemId> | undefined = props.children.find(child => child.itemId === props.activeItemId);

			// Terminate if no change in id
			if (activeChildId.current === activeChild?.itemId) return;

			activeChildId.current = activeChild?.itemId;
			setActiveChildElement(activeChild?.element);
		},
		[props.children, props.activeItemId]
	);



	return (
		<div style={navigationRailContentStyle(colourScheme)}>
			{activeChildElement}
			{
				(props.menuStyle !== NavigationRailMenuStyle.ImmersiveModal) ?
					<Fragment key="no-backdrop" /> :
					<Backdrop
						isAbsolute={true}
						key="backdrop"
						onClick={() => props.onExpandedChange(false)}
						show={props.isExpanded}
						transitionDurationMs={NAVIGATION_RAIL_PROPERTY_MAP.menuTransitionDurationMs}
					/>
			}
		</div>
	);
}
