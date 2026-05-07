import type { PropsWithChildren } from "react";

import type { MenuPropsIsDisabled } from "../../../types/menu-props-is-disabled.type";
import type { MenuPropsIsSelected } from "../../../types/menu-props-is-selected.type";
import type { MenuPropsOnClick } from "../../../types/menu-props-on-click.type";

/**
 * Describes props for menu item component
 */
export type MenuItemProps = (
	MenuPropsIsDisabled &
	MenuPropsIsSelected &
	MenuPropsOnClick &
	PropsWithChildren
);
