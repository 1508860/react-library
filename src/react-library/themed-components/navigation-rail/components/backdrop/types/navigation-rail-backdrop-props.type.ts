import type { CallbackWithParameter, IIsExpanded, IMenuStyle, IOnExpandedChange } from "@react-library/common";

import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";

/**
 * Props for a navigation rail backdrop
 */
export type NavigationRailBackdropProps = (
	IIsExpanded &
	IMenuStyle<NavigationRailMenuStyle> &
	IOnExpandedChange<CallbackWithParameter<boolean, void>>
);
