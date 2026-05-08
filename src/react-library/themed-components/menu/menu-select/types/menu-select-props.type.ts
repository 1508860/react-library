import type { MenuPropsContainerHeight } from "../../shared/types/menu-props-container-height.type";
import type { MenuPropsContainerWidth } from "../../shared/types/menu-props-container-width.type";
import type { MenuPropsOnPointerEnter } from "../../shared/types/menu-props-on-pointer-enter.type";
import type { MenuPropsOnPointerLeave } from "../../shared/types/menu-props-on-pointer-leave.type";
import type { MenuPropsSelectItems } from "../../shared/types/menu-props-select-items.type";
import type { MenuPropsStyle } from "../../shared/types/menu-props-style.type";

/**
 * Describes props for menu select component
 */
export type MenuSelectProps = (
	MenuPropsContainerHeight &
	MenuPropsContainerWidth &
	MenuPropsOnPointerEnter &
	MenuPropsOnPointerLeave &
	MenuPropsSelectItems &
	MenuPropsStyle
);
