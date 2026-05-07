import type { MouseEventHandler } from "react";

import type {
	ColourSchemeStyle,
	IColourSchemeStyle,
	IContent,
	IIsDisabled,
	IOnClick,
	IShape,
	ISize
} from "@react-library/common";

import type { ButtonShape } from "../../shared/enums/button-shape.type";
import type { ButtonSizeFloating } from "../../shared/enums/button-size.type";

import type { ButtonFloatingContent } from "./button-floating-content.type";

/**
 * Props for button floating
 */
export type ButtonFloatingProps = (
	IContent<ButtonFloatingContent> &
	IColourSchemeStyle<ColourSchemeStyle> &
	Partial<IIsDisabled> &
	IOnClick<MouseEventHandler<HTMLDivElement>> &
	IShape<ButtonShape> &
	ISize<ButtonSizeFloating>
);
