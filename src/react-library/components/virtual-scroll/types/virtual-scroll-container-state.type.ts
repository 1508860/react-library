import type { SizePx, IScrollStart, IViewportSize } from "@react-library/common";

/**
 * Describes the state of the container for the virtual scroll so that we can determine what elements to render
 */
export type VirtualScrollContainerState = (
	IScrollStart<SizePx> &
	IViewportSize<SizePx>
);
