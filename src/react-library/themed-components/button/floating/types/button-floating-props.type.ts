import type {
	ColourSchemeStyle,
	IColourSchemeStyle,
	IIsDisabled,
	IOnClick
} from "@react-library/common";

import type { ButtonSizeFloating } from "../../shared/enums/button-size.type";
import type { ButtonShapeProps } from "../../shared/types/button-shape-props.type";
import type { ButtonSizeProps } from "../../shared/types/button-size-props.type";

import type { ButtonFloatingContent } from "./button-floating-content.type";

/**
 * Props for button floating
 */
export type ButtonFloatingProps = (
	ButtonFloatingContent &
	ButtonShapeProps &
	ButtonSizeProps<ButtonSizeFloating> &
	IColourSchemeStyle<ColourSchemeStyle> &
	Partial<IIsDisabled> &
	IOnClick<HTMLDivElement>
);
