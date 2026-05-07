import type { MouseEventHandler } from "react";

import type {
	IChild,
	IColourSchemeStyle,
	IContent,
	IIconName,
	IIconStyle,
	IIsDisabled,
	IKey,
	IOnClick,
	IOrientation,
	IPositionStrategy,
	ISize
} from "@react-library/common";
import type { MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonClickTarget, ButtonSizeFloating } from "../../../../button";

import type { FloatingButtonGroupButtonMenuChildren } from "../../../types/floating-button-group-button-menu-children.type";
import type { FloatingButtonGroupMenuColourSchemeStyle } from "../../../types/floating-button-group-colour-scheme-style.type";
import type { FloatingButtonGroupMenuIconAllowed } from "../../../types/floating-button-group-menu-icon.type";
import type { FloatingButtonGroupOrientation } from "../../../types/floating-button-group-orientation.type";
import type { FloatingButtonGroupPositionStrategy } from "../../../types/floating-button-group-position-strategy.type";
import type { FloatingButtonGroupButtonMenuItemContent } from "../../floating-button-group-menu-item";

/**
 * Props for floating button group menu button
 */
export type FloatingButtonGroupMenuProps = (
	IChild<FloatingButtonGroupButtonMenuChildren<FloatingButtonGroupMenuChildProps>> &
	IColourSchemeStyle<FloatingButtonGroupMenuColourSchemeStyle> &
	IIconName<FloatingButtonGroupMenuIconAllowed> &
	IIconStyle<MaterialIconStyle> &
	Partial<IIsDisabled> &
	IOrientation<FloatingButtonGroupOrientation> &
	IPositionStrategy<FloatingButtonGroupPositionStrategy> &
	ISize<ButtonSizeFloating>
);

/**
 * Props for floating button group menu props for a menu child
 */
export type FloatingButtonGroupMenuChildProps = (
	IContent<FloatingButtonGroupButtonMenuItemContent> &
	Partial<IIsDisabled> &
	IKey<number | string> &
	IOnClick<MouseEventHandler<ButtonClickTarget>>
);
