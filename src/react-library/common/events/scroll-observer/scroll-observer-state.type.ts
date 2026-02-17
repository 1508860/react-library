import type { IScrollStartHorizontal, IScrollStartVertical } from "../../interfaces";
import type { SizePx } from "../../units";

/**
 * Describes scroll state for an element relative to its container
 */
export type ScrollObserverState = (
	IScrollStartHorizontal<SizePx> &
	IScrollStartVertical<SizePx>
);
