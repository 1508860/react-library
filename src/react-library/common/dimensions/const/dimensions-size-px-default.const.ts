import type { IDimensions } from "../../interfaces";
import type { SizePx } from "../../units";

/**
 * Default values for {@link ResizeObserverState}
 */
export const DIMENSIONS_SIZE_PX_DEFAULT: IDimensions<SizePx, SizePx> = {
	height: 0,
	width: 0
}
