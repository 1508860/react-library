import type { PropsWithChildren } from "react";

import type {
	CallbackWithParameter,
	IIsExpanded,
	IMenuStyle,
	IOnExpandedChange
} from "@react-library/common";

import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";

/**
 * Props for a navigation rail content
 */
export type NavigationRailContentProps = (
	IIsExpanded &
	IMenuStyle<NavigationRailMenuStyle> &
	IOnExpandedChange<CallbackWithParameter<boolean, void>> &
	PropsWithChildren
);
