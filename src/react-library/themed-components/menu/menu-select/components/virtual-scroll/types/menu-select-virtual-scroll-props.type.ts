import type { MenuPropsSelectItems } from "../../../../shared/types/menu-props-select-items.type";
import type { MenuPropsStyle } from "../../../../shared/types/menu-props-style.type";

/**
 * Describes props for menu select virtual scroll component
 */
export type MenuSelectVirtualScrollProps = (
	MenuPropsSelectItems &
	MenuPropsStyle
);
