import type {
	IChild,
	IItemId,
	PrefixKeys
} from "@react-library/common";

import type { NavigationBarChildren } from "../../../types/navigation-bar-children.type";
import type { NavigationBarItemId } from "../../../types/navigation-bar-item-id.type";

/**
 * Props for a navigation bar content
 */
export type NavigationBarContentProps<TItemId extends NavigationBarItemId> = (
	IChild<NavigationBarChildren<TItemId>> &
	PrefixKeys<IItemId<TItemId>, "active">
);
