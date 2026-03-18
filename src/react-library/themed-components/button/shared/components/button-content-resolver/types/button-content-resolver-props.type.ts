import type { Colour, IColour, IContent, IIconSize, Size } from "@react-library/common";
import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type {
	ButtonContentIcon,
	ButtonContentIconLabel,
	ButtonContentIconWithWidth,
	ButtonContentLabel
} from "../../../types/button-content.type";

/**
 * Props for button content resolver props
 */
export type ButtonContentResolverProps = (
	IColour<Colour> &
	IContent<(
		ButtonContentIcon<MaterialIconName, MaterialIconStyle> |
		ButtonContentIconLabel<MaterialIconName, MaterialIconStyle> |
		ButtonContentIconWithWidth<MaterialIconName, MaterialIconStyle> |
		ButtonContentLabel
	)> &
	IIconSize<Size>
);
