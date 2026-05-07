import type { PropsWithChildren } from "react";

import type { MenuPropsGroupIndex } from "../../../types/menu-props-group-index.type";

/**
 * Describes props for menu group component
 */
export type MenuGroupProps = (
	MenuPropsGroupIndex &
	PropsWithChildren
);
