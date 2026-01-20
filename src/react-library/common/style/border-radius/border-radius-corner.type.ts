import type { StyleGlobal } from "../global";
import type { StyleBorderRadiusSize } from "./style-border-radius-size.type";

/**
 * Type to describe thestyle format of a border radius for a single corner of an element
 */
export type StyleBorderRadiusCorner = (
	StyleGlobal |
	`${StyleBorderRadiusSize}` |
	`${StyleBorderRadiusSize} ${StyleBorderRadiusSize}`
);
