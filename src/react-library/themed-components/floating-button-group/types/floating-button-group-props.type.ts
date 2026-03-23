import type { PropsWithChildren } from "react";

import type {
	IColourSchemeStyle,
	IContent,
	IIconName,
	IIconStyle,
	IIsDisabled,
	IItems,
	IOnClick,
	IOrientation,
	IPositionStrategy,
	ISize,
	IType
} from "@react-library/common";
import type { MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonClickTarget, ButtonSizeFloating } from "../../button";

import type { FloatingButtonGroupButtonDefaultContent } from "../components/floating-button-group-default";
import type { FloatingButtonGroupMenuChildProps } from "../components/floating-button-group-menu";
import type { FloatingButtonGroupButton } from "../enums/floating-button-group-button.type";
import type { FloatingButtonGroupButtonMenuChildren } from "./floating-button-group-button-menu-children.type";
import type {
	FloatingButtonGroupDefaultColourSchemeStyle,
	FloatingButtonGroupMenuColourSchemeStyle
} from "./floating-button-group-colour-scheme-style.type";
import type { FloatingButtonGroupMenuIconAllowed } from "./floating-button-group-menu-icon.type";
import type { FloatingButtonGroupOrientation } from "./floating-button-group-orientation.type";
import type { FloatingButtonGroupPositionStrategy } from "./floating-button-group-position-strategy.type";

/**
 * Baes props for floating button group
 */
type FloatingButtonGroupPropsBase<TFloatingButtonGroupButton extends FloatingButtonGroupButton> = (
	Partial<IIsDisabled> &
	IPositionStrategy<FloatingButtonGroupPositionStrategy> &
	PropsWithChildren &
	ISize<ButtonSizeFloating> &
	IType<TFloatingButtonGroupButton>
);

/**
 * Props for floating button group default
 */
export type FloatingButtonGroupPropsDefault = (
	IColourSchemeStyle<FloatingButtonGroupDefaultColourSchemeStyle> &
	IContent<FloatingButtonGroupButtonDefaultContent> &
	FloatingButtonGroupPropsBase<typeof FloatingButtonGroupButton.Default> &
	IOnClick<ButtonClickTarget>
);

/**
 * Props for floating button group menu
 */
export type FloatingButtonGroupPropsMenu = (
	IColourSchemeStyle<FloatingButtonGroupMenuColourSchemeStyle> &
	FloatingButtonGroupPropsBase<typeof FloatingButtonGroupButton.Menu> &
	IIconName<FloatingButtonGroupMenuIconAllowed> &
	IIconStyle<MaterialIconStyle> &
	IItems<FloatingButtonGroupButtonMenuChildren<FloatingButtonGroupMenuChildProps>> &
	IOrientation<FloatingButtonGroupOrientation>
);

/**
 * All prop variants for floating button group
 */
export type FloatingButtonGroupPropsAll = (
	FloatingButtonGroupPropsDefault |
	FloatingButtonGroupPropsMenu
);
