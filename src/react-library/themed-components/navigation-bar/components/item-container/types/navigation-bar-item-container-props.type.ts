import type {
	CallbackWithParameter,
	IActiveItemId,
	IOnChange,
	IOrientation,
	Orientation
} from "@react-library/common";

import type { NavigationBarItemId } from "../../../enums/navigation-bar-item-id.type";
import type { NavigationBarItem } from "../../../types/navigation-bar-item.type";

/**
 * Props for a navigation bar item container
 */
export type NavigationBarItemProps = (
	IActiveItemId<NavigationBarItemId> &
	NavigationBarItem &
	IOnChange<CallbackWithParameter<NavigationBarItemId, void>> &
	IOrientation<Orientation>
);
