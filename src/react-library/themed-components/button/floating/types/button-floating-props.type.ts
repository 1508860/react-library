import type {
	ColourSchemeStyle,
	IColourSchemeStyle,
	IIsDisabled,
	IOnClick
} from "@react-library/common";
import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonSizeFloating } from "../../shared/enums/button-size.type";
import type { IButtonShape } from "../../shared/interfaces/button-shape.interface";
import type { IButtonSize } from "../../shared/interfaces/button-size.interface";
import type {
	ButtonContentIcon,
	ButtonContentIconLabel,
	ButtonContentLabel
} from "../../shared/types/button-content.type";

/**
 * Props for button floating
 */
export type ButtonFloatingProps = (
	(
		ButtonContentIcon<MaterialIconName, MaterialIconStyle> |
		ButtonContentIconLabel<MaterialIconName, MaterialIconStyle> |
		ButtonContentLabel
	) &
	Partial<IIsDisabled> &
	IOnClick<HTMLDivElement> &
	IColourSchemeStyle<ColourSchemeStyle> &
	IButtonShape &
	IButtonSize<ButtonSizeFloating>
);
