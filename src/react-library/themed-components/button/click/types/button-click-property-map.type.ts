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
import type { ButtonClickStyle } from "./button-click-style.type";

/**
 * Describes values for button click style sizes
 */
export type ButtonClickPropertyMap = (
	ISize<Record<ButtonSize, ButtonClickPropertySizeMap>> &
	IStyle<Record<ButtonClickStyle, ButtonClickPropertyStyleMap>>
);

type ButtonClickPropertySizeMap = (
	IContent<Record<ButtonContent, ButtonClickPropertySizeContentMap>> &
	IFontSize<SizePx> &
	IGap<SizePx> &
	IHeight<SizePx> &
	IIconSize<SizePx> &
	IShape<Record<ButtonShape, ButtonClickPropertySizeShapeMap>>
);

type ButtonClickPropertySizeContentMap = (
	IIconWidth<Partial<Record<ButtonIconWidth, SizePx>>> &
	Partial<IPaddingHorizontal<SizePx>>
);

type ButtonClickPropertySizeShapeMap = (
	IBorderRadius<SizePx>
);

type ButtonClickPropertyStyleMap = (
	Partial<IBorderStyle<Property.BorderStyle>> &
	Partial<IBorderWidth<SizePx>>
);
