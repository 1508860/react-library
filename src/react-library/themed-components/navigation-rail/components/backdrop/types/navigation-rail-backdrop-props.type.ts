import type {
	IIsExpanded,
	IOnChange,
	IStyle,
	PrefixKeys
} from "@react-library/common";

import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";

/**
 * Props for a navigation rail backdrop
 */
export type NavigationRailBackdropProps = (
	IIsExpanded &
	PrefixKeys<IOnChange<boolean, void>, "expanded"> &
	PrefixKeys<IStyle<NavigationRailMenuStyle>, "menu">
);
