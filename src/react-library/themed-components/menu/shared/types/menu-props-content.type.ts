import type { IContent } from "@react-library/common";

import type { MenuItemContent } from "../enums/menu-item-content.type";

/**
 * Describes props for menu content
 */
export type MenuPropsContent<TContent extends MenuItemContent> = (
	IContent<TContent>
);
