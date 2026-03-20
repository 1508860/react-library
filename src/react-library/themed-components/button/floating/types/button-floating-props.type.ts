import type {
	ColourSchemeStyle,
	IColourSchemeStyle,
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
	ButtonFloatingContent &
	IColourSchemeStyle<ColourSchemeStyle> &
	Partial<IIsDisabled> &
	IOnClick<HTMLDivElement> &
	IShape<ButtonShape> &
	ISize<ButtonSizeFloating>
);
