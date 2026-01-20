import type { ReactNode } from "react";

import type { ChildCalback, IChild, IData, IOrientation, Orientation } from "@react-library/common";

import type { IVirtualScrollConfig } from "../interfaces/virtual-scroll-config.interface";

/**
 * Props for virtual scroll viewcomponent
 */
export type VirtualScrollViewProps<TElement, TRenderElement> = (
	IChild<ChildCalback<TRenderElement, ReactNode>> &
	IData<Array<TElement>> &
	IOrientation<Orientation> &
	IVirtualScrollConfig
);
