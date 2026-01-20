import type { ArrayMinLength2, ArrayMaxLength5 } from "@react-library/common";

import type { NavigationBarItemId } from "./navigation-bar-item-id.type";
import type { NavigationBarItem } from "./navigation-bar-item.type";

export type NavigationBarChildren<TItemId extends NavigationBarItemId> = (
	ArrayMinLength2<NavigationBarItem<TItemId>> &
	ArrayMaxLength5<NavigationBarItem<TItemId>>
);
