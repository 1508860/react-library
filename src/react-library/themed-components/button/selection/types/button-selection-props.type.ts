import type {
	IIsDisabled,
	IIsSelected,
	IOnClick,
	ISize,
	IStyle
} from "@react-library/common";

import type { ButtonSize } from "../../shared/enums/button-size.type";
import type { ButtonStyle } from "../../shared/enums/button-style.type";

import type { ButtonSelectionContent } from "./button-selection-content.type";

/**
 * Props for button selection
 */
export type ButtonSelectionProps = (
	ButtonSelectionContent &
	Partial<IIsDisabled> &
	IIsSelected &
	IOnClick<HTMLDivElement> &
	ISize<ButtonSize> &
	IStyle<ButtonStyle>
);
