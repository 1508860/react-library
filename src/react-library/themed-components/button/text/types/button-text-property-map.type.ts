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
	IPaddingHorizontal,
	ISize,
	IStyle,
	SizePx
} from "@react-library/common";

import type { ButtonContent } from "../../shared/enums/button-content.type";
import type { ButtonSize } from "../../shared/enums/button-size.type";
import type { ButtonTextStyle } from "./button-text-style.type";

/**
 * Describes values for button text style sizes
 */
export type ButtonTextPropertyMap = (
	ISize<Record<ButtonSize, ButtonTextPropertySizeMap>> &
	IStyle<Record<ButtonTextStyle, ButtonTextPropertyStyleMap>>
);

type ButtonTextPropertySizeMap = (
	IBorderRadius<SizePx> &
	IContent<Record<ButtonContent, ButtonTextPropertySizeContentMap>> &
	IFontSize<SizePx> &
	IGap<SizePx> &
	IHeight<SizePx> &
	IIconSize<SizePx>
);

type ButtonTextPropertySizeContentMap = (
	Partial<IPaddingHorizontal<SizePx>>
);

type ButtonTextPropertyStyleMap = (
	Partial<IBorderStyle<Property.BorderStyle>> &
	Partial<IBorderWidth<SizePx>>
);
