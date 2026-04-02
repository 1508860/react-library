import type { Property } from "csstype";

import type {
	IBorderRadius,
	IBorderStyle,
	IBorderWidth,
	IContent,
	IFontSize,
	IGap,
	IHeight,
	IIconSize,
	IIconWidth,
	IPaddingHorizontal,
	IShape,
	ISize,
	IStyle,
	SizePx
} from "@react-library/common";

import type { ButtonContent } from "../../shared/enums/button-content.type";
import type { ButtonIconWidth } from "../../shared/enums/button-icon-width.type";
import type { ButtonShape } from "../../shared/enums/button-shape.type";
import type { ButtonSize } from "../../shared/enums/button-size.type";

import type { ButtonSelectionStyle } from "./button-selection-style.type";

/**
 * Describes values for button selection style sizes
 */
export type ButtonSelectionPropertyMap = (
	ISize<Record<ButtonSize, ButtonSelectionPropertySizeMap>> &
	IStyle<Record<ButtonSelectionStyle, ButtonSelectionPropertyStyleMap>>
);

type ButtonSelectionPropertySizeMap = (
	IContent<Record<ButtonContent, ButtonSelectionPropertySizeContentMap>> &
	IFontSize<SizePx> &
	IGap<SizePx> &
	IHeight<SizePx> &
	IIconSize<SizePx> &
	IShape<Record<ButtonShape, ButtonSelectionPropertySizeShapeMap>>
);

type ButtonSelectionPropertySizeContentMap = (
	IIconWidth<Partial<Record<ButtonIconWidth, SizePx>>> &
	Partial<IPaddingHorizontal<SizePx>>
);

type ButtonSelectionPropertySizeShapeMap = (
	IBorderRadius<SizePx>
);

type ButtonSelectionPropertyStyleMap = (
	Partial<IBorderStyle<Property.BorderStyle>> &
	Partial<IBorderWidth<SizePx>>
);
