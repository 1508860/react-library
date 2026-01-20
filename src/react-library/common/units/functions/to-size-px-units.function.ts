import type { SizePx, SizePxUnits } from "../size/size-px.type";

/**
 * Function to map a {@link SizePx} to {@link SizePxUnits}
 * @param value
 */
export function toSizePxUnits(value: SizePx): SizePxUnits {
	return `${value}px`;
}
