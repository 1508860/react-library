import type { CallbackWith2Parameters } from "@react-library/common";

import type { VirtualScrollToIndexBehaviour } from "../enums/virtual-scroll-to-index-behaviour.type";

/**
 * Virtual scroll to index callback
 */
export type VirtualScrollToIndexCallback = CallbackWith2Parameters<number, VirtualScrollToIndexBehaviour, void>;
