import type { PropsWithChildren } from "react";

import type { MenuPropsIsDisabled } from "../../../types/menu-props-is-disabled.type";
import type { MenuPropsIsSelectedOptional } from "../../../types/menu-props-is-selected.type";
import type { MenuPropsOnClickOptional } from "../../../types/menu-props-on-click.type";
import type { MenuPropsRefCallback } from "../../../types/menu-props-ref-callback.type";

/**
 * Describes props for menu item component
 */
export type MenuItemProps = (
	MenuPropsIsDisabled &
	MenuPropsIsSelectedOptional &
	MenuPropsOnClickOptional &
	MenuPropsRefCallback &
	PropsWithChildren
);
