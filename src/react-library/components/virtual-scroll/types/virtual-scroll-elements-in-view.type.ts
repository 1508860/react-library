import type { VirtualScrollItemChildResult } from "./virtual-scroll-item-child.type";
import type { VirtualScrollItemId } from "./virtual-scroll-item-id.type";

/**
 * Virtual scroll elements in view set
 */
export type VirtualScrollElementsInView = Map<VirtualScrollItemId, VirtualScrollItemChildResult>;
