import type { ReactNode } from "react";

import type { ChildCalback, IChild, IData, IOrientation, Orientation } from "@react-library/common";

import type { VirtualScrollConfig } from "../types/virtual-scroll-config.type";

/**
 * Props for virtual scroll viewcomponent
 */
export type VirtualScrollViewProps<TElement, TRenderElement> = (
	IChild<ChildCalback<TRenderElement, ReactNode>> &
	IData<Array<TElement>> &
	IOrientation<Orientation> &
	VirtualScrollConfig
);
