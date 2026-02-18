import type { ReactNode } from "react";

import type { CallbackWithParameter, IChild, IData, IOrientation, Orientation } from "@react-library/common";

import type { VirtualScrollConfig } from "../types/virtual-scroll-config.type";

/**
 * Props for virtual scroll view component
 */
export type VirtualScrollViewProps<TElement, TRenderElement> = (
	IChild<CallbackWithParameter<TRenderElement, ReactNode>> &
	IData<Array<TElement>> &
	IOrientation<Orientation> &
	VirtualScrollConfig
);
