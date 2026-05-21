import type { PropsWithChildren } from "react";

import type {
	CallbackWithParameter,
	IActiveItemId,
	IIsExpanded,
	IItems,
	IMenuStyle,
	IOnExpandedChange
} from "@react-library/common";

import type { NavigationRailItemId } from "../../../enums/navigation-rail-item-id-style.type";
import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";
import type { NavigationRailItems } from "../../../types/navigation-rail-item.type";

/**
 * Props for a navigation rail content
 */
export type NavigationRailContentProps = (
	IActiveItemId<NavigationRailItemId> &
	IIsExpanded &
	IItems<NavigationRailItems> &
	IMenuStyle<NavigationRailMenuStyle> &
	IOnExpandedChange<CallbackWithParameter<boolean, void>> &
	PropsWithChildren
);
