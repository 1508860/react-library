import type {
	IChild,
	IItemId,
	IOnChange,
	IOrientation,
	Orientation,
	PrefixKeys
} from "@react-library/common";

import type { NavigationBarChildren } from "./navigation-bar-children.type";
import type { NavigationBarItemId } from "./navigation-bar-item-id.type";

/**
 * Props for a navigation bar
 */
export type NavigationBarProps<TItemId extends NavigationBarItemId> = (
	IChild<NavigationBarChildren<TItemId>> &
	IItemId<TItemId> &
	PrefixKeys<IOnChange<TItemId, void>, "item"> &
	PrefixKeys<IOrientation<Orientation>, "item">
);
