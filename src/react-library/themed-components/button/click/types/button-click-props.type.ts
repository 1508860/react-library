import type {
	IIsDisabled,
	IOnClick,
	IStyle
} from "@react-library/common";
import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonSize } from "../../shared/enums/button-size.type";
import type { ButtonStyle } from "../../shared/enums/button-style.type";
import type {
	ButtonContentIconLabel,
	ButtonContentIconWithWidth,
	ButtonContentLabel
} from "../../shared/types/button-content.type";
import type { ButtonShapeProps } from "../../shared/types/button-shape-props.type"
import type { ButtonSizeProps } from "../../shared/types/button-size-props.type";

/**
 * Props for button click
 */
export type ButtonClickProps = (
	(
		ButtonContentIconWithWidth<MaterialIconName, MaterialIconStyle> |
		ButtonContentIconLabel<MaterialIconName, MaterialIconStyle> |
		ButtonContentLabel
	) &
	ButtonShapeProps &
	ButtonSizeProps<ButtonSize> &
	Partial<IIsDisabled> &
	IOnClick<HTMLDivElement> &
	IStyle<ButtonStyle>
);
