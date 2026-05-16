import type { PropsWithChildren } from "react";

import type { VirtualScrollPropsItems } from "../../../types/virtual-scroll-props-items.type";

/**
 * Props for virtual scroll items in view provider component
 */
export type VirtualScrollItemsInViewProviderProps<TChildProps> = (
	PropsWithChildren &
	VirtualScrollPropsItems<TChildProps>
);
