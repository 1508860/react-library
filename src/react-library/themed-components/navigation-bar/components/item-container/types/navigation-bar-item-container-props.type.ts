import type {
	IActiveItemId,
	IOnChange,
	IOrientation,
	Orientation
} from "@react-library/common";

import type { NavigationBarItemId } from "../../../types/navigation-bar-item-id.type";
import type { NavigationBarItem } from "../../../types/navigation-bar-item.type";

/**
 * Props for a navigation bar item container
 */
export type NavigationBarItemProps<TItemId extends NavigationBarItemId> = (
	IActiveItemId<TItemId> &
	NavigationBarItem<TItemId> &
	IOnChange<TItemId, void> &
	IOrientation<Orientation>
);
