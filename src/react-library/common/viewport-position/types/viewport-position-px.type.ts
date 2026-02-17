import type {
	IHeight,
	IMarginBottom,
	IMarginLeft,
	IMarginRight,
	IMarginTop,
	IWidth
} from "../../interfaces";
import type { SizePx } from "../../units";

/**
 * For a component that can have a viewport position of a height & width as well as margin
 */
export type ViewportPositionPx = (
	IHeight<SizePx> &
	IMarginBottom<SizePx> &
	IMarginLeft<SizePx> &
	IMarginRight<SizePx> &
	IMarginTop<SizePx> &
	IWidth<SizePx>
);
