import type {
	ColourSchemeStyle,
	IColourSchemeStyle,
	IIsDisabled,
	IOnClick
} from "@react-library/common";
import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonSizeFloating } from "../../shared/enums/button-size.type";
import type {
	ButtonContentIcon,
	ButtonContentIconLabel,
	ButtonContentLabel
} from "../../shared/types/button-content.type";
import type { ButtonShapeProps } from "../../shared/types/button-shape-props.type";
import type { ButtonSizeProps } from "../../shared/types/button-size-props.type";

/**
 * Props for button floating
 */
export type ButtonFloatingProps = (
	(
		ButtonContentIcon<MaterialIconName, MaterialIconStyle> |
		ButtonContentIconLabel<MaterialIconName, MaterialIconStyle> |
		ButtonContentLabel
	) &
	ButtonShapeProps &
	ButtonSizeProps<ButtonSizeFloating> &
	IColourSchemeStyle<ColourSchemeStyle> &
	Partial<IIsDisabled> &
	IOnClick<HTMLDivElement>
);
