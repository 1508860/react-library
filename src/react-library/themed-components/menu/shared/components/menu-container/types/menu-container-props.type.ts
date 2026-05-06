import type { PropsWithChildren } from "react";

import type { MenuPropsStyle } from "../../../types/menu-props-style.type";
import type { MenuPropsWidth } from "../../../types/menu-props-width.type";

/**
 * Describes props for menu container component
 */
export type MenuContainerProps = (
	MenuPropsStyle &
	MenuPropsWidth &
	PropsWithChildren
);
