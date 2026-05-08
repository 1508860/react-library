import type { PropsWithChildren } from "react";

import type { MenuPropsGroupWidth } from "../../../types/menu-props-group-width.type";
import type { MenuPropsOnPointerEnter } from "../../../types/menu-props-on-pointer-enter.type";
import type { MenuPropsOnPointerLeave } from "../../../types/menu-props-on-pointer-leave.type";
import type { MenuPropsStyle } from "../../../types/menu-props-style.type";

/**
 * Describes props for menu container component
 */
export type MenuContainerProps = (
	MenuPropsGroupWidth &
	MenuPropsOnPointerEnter &
	MenuPropsOnPointerLeave &
	MenuPropsStyle &
	PropsWithChildren
);
