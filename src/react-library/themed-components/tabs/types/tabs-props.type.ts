import type { PropsWithChildren } from "react";

import type { TabsPropsContentAll } from "./tabs-props-content.type";
import type { TabsPropsStyleAll } from "./tabs-props-style.type";
import type { TabsPropsValue } from "./tabs-props-value.type";

/**
 * Describes props for the tabs component
 */
export type TabsProps = (
	PropsWithChildren &
	TabsPropsContentAll &
	TabsPropsStyleAll &
	TabsPropsValue
);
