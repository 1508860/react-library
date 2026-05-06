import type { MenuPropsItemContentGroups } from "../../shared/types/menu-props-item-content.type";
import type { MenuPropsStyle } from "../../shared/types/menu-props-style.type";
import type { MenuPropsWidth } from "../../shared/types/menu-props-width.type";

/**
 * Describes props for menu component
 */
export type MenuProps = (
	MenuPropsItemContentGroups &
	MenuPropsStyle &
	MenuPropsWidth
);
