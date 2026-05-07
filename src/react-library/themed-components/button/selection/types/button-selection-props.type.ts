import type { MouseEventHandler } from "react";

import type {
	IContent,
	IIsDisabled,
	IIsSelected,
	IOnClick,
	ISize,
	IStyle
} from "@react-library/common";

import type { ButtonSize } from "../../shared/enums/button-size.type";

import type { ButtonSelectionContent } from "./button-selection-content.type";
import type { ButtonSelectionStyle } from "./button-selection-style.type";

/**
 * Props for button selection
 */
export type ButtonSelectionProps = (
	IContent<ButtonSelectionContent> &
	Partial<IIsDisabled> &
	IIsSelected &
	IOnClick<MouseEventHandler<HTMLDivElement>> &
	ISize<ButtonSize> &
	IStyle<ButtonSelectionStyle>
);
