import type { MenuPropsItemContentGroups } from "../../../types/menu-props-item-content.type";
import type { MenuPropsStyle } from "../../../types/menu-props-style.type";
import type { MenuPropsWidth } from "../../../types/menu-props-width.type";

/**
 * Describes props for menu resolver component
 */
export type MenuResolverProps = (
	MenuPropsItemContentGroups &
	MenuPropsStyle &
	MenuPropsWidth
);
