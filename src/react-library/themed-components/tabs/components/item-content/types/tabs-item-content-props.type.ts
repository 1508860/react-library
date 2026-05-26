import type { PropsWithChildren } from "react";

import type { TabsStyle } from "../../../enums/tabs-style.type";
import type { TabsPropsItemOrientation } from "../../../types/tabs-props-item-orientation.type";
import type { TabsPropsStyle } from "../../../types/tabs-props-style.type";

/**
 * Props for a tabs item content
 */
export type TabsItemContentProps = (
	PropsWithChildren &
	TabsPropsItemOrientation &
	TabsPropsStyle<TabsStyle>
);
