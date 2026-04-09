import type { Property } from "csstype";

import type { IOverflowX, IOverflowY } from "@react-library/common";

/**
 * Define style porperties for the virtual scroll container that must be used in the container element
 */
export type VirtualScrollContainerStyle = (
	IOverflowX<Property.OverflowX> &
	IOverflowY<Property.OverflowX>
);
