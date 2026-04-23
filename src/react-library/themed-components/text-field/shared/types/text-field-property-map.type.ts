import type { Property } from "csstype";

import type {
	Extends,
	IBackgroundColour,
	IBorder,
	IBorderRadius,
	IBottomLeft,
	IBottomRight,
	IFontSize,
	IFontWeight,
	IGap,
	IIconSize,
	IInsetAll,
	ILabel,
	ILeft,
	ILineHeight,
	IMarginTop,
	IMinHeight,
	IPaddingBottom,
	IPaddingHorizontal,
	IPaddingLeft,
	IPaddingRight,
	IPaddingTop,
	IPopulated,
	IStyle,
	IStyleState,
	ISupportingText,
	IText,
	ITextarea,
	ITop,
	ITopLeft,
	ITopRight,
	IWidth,
	Size
} from "@react-library/common";

import type { TextFieldStyleState } from "../enums/text-field-style-state.type";
import type { TextFieldStyle } from "../enums/text-field-style.type";

/**
 * Describes values for text field style sizes
 */
export type TextFieldPropertyMap = (
	IStyle<Record<TextFieldStyle, TextFieldPropertyStyleMap>>
);

/**
 * Describes values for text field style sizes for a {@link TextFieldStyle}
 */
export type TextFieldPropertyStyleMap = (
	IBorderRadius<TextFieldPropertyContentBorderRadiusMap> &
	IGap<Size> &
	IIconSize<Size> &
	ILabel<TextFieldPropertyContentLabelMap> &
	IMinHeight<Size> &
	IStyleState<Record<TextFieldStyleState, TextFieldPropertyContentStyleStateMap>> &
	ISupportingText<TextFieldPropertyContentSupportingTextMap> &
	IText<TextFieldPropertyContentTextMap> &
	ITextarea<TextFieldPropertyContentTextarea>
);

type TextFieldPropertyContentBorderRadiusMap = (
	Partial<IBottomLeft<Size>> &
	Partial<IBottomRight<Size>> &
	Partial<ITopLeft<Size>> &
	Partial<ITopRight<Size>>
);

type TextFieldPropertyContentLabelMap = (
	IPopulated<Record<`${boolean}`, TextFieldPropertyContentLabelPopulatedMap>>
);

type TextFieldPropertyContentLabelPopulatedMap = (
	IFontSize<Size> &
	IFontWeight<Property.FontWeight> &
	ILeft<Size | undefined> &
	Partial<ILineHeight<Size>> &
	Partial<IPaddingHorizontal<Size>> &
	ITop<Size | undefined>
);

type TextFieldPropertyContentStyleStateMap = (
	IBorder<Partial<IInsetAll<TextFieldPropertyContentStyleStateBorderMap>>> &
	IPaddingBottom<Size> &
	IPaddingLeft<Size> &
	IPaddingRight<Size> &
	IPaddingTop<Size>
);

type TextFieldPropertyContentStyleStateBorderMap = (
	IStyle<(Property.BorderBottomStyle & Property.BorderLeftStyle & Property.BorderRightStyle & Property.BorderTopStyle)> &
	IWidth<Size>
);

type TextFieldPropertyContentSupportingTextMap = (
	IFontSize<Size> &
	IFontWeight<Property.FontWeight> &
	IGap<Size> &
	ILineHeight<Size> &
	IPaddingBottom<Size> &
	IPaddingHorizontal<Size> &
	IPaddingTop<Size>
);

type TextFieldPropertyContentTextMap = (
	Partial<IBackgroundColour<Extends<Property.BackgroundColor, "inherit">>> &
	IFontSize<Size> &
	IFontWeight<Property.FontWeight> &
	ILineHeight<Size>
);

type TextFieldPropertyContentTextarea = (
	IMarginTop<Size>
);
