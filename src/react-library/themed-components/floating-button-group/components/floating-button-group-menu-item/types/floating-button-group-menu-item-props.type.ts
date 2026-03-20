import type {
	ColourSchemeStyleStandard,
	IColourSchemeStyle,
	IContent,
	IIsDisabled,
	IOnClick,
	ISize
} from "@react-library/common";

import type { ButtonClickTarget, ButtonSizeFloating } from "../../../../button";

import type { FloatingButtonGroupButtonMenuItemContent } from "./floating-button-group-menu-item-content.type";

/**
 * Props for floating button group menu item
 */
export type FloatingButtonGroupMenuItemProps = (
	IColourSchemeStyle<ColourSchemeStyleStandard> &
	IContent<FloatingButtonGroupButtonMenuItemContent> &
	Partial<IIsDisabled> &
	IOnClick<ButtonClickTarget> &
	ISize<ButtonSizeFloating>
);
