import type { PropsWithChildren } from "react";

import type { TabsStyle } from "../../../enums/tabs-style.type";
import type { TabsPropsItemOnValueChange } from "../../../types/tabs-props-item-on-value-change.type";
import type { TabsPropsStyle } from "../../../types/tabs-props-style.type";

/**
 * Props for a tabs item container
 */
export type TabsItemContainerProps = (
	PropsWithChildren &
	TabsPropsItemOnValueChange &
	TabsPropsStyle<TabsStyle>
);
