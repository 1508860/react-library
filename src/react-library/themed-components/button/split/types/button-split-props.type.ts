import type { IIsDisabled, IOnClick, ISize, IStyle } from "@react-library/common";

import type { ButtonSize } from "../../shared/enums/button-size.type";
import type { ButtonStyle } from "../../shared/enums/button-style.type";

import type { ButtonSplitContent } from "./button-split-content.type";
import type { ButtonSplitMenuElement } from "./button-split-menu-element.type";

/**
 * Props for button split
 */
export type ButtonSplitProps = (
	ButtonSplitContent &
	ButtonSplitMenuElement &
	Partial<IIsDisabled> &
	IOnClick<HTMLDivElement> &
	ISize<ButtonSize> &
	IStyle<ButtonStyle>
);
