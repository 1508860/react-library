import type { IDimensions } from "../../interfaces";
import type { SizePx } from "../../units";

/**
 * Return a {@link IDimensions} from {@link element}
 * @param element
 */
export function resolveDimensionsPx(element: Element): IDimensions<SizePx, SizePx> {
	const domRect = element.getBoundingClientRect();
	return {
		height: domRect.height,
		width: domRect.width
	};
}
