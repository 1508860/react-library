import type { TabsStyle } from "../../../enums/tabs-style.type";
import type { TabsPropsItemLabel } from "../../../types/tabs-props-item-label.type";
import type { TabsPropsStyle } from "../../../types/tabs-props-style.type";

/**
 * Props for a tabs item label
 */
export type TabsItemLabelProps = (
	TabsPropsItemLabel &
	TabsPropsStyle<TabsStyle>
);
