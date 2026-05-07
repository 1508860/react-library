import type { MouseEventHandler } from "react";

import type { IContent, IIsDisabled, IOnClick, ISize, IStyle } from "@react-library/common";

import type { ButtonSize } from "../../shared/enums/button-size.type";

import type { ButtonSplitContent } from "./button-split-content.type";
import type { ButtonSplitMenuElement } from "./button-split-menu-element.type";
import type { ButtonSplitStyle } from "./button-split-style.type";

/**
 * Props for button split
 */
export type ButtonSplitProps = (
	IContent<ButtonSplitContent> &
	ButtonSplitMenuElement &
	Partial<IIsDisabled> &
	IOnClick<MouseEventHandler<HTMLDivElement>> &
	ISize<ButtonSize> &
	IStyle<ButtonSplitStyle>
);
