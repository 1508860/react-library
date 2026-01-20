import type {
	IIsDisabled,
	IIsSelected,
	IOnClick,
	IStyle
} from "@react-library/common";
import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonSize } from "../../shared/enums/button-size.type";
import type { ButtonStyle } from "../../shared/enums/button-style.type";
import type { IButtonSize } from "../../shared/interfaces/button-size.interface";
import type {
	ButtonContentIconLabel,
	ButtonContentIconWithWidth,
	ButtonContentLabel
} from "../../shared/types/button-content.type";

/**
 * Props for button selection
 */
export type ButtonSelectionProps = (
	IButtonSize<ButtonSize> &
	(
		ButtonContentIconWithWidth<MaterialIconName, MaterialIconStyle> |
		ButtonContentIconLabel<MaterialIconName, MaterialIconStyle> |
		ButtonContentLabel
	) &
	Partial<IIsDisabled> &
	IIsSelected &
	IOnClick<HTMLDivElement> &
	IStyle<ButtonStyle>
);
