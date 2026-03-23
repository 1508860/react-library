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
import type { ButtonStyle } from "../../shared/enums/button-style.type";

import type { ButtonClickContent } from "./button-click-content.type";

/**
 * Props for button click
 */
export type ButtonClickProps = (
	IContent<ButtonClickContent> &
	Partial<IIsDisabled> &
	IOnClick<HTMLDivElement> &
	IShape<ButtonShape> &
	ISize<ButtonSize> &
	IStyle<ButtonStyle>
);
