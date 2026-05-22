import type { PropsWithChildren } from "react";

import type { TabsStyle } from "../../../enums/tabs-style.type";
import type { TabsPropsStyle } from "../../../types/tabs-props-style.type";

/**
 * Props for a tabs container
 */
export type TabsContainerProps = (
	PropsWithChildren &
	TabsPropsStyle<TabsStyle>
);
