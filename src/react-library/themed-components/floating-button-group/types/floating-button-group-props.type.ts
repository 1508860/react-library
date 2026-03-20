import type { PropsWithChildren } from "react";

import type {
	ColourSchemeStyle,
	ColourSchemeStyleStandard,
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
	IType,
	Orientation,
	PositionStrategyInternalCorner
} from "@react-library/common";
import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonClickTarget, ButtonSizeFloating } from "../../button";

import type { FloatingButtonGroupButtonDefaultContent } from "../components/floating-button-group-default";
import type { FloatingButtonGroupMenuChildProps } from "../components/floating-button-group-menu";
import type { FloatingButtonGroupButton } from "../enums/floating-button-group-button.type";
import type { FloatingButtonGroupButtonMenuChildren } from "./floating-button-group-button-menu-children.type";
import type { FloatingButtonGroupMenuIconClose } from "./floating-button-group-menu-icon.type";

/**
 * Baes props for floating button group
 */
type FloatingButtonGroupPropsBase<TFloatingButtonGroupButton extends FloatingButtonGroupButton> = (
	Partial<IIsDisabled> &
	IPositionStrategy<PositionStrategyInternalCorner> &
	PropsWithChildren &
	ISize<ButtonSizeFloating> &
	IType<TFloatingButtonGroupButton>
);

/**
 * Props for floating button group default
 */
export type FloatingButtonGroupPropsDefault = (
	IColourSchemeStyle<ColourSchemeStyle> &
	IContent<FloatingButtonGroupButtonDefaultContent> &
	FloatingButtonGroupPropsBase<typeof FloatingButtonGroupButton.Default> &
	IOnClick<ButtonClickTarget>
);

/**
 * Props for floating button group menu
 */
export type FloatingButtonGroupPropsMenu = (
	IColourSchemeStyle<ColourSchemeStyleStandard> &
	FloatingButtonGroupPropsBase<typeof FloatingButtonGroupButton.Menu> &
	IIconName<Exclude<MaterialIconName, FloatingButtonGroupMenuIconClose>> &
	IIconStyle<MaterialIconStyle> &
	IItems<FloatingButtonGroupButtonMenuChildren<FloatingButtonGroupMenuChildProps>> &
	IOrientation<Orientation>
);

/**
 * All prop variants for floating button group
 */
export type FloatingButtonGroupPropsAll = (
	FloatingButtonGroupPropsDefault |
	FloatingButtonGroupPropsMenu
);
