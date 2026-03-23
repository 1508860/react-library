import type {
	IColourSchemeStyle,
	IContent,
	IIsDisabled,
	IOnClick,
	ISize
} from "@react-library/common";

import type { ButtonClickTarget, ButtonSizeFloating } from "../../../../button";

import type { FloatingButtonGroupDefaultColourSchemeStyle } from "../../../types/floating-button-group-colour-scheme-style.type";
import type { FloatingButtonGroupButtonDefaultContent } from "./floating-button-group-default-content.type";

/**
 * Props for floating button group default button
 */
export type FloatingButtonGroupDefaultProps = (
	IColourSchemeStyle<FloatingButtonGroupDefaultColourSchemeStyle> &
	IContent<FloatingButtonGroupButtonDefaultContent> &
	Partial<IIsDisabled> &
	IOnClick<ButtonClickTarget> &
	ISize<ButtonSizeFloating>
);
