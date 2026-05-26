import type { TabsStyle } from "../../../enums/tabs-style.type";
import type { TabsPropsItemIcon } from "../../../types/tabs-props-item-icon.type";
import type { TabsPropsStyle } from "../../../types/tabs-props-style.type";

/**
 * Props for a tabs item icon
 */
export type TabsItemIconProps = (
	TabsPropsItemIcon &
	TabsPropsStyle<TabsStyle>
);
