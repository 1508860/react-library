import type { IOnScroll, IOrientation, IRefCallback } from "@react-library/common";

import type { VirtualScrollContainerElement, } from "./virtual-scroll-container-element.type";
import type { VirtualScrollOrientation } from "./virtual-scroll-orientation.type";

/**
 * Define props to be passed to the container container element of the virtual scroll component to handle scrolling
 */
export type VirtualScrollContainerProps = (
	IOnScroll<VirtualScrollContainerElement> &
	IOrientation<VirtualScrollOrientation> &
	IRefCallback<VirtualScrollContainerElement>
);
