import type {
	IChild,
	IItemId,
	IOnChange,
	IOrientation,
	Orientation,
	PrefixKeys
} from "@react-library/common";

import type { NavigationBarChildren } from "../../../types/navigation-bar-children.type";
import type { NavigationBarItemId } from "../../../types/navigation-bar-item-id.type";

/**
 * Props for a navigation bar item collection
 */
export type NavigationBarItemCollectionProps<TItemId extends NavigationBarItemId> = (
	IChild<NavigationBarChildren<TItemId>> &
	PrefixKeys<IItemId<TItemId>, "active"> &
	PrefixKeys<IOnChange<TItemId, void>, "item"> &
	PrefixKeys<IOrientation<Orientation>, "item">
);
