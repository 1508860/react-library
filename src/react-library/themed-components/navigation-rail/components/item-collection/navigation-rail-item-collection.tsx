import { useCallback } from "react";

import { Orientation, useFontContext, useResolveState } from "@react-library/common";

import { NavigationRailMenuStyle } from "../../enums/navigation-rail-menu-style.type";
import type { NavigationRailItemId } from "../../types/navigation-rail-item-id.type";
import { NavigationRailItemContainer } from "../item-container";
import { NAVIGATION_RAIL_ITEM_COLLECTION_CONTAINER_STYLE } from "./styles/navigation-rail-item-collection-container-style.const";
import { navigationRailItemCollectionStyle } from "./styles/navigation-rail-item-collection-style.function";
import type { NavigationRailItemCollectionProps } from "./types/navigation-rail-item-collection-props.type";

/**
 * Component to handle a navigation rail item collection
 * @param props
 */
export function NavigationRailItemCollection<TItemId extends NavigationRailItemId>(props: NavigationRailItemCollectionProps<TItemId>) {

	const font = useFontContext();

	// Item orientation
	const resolveOrientation = useCallback<() => Orientation>(
		() => ((props.menuStyle !== NavigationRailMenuStyle.Standard || props.isExpanded) ? Orientation.Horizontal : Orientation.Vertical),
		[props.isExpanded, props.menuStyle]
	);
	const itemOrientation = useResolveState<Orientation>(resolveOrientation);

	return (
		<div style={NAVIGATION_RAIL_ITEM_COLLECTION_CONTAINER_STYLE}>
			<div style={navigationRailItemCollectionStyle(props.centerItems, font)}>
				{props.children.map(child =>
					<NavigationRailItemContainer
						activeItemId={props.activeItemId}
						badgeLabel={child.badgeLabel}
						element={child.element}
						iconName={child.iconName}
						itemId={child.itemId}
						key={child.itemId}
						label={child.label}
						onChange={props.onItemChange}
						orientation={itemOrientation}
						showBadge={child.showBadge}
					/>
				)}
			</div>
		</div>
	);
}
