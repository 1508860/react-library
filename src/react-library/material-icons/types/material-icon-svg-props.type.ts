import type {
	Colour,
	IColour,
	IName,
	ISize,
	IStyle,
	Size
} from "@react-library/common";

import type { MaterialIconName } from "../enums/material-icon-name.type";
import type { MaterialIconStyle } from "../enums/material-icon-style.type";

/**
 * Props for material icon SVG
 */
export type MaterialIconSvgProps = (
	IColour<Colour> &
	IName<MaterialIconName> &
	ISize<Size> &
	IStyle<MaterialIconStyle>
);
