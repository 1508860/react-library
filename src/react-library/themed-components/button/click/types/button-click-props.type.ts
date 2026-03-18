import type {
	IIsDisabled,
	IOnClick,
	IStyle
} from "@react-library/common";

import type { ButtonSize } from "../../shared/enums/button-size.type";
import type { ButtonStyle } from "../../shared/enums/button-style.type";
import type { ButtonShapeProps } from "../../shared/types/button-shape-props.type"
import type { ButtonSizeProps } from "../../shared/types/button-size-props.type";

import type { ButtonClickContent } from "./button-click-content.type";

/**
 * Props for button click
 */
export type ButtonClickProps = (
	ButtonClickContent &
	ButtonShapeProps &
	ButtonSizeProps<ButtonSize> &
	Partial<IIsDisabled> &
	IOnClick<HTMLDivElement> &
	IStyle<ButtonStyle>
);
