import type { IIsExpanded, IMenuStyle, IOnExpandedChange } from "@react-library/common";

import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";

/**
 * Props for a navigation rail backdrop
 */
export type NavigationRailBackdropProps = (
	IIsExpanded &
	IMenuStyle<NavigationRailMenuStyle> &
	IOnExpandedChange<boolean, void>
);
