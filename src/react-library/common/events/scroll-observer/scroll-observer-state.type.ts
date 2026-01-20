import type { IScrollStart } from "../../interfaces";
import type { PrefixKeys } from "../../key-remapping";
import type { SizePx } from "../../units";

/**
 * Describes scroll state for an element relative to its container
 */
export type ScrollObserverState = (
	PrefixKeys<IScrollStart<SizePx>, "horizontal"> &
	PrefixKeys<IScrollStart<SizePx>, "vertical">
);
