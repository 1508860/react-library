import { useColourSchemeContext } from "@react-library/common";
import {
	TransitionSize,
	TransitionSizeDirection,
	TransitionTiming
} from "@react-library/components";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../constants/navigation-rail-property-map.const";
import type { NavigationRailItemId } from "../../types/navigation-rail-item-id.type";
import { NavigationRailHeaderContainer } from "../header-container";
import { NavigationRailItemCollection } from "../item-collection";
import { NavigationRailMenuIcon } from "../menu-icon";
import { navigationRailMenuContainerStyle } from "./styles/navigation-rail-menu-container-style.function";
import { NAVIGATION_RAIL_MENU_STYLE } from "./styles/navigation-rail-menu-style.const";
import type { NavigationRailMenuProps } from "./types/navigation-rail-menu-props.type";

/**
 * Component to handle a navigation rail menu
 * @param props
 */
export function NavigationRailMenu<TItemId extends NavigationRailItemId>(props: NavigationRailMenuProps<TItemId>) {

	const colourScheme = useColourSchemeContext();

	return (
		<div
			style={navigationRailMenuContainerStyle(props.menuStyle, colourScheme)}
		>
			<TransitionSize
				direction={TransitionSizeDirection.Horizontal}
				durationMs={NAVIGATION_RAIL_PROPERTY_MAP.menuTransitionDurationMs}
				height={"100%"}
				timing={TransitionTiming.OvershootInOut}
				width={props.isExpanded ? props.expandedMenuWidth : NAVIGATION_RAIL_PROPERTY_MAP.menuStyle[props.menuStyle].menuCollapsedWidth}
			>
				<div style={NAVIGATION_RAIL_MENU_STYLE}>

					<NavigationRailHeaderContainer key="header-container">
						{props.navigationHeaderChildren}
					</NavigationRailHeaderContainer>
					<NavigationRailMenuIcon
						isExpanded={props.isExpanded}
						key="menu-icon"
						onChange={props.onExpandedChange}
					/>
					<NavigationRailItemCollection
						activeItemId={props.activeItemId}
						centerItems={props.centerItems}
						isExpanded={props.isExpanded}
						key="item-collection"
						menuStyle={props.menuStyle}
						onItemChange={props.onItemChange}
					>
						{props.children}
					</NavigationRailItemCollection>
				</div>
			</TransitionSize>
		</div >
	);
}
