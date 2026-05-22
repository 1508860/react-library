import type { TabsStyle } from "../../../enums/tabs-style.type";
import type { TabsPropsItemOrientation } from "../../../types/tabs-props-item-orientation.type";
import type { TabsPropsContentItemAll } from "../../../types/tabs-props-item.type";
import type { TabsPropsStyle } from "../../../types/tabs-props-style.type";
import type { TabsPropsValue } from "../../../types/tabs-props-value.type";

/**
 * Props for a tabs item
 */
export type TabsItemProps = (
	TabsPropsContentItemAll &
	TabsPropsItemOrientation &
	TabsPropsStyle<TabsStyle> &
	TabsPropsValue
);
