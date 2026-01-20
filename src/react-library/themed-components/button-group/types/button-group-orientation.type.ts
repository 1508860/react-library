import type { IAlign, IOrientation, Orientation } from "@react-library/common";

import type { ButtonGroupAlignItems } from "../enums/button-group-align-items.type";

/**
 * Describes base type for button group orientation
 */
type ButtonGroupOrientationBase<TButtonGroupOrientation extends Orientation> = (
	IOrientation<TButtonGroupOrientation>
);

/**
 * Describes button group orientation of horizontal
 */
export type ButtonGroupOrientationHorizontal = (
	ButtonGroupOrientationBase<typeof Orientation.Horizontal>
);

/**
 * Describes button group orientation of vertical
 */
export type ButtonGroupOrientationVertical = (
	IAlign<ButtonGroupAlignItems> &
	ButtonGroupOrientationBase<typeof Orientation.Vertical>
);

/**
 * Describes all types of button group orientation
 */
export type ButtonGroupOrientationAll = (
	ButtonGroupOrientationHorizontal |
	ButtonGroupOrientationVertical
);
