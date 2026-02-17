import type {
	IActiveItemId,
	IChild,
	IItemOrientation,
	IOnItemChange,
	Orientation
} from "@react-library/common";

import type { NavigationBarChildren } from "../../../types/navigation-bar-children.type";
import type { NavigationBarItemId } from "../../../types/navigation-bar-item-id.type";

/**
 * Props for a navigation bar item collection
 */
export type NavigationBarItemCollectionProps<TItemId extends NavigationBarItemId> = (
	IActiveItemId<TItemId> &
	IChild<NavigationBarChildren<TItemId>> &
	IItemOrientation<Orientation> &
	IOnItemChange<TItemId, void>
);
