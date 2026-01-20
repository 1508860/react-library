import type { ArrayMinLength2, ArrayMaxLength7 } from "@react-library/common";

import type { NavigationRailItemId } from "./navigation-rail-item-id.type";
import type { NavigationRailItem } from "./navigation-rail-item.type";

export type NavigationRailChildren<TItemId extends NavigationRailItemId> = (
	ArrayMinLength2<NavigationRailItem<TItemId>> &
	ArrayMaxLength7<NavigationRailItem<TItemId>>
);
