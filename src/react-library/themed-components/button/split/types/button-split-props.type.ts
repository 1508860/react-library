import type { IIsDisabled, IOnClick, IStyle } from "@react-library/common";
import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonSize } from "../../shared/enums/button-size.type";
import type { ButtonStyle } from "../../shared/enums/button-style.type";
import type { IButtonSize } from "../../shared/interfaces/button-size.interface";
import type {
	ButtonContentIcon,
	ButtonContentIconLabel,
	ButtonContentLabel
} from "../../shared/types/button-content.type";
import type { ButtonSplitMenuElement } from "./button-split-menu-element.type";

/**
 * Props for button split
 */
export type ButtonSplitProps = (
	(
		ButtonContentIcon<MaterialIconName, MaterialIconStyle> |
		ButtonContentIconLabel<MaterialIconName, MaterialIconStyle> |
		ButtonContentLabel
	) &
	IButtonSize<ButtonSize> &
	ButtonSplitMenuElement &
	Partial<IIsDisabled> &
	IOnClick<HTMLDivElement> &
	IStyle<ButtonStyle>
);
