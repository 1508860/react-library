import type {
	CallbackWithParameter,
	IIsExpanded,
	IMenuStyle,
	INavigationHeaderChild,
	IOnExpandedChange
} from "@react-library/common";

import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";
import type { NavigationRailHeaderContainerChildren } from "../../../types/navigation-rail-header-container-children.type";

/**
 * Props for a navigation rail immersive menu
 */
export type NavigationRailImmersiveMenuProps = (
	IIsExpanded &
	IMenuStyle<NavigationRailMenuStyle> &
	Partial<INavigationHeaderChild<NavigationRailHeaderContainerChildren>> &
	IOnExpandedChange<CallbackWithParameter<boolean, void>>
);
