import type {
	ColourSchemeStyle,
	IColourSchemeStyle,
	IContent,
	IIsDisabled,
	IOnClick,
	ISize
} from "@react-library/common";

import type { ButtonClickTarget, ButtonSizeFloating } from "../../../../button";

import type { FloatingButtonGroupButtonDefaultContent } from "./floating-button-group-default-content.type";

/**
 * Props for floating button group default button
 */
export type FloatingButtonGroupDefaultProps = (
	IColourSchemeStyle<ColourSchemeStyle> &
	IContent<FloatingButtonGroupButtonDefaultContent> &
	Partial<IIsDisabled> &
	IOnClick<ButtonClickTarget> &
	ISize<ButtonSizeFloating>
);
