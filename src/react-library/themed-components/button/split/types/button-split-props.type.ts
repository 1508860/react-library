import type { IIsDisabled, IOnClick, IStyle } from "@react-library/common";

import type { ButtonSize } from "../../shared/enums/button-size.type";
import type { ButtonStyle } from "../../shared/enums/button-style.type";
import type { ButtonSizeProps } from "../../shared/types/button-size-props.type";

import type { ButtonSplitContent } from "./button-split-content.type";
import type { ButtonSplitMenuElement } from "./button-split-menu-element.type";

/**
 * Props for button split
 */
export type ButtonSplitProps = (
	ButtonSplitContent &
	ButtonSizeProps<ButtonSize> &
	ButtonSplitMenuElement &
	Partial<IIsDisabled> &
	IOnClick<HTMLDivElement> &
	IStyle<ButtonStyle>
);
