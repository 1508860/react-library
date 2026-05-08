import type { PropsWithChildren } from "react";

import type { MenuPropsContainerHeight } from "../../../types/menu-props-container-height.type";
import type { MenuPropsContainerWidth } from "../../../types/menu-props-container-width.type";
import type { MenuPropsOnPointerEnter } from "../../../types/menu-props-on-pointer-enter.type";
import type { MenuPropsOnPointerLeave } from "../../../types/menu-props-on-pointer-leave.type";
import type { MenuPropsStyle } from "../../../types/menu-props-style.type";

/**
 * Describes props for menu container component
 */
export type MenuContainerProps = (
	Partial<MenuPropsContainerHeight> &
	MenuPropsContainerWidth &
	MenuPropsOnPointerEnter &
	MenuPropsOnPointerLeave &
	MenuPropsStyle &
	PropsWithChildren
);
