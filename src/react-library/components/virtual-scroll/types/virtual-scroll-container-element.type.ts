import type { Extends } from "@react-library/common";

/**
 * Describes virtual scroll container element type
 */
export type VirtualScrollContainerElement = Element | null;

/**
 * Describes virtual scroll container element type to be used in callbacks
 */
export type VirtualScrollContainerCallbackElement = Extends<VirtualScrollContainerElement, Element>;
