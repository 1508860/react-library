import type { MouseEventHandler } from "react";

import type {
	IContent,
	IIsDisabled,
	IOnClick,
	ISize,
	IStyle
} from "@react-library/common";

import type { ButtonSize } from "../../shared/enums/button-size.type";

import type { ButtonTextContent } from "./button-text-content.type";
import type { ButtonTextStyle } from "./button-text-style.type";

/**
 * Props for button text
 */
export type ButtonTextProps = (
	IContent<ButtonTextContent> &
	Partial<IIsDisabled> &
	IOnClick<MouseEventHandler<HTMLDivElement>> &
	ISize<ButtonSize> &
	IStyle<ButtonTextStyle>
);
