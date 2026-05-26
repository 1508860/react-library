import type { PropsWithChildren } from "react";

import type { TabsPropsValue } from "../../../types/tabs-props-value.type";

/**
 * Props for tabs provider component
 */
export type TabsProviderProps = (
	PropsWithChildren &
	TabsPropsValue
);
