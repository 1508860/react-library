import type {
	IItemId,
	IOnChange,
	IOrientation,
	Orientation,
	PrefixKeys
} from "@react-library/common";

import type { NavigationBarItemId } from "../../../types/navigation-bar-item-id.type";
import type { NavigationBarItem } from "../../../types/navigation-bar-item.type";

/**
 * Props for a navigation bar item container
 */
export type NavigationBarItemProps<TItemId extends NavigationBarItemId> = (
	PrefixKeys<IItemId<TItemId>, "active"> &
	NavigationBarItem<TItemId> &
	IOnChange<TItemId, void> &
	IOrientation<Orientation>
);
