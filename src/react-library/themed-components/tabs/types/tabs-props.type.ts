import type { PropsWithChildren } from "react";

import type { TabsPropsStyleAll } from "./tabs-props-style.type";
import type { TabsPropsValue } from "./tabs-props-value.type";

/**
 * Describes props for the tabs component
 */
export type TabsProps = (
	PropsWithChildren &
	TabsPropsStyleAll &
	TabsPropsValue
);
