import type { PrefixKeys, ISize, SizePx, IScrollStart } from "@react-library/common";

/**
 * Describes the state of the container for the virtual scroll so that we can determine what elements to render
 */
export type VirtualScrollContainerState = PrefixKeys<ISize<SizePx>, "viewport"> & IScrollStart<SizePx>;
