import type {
	CallbackWithParameter,
	IActiveItemId,
	IChild,
	IIsExpanded,
	IMenuStyle,
	IOnExpandedChange
} from "@react-library/common";

import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";
import type { NavigationRailChildren } from "../../../types/navigation-rail-children.type";
import type { NavigationRailItemId } from "../../../types/navigation-rail-item-id.type";

/**
 * Props for a navigation rail content
 */
export type NavigationRailContentProps<TItemId extends NavigationRailItemId> = (
	IActiveItemId<TItemId> &
	IChild<NavigationRailChildren<TItemId>> &
	IIsExpanded &
	IMenuStyle<NavigationRailMenuStyle> &
	IOnExpandedChange<CallbackWithParameter<boolean, void>>
);
