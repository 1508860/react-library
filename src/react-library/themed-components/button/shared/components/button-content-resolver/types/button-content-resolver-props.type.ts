import type { IContent, IIconSize, Size } from "@react-library/common";
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
	IContent<(
		ButtonContentIcon<TMaterialIconName, TMaterialIconStyle> |
		ButtonContentIconLabel<TMaterialIconName, TMaterialIconStyle> |
		ButtonContentLabel
	)> &
	IIconSize<Size>
);
