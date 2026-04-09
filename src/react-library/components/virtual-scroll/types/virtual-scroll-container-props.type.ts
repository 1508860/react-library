import type { PropsWithChildren } from "react";

import type { IOnScroll, IOrientation, IRefCallback, IStyle } from "@react-library/common";

import type { VirtualScrollContainerCallbackElement, } from "./virtual-scroll-container-element.type";
import type { VirtualScrollContainerStyle } from "./virtual-scroll-container-style.type";
import type { VirtualScrollOrientation } from "./virtual-scroll-orientation.type";

/**
 * Define props to be passed to the container container element of the virtual scroll component to handle scrolling
 */
export type VirtualScrollContainerProps = (
	IOnScroll<VirtualScrollContainerCallbackElement> &
	IOrientation<VirtualScrollOrientation> &
	PropsWithChildren &
	IRefCallback<VirtualScrollContainerCallbackElement> &
	IStyle<VirtualScrollContainerStyle>
);
