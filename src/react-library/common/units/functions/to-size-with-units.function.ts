import type { SizeWithUnits } from "../size/size-with-units.type";
import type { Size } from "../size/size.type";
import { toSizePxUnits } from "./to-size-px-units.function";

/**
 * Function to map a {@link Size} to {@link SizeWithUnits}
 * @param value
 */
export function toSizeWithUnits(value: Size): SizeWithUnits {
	return typeof value === "number" ? toSizePxUnits(value) : value;
}
