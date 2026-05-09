import type { ISelectedIds } from "@react-library/common";

import type { MenuId } from "./menu-id.type";

/**
 * Describes props for a menu selected ids state
 */
export type MenuPropsSelectedIds = (
	Partial<ISelectedIds<MenuSelectedIds>>
);

/**
 * Describes type for a menu selected ids state
 */
export type MenuSelectedIds = Set<MenuId> | undefined;
