import type {
	IChild,
	IItemId,
	IItemOrientation,
	IOnItemChange,
	Orientation
} from "@react-library/common";

import type { NavigationBarChildren } from "./navigation-bar-children.type";
import type { NavigationBarItemId } from "./navigation-bar-item-id.type";

/**
 * Props for a navigation bar
 */
export type NavigationBarProps<TItemId extends NavigationBarItemId> = (
	IChild<NavigationBarChildren<TItemId>> &
	IItemId<TItemId> &
	IItemOrientation<Orientation> &
	IOnItemChange<TItemId, void>
);
