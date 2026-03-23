import type { MaterialIconStyle } from "../enums/material-icon-style.type";

/**
 * Describes unfilled styles for {@link MaterialIconStyle}
 */
export type MaterialIconStyleUnfilled = (
	typeof MaterialIconStyle.Default |
	typeof MaterialIconStyle.Thick
);
