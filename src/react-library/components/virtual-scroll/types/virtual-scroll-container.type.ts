import type { ReactElement } from "react";

import type { CallbackWithParameter } from "@react-library/common";

import type { VirtualScrollContainerProps } from "./virtual-scroll-container-props.type";

/**
 * Virtual scroll container callback
 */
export type VirtualScrollContainer = CallbackWithParameter<VirtualScrollContainerProps, VirtualScrollContainerResult>;

/**
 * Virtual scroll container result
 */
export type VirtualScrollContainerResult = ReactElement;
