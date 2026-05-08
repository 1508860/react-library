import type { MenuPropsGroupWidth } from "../../../types/menu-props-group-width.type";
import type { MenuPropsItemContentGroups } from "../../../types/menu-props-item-content.type";
import type { MenuPropsOnPointerEnter } from "../../../types/menu-props-on-pointer-enter.type";
import type { MenuPropsOnPointerLeave } from "../../../types/menu-props-on-pointer-leave.type";
import type { MenuPropsStyle } from "../../../types/menu-props-style.type";

/**
 * Describes props for menu resolver component
 */
export type MenuResolverProps = (
	MenuPropsGroupWidth &
	MenuPropsItemContentGroups &
	MenuPropsOnPointerEnter &
	MenuPropsOnPointerLeave &
	MenuPropsStyle
);
