import type { PropsWithChildren } from "react";

import type { TabsPropsItemId } from "../../../types/tabs-props-item-id.type";

/**
 * Props for tabs item provider component
 */
export type TabsItemProviderProps = (
	PropsWithChildren &
	TabsPropsItemId
);
