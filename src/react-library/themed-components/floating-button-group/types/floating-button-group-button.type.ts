import type { Attributes } from "react";

import type {
	ArrayMaxLength6,
	ArrayMinLength2,
	ColourSchemeStyle,
	ColourSchemeStyleStandard,
	IChild,
	IColourSchemeStyle,
	IIconName,
	IIconStyle,
	IIsDisabled,
	IOnClick,
	IOrientation,
	IType,
	Orientation
} from "@react-library/common";
import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type {
	ButtonContentIcon,
	ButtonContentIconLabel,
	ButtonContentLabel
} from "../../button";
import type { FloatingButtonGroupButton } from "../enums/floating-button-group-button.type";
import type { FloatingButtonGroupMenuIconClose } from "./floating-button-group-menu-icon.type";


/**
 * Describes base configuration for a floating button group's button
 */
type FloatingButtonGroupButtonBase = (
	Attributes &
	Partial<IIsDisabled>
);

/**
 * Describes base type configuration for a floating button group's button to distinguish the behaviour of a button
 */
type FloatingButtonGroupButtonType<TType extends FloatingButtonGroupButton> = (
	IType<TType>
);

/**
 * Describes configuration for a floating button group's button where the action is default
 */
export type FloatingButtonGroupButtonDefault = (
	(
		ButtonContentIcon<Exclude<MaterialIconName, FloatingButtonGroupMenuIconClose>, MaterialIconStyle> |
		ButtonContentIconLabel<Exclude<MaterialIconName, FloatingButtonGroupMenuIconClose>, MaterialIconStyle> |
		ButtonContentLabel
	) &
	IColourSchemeStyle<ColourSchemeStyle> &
	FloatingButtonGroupButtonBase &
	FloatingButtonGroupButtonType<typeof FloatingButtonGroupButton.Default> &
	IOnClick<HTMLDivElement>
);

/**
 * Describes configuration for a floating button group's button where the action is menu
 */
export type FloatingButtonGroupButtonMenu = (
	IColourSchemeStyle<ColourSchemeStyleStandard> &
	IChild<ArrayMinLength2<FloatingButtonGroupButtonMenuChild> & ArrayMaxLength6<FloatingButtonGroupButtonMenuChild>> &
	FloatingButtonGroupButtonBase &
	FloatingButtonGroupButtonType<typeof FloatingButtonGroupButton.Menu> &
	IIconName<Exclude<MaterialIconName, FloatingButtonGroupMenuIconClose>> &
	IIconStyle<MaterialIconStyle> &
	IOrientation<Orientation>
);

/**
 * Describes configuration for a floating button group's child button where the action is menu
 */
export type FloatingButtonGroupButtonMenuChild = (
	(
		ButtonContentIconLabel<Exclude<MaterialIconName, FloatingButtonGroupMenuIconClose>, MaterialIconStyle> |
		ButtonContentLabel
	) &
	FloatingButtonGroupButtonBase &
	IOnClick<HTMLDivElement>
);
