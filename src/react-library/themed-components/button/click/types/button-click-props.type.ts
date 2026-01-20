import type {
	IIsDisabled,
	IOnClick,
	IStyle
} from "@react-library/common";
import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonSize } from "../../shared/enums/button-size.type";
import type { ButtonStyle } from "../../shared/enums/button-style.type";
import type { IButtonShape } from "../../shared/interfaces/button-shape.interface";
import type { IButtonSize } from "../../shared/interfaces/button-size.interface";
import type {
	ButtonContentIconLabel,
	ButtonContentIconWithWidth,
	ButtonContentLabel
} from "../../shared/types/button-content.type";

/**
 * Props for button click
 */
export type ButtonClickProps = (
	(
		ButtonContentIconWithWidth<MaterialIconName, MaterialIconStyle> |
		ButtonContentIconLabel<MaterialIconName, MaterialIconStyle> |
		ButtonContentLabel
	) &
	IButtonShape &
	IButtonSize<ButtonSize> &
	Partial<IIsDisabled> &
	IOnClick<HTMLDivElement> &
	IStyle<ButtonStyle>
);
