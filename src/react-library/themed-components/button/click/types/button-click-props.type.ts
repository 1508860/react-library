import type { MouseEventHandler } from "react";

import type {
	IContent,
	IIsDisabled,
	IOnClick,
	IShape,
	ISize,
	IStyle
} from "@react-library/common";

import type { ButtonShape } from "../../shared/enums/button-shape.type";
import type { ButtonSize } from "../../shared/enums/button-size.type";

import type { ButtonClickContent } from "./button-click-content.type";
import type { ButtonClickStyle } from "./button-click-style.type";

/**
 * Props for button click
 */
export type ButtonClickProps = (
	IContent<ButtonClickContent> &
	Partial<IIsDisabled> &
	IOnClick<MouseEventHandler<HTMLDivElement>> &
	IShape<ButtonShape> &
	ISize<ButtonSize> &
	IStyle<ButtonClickStyle>
);
