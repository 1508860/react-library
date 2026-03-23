import type { Colour, IColour, IContent, IIconSize, Size } from "@react-library/common";
import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type {
	ButtonContentIcon,
	ButtonContentIconLabel,
	ButtonContentLabel
} from "../../../types/button-content.type";

/**
 * Props for button content resolver props
 */
export type ButtonContentResolverProps<TMaterialIconName extends MaterialIconName, TMaterialIconStyle extends MaterialIconStyle> = (
	IColour<Colour> &
	IContent<(
		ButtonContentIcon<TMaterialIconName, TMaterialIconStyle> |
		ButtonContentIconLabel<TMaterialIconName, TMaterialIconStyle> |
		ButtonContentLabel
	)> &
	IIconSize<Size>
);
