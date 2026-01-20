import { Orientation } from "../../orientation";
import type { SizePx } from "../../units";
import { resolveDimensionsPx } from "./resolve-dimensions-px.function";

/**
 * Resolve {@link SizePx} size based on orientation
 * @param element
 * @param orientation
 */
export function orientationDimensionPx(element: Element, orientation: Orientation): SizePx {
	return (orientation === Orientation.Horizontal) ? resolveDimensionsPx(element).width : resolveDimensionsPx(element).height;
}
