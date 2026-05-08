import type { MenuPropsGroupWidth } from "../../shared/types/menu-props-group-width.type";
import type { MenuPropsItemContentGroups } from "../../shared/types/menu-props-item-content.type";
import type { MenuPropsStyle } from "../../shared/types/menu-props-style.type";

/**
 * Describes props for menu component
 */
export type MenuProps = (
	MenuPropsGroupWidth &
	MenuPropsItemContentGroups &
	MenuPropsStyle
);
