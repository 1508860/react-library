import type {
	CallbackWithParameter,
	IActiveItemId,
	IItemOrientation,
	IItems,
	IOnItemChange,
	Orientation
} from "@react-library/common";

import type { NavigationBarItemId } from "../../../enums/navigation-bar-item-id.type";
import type { NavigationBarItems } from "../../../types/navigation-bar-item.type";

/**
 * Props for a navigation bar item collection
 */
export type NavigationBarItemCollectionProps = (
	IActiveItemId<NavigationBarItemId> &
	IItems<NavigationBarItems> &
	IItemOrientation<Orientation> &
	IOnItemChange<CallbackWithParameter<NavigationBarItemId, void>>
);
