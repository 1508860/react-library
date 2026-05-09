import type { PropsWithChildren } from "react";

import type { MenuPropsSelectedIds } from "../../shared/types/menu-props-selected-ids.type";

/**
 * Describes props for menu selected items provider component
 */
export type MenuSelectedItemsProviderProps = (
	MenuPropsSelectedIds &
	PropsWithChildren
);
