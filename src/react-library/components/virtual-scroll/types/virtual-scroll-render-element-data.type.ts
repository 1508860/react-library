import type { IRow } from "@react-library/common";

import type { VirtualScrollRowIdPrefix } from "./virtual-scroll-row.type";

/**
 * Type to describe the element data to be supplied to the render function
 */
export type VirtualScrollRenderElementData<TElement> = (
	IRow<TElement> &
	Partial<VirtualScrollRowIdPrefix>
);
