import type {
	IIsDisabled,
	IIsSelected,
	IOnClick,
	IStyle
} from "@react-library/common";

import type { ButtonSize } from "../../shared/enums/button-size.type";
import type { ButtonStyle } from "../../shared/enums/button-style.type";
import type { ButtonSizeProps } from "../../shared/types/button-size-props.type";

import type { ButtonSelectionContent } from "./button-selection-content.type";

/**
 * Props for button selection
 */
export type ButtonSelectionProps = (
	ButtonSelectionContent &
	ButtonSizeProps<ButtonSize> &
	Partial<IIsDisabled> &
	IIsSelected &
	IOnClick<HTMLDivElement> &
	IStyle<ButtonStyle>
);
