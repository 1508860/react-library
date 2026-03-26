import type { Size, SizeWithUnits } from "../../units";
import type { StyleGlobal } from "../global";

/**
 * Type to describe thestyle format of a border radius for a single corner of an element
 */
export type StyleBorderRadiusCorner = (
	StyleGlobal |
	Size |
	`${SizeWithUnits} ${SizeWithUnits}`
);
