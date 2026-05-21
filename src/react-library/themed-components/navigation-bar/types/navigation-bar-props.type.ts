import type { PropsWithChildren } from "react";

import type {
	CallbackWithParameter,
	IItemId,
	IItemOrientation,
	IItems,
	IOnItemChange,
	Orientation
} from "@react-library/common";

import type { NavigationBarItemId } from "../enums/navigation-bar-item-id.type";

import type { NavigationBarItems } from "./navigation-bar-item.type";

/**
 * Props for a navigation bar
 */
export type NavigationBarProps = (
	IItemId<NavigationBarItemId> &
	IItemOrientation<Orientation> &
	IItems<NavigationBarItems> &
	IOnItemChange<CallbackWithParameter<NavigationBarItemId, void>> &
	PropsWithChildren
);
