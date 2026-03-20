import type {
	ColourSchemeStyleStandard,
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
	ISize,
	Orientation,
	PositionStrategyInternalCorner
} from "@react-library/common";
import type { MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonClickTarget, ButtonSizeFloating } from "../../../../button";

import type { FloatingButtonGroupButtonMenuChildren } from "../../../types/floating-button-group-button-menu-children.type";
import type { FloatingButtonGroupMenuIconAllowed } from "../../../types/floating-button-group-menu-icon.type";
import type { FloatingButtonGroupButtonMenuItemContent } from "../../floating-button-group-menu-item";

/**
 * Props for floating button group menu button
 */
export type FloatingButtonGroupMenuProps = (
	IChild<FloatingButtonGroupButtonMenuChildren<FloatingButtonGroupMenuChildProps>> &
	IColourSchemeStyle<ColourSchemeStyleStandard> &
	IIconName<FloatingButtonGroupMenuIconAllowed> &
	IIconStyle<MaterialIconStyle> &
	Partial<IIsDisabled> &
	IOrientation<Orientation> &
	IPositionStrategy<PositionStrategyInternalCorner> &
	ISize<ButtonSizeFloating>
);

/**
 * Props for floating button group menu props for a menu child
 */
export type FloatingButtonGroupMenuChildProps = (
	IContent<FloatingButtonGroupButtonMenuItemContent> &
	Partial<IIsDisabled> &
	IKey<number | string> &
	IOnClick<ButtonClickTarget>
);
