import type { SizePx } from "../units";

/**
 * For a component that can have a viewport position of a height & width as well as margin
 */
export interface IViewportPosition {
	height: SizePx;
	marginBottom: SizePx;
	marginLeft: SizePx;
	marginRight: SizePx;
	marginTop: SizePx;
	width: SizePx;
}
