import type { Property } from "csstype";

import type {
	IBorderRadius,
	IBorderStyle,
	IBorderWidth,
	IButton,
	ICollapsed,
	IContent,
	IDurationMs,
	IExpanded,
	IFontSize,
	IGap,
	IHeight,
	IIconSize,
	IInside,
	IMenu,
	IOutside,
	IPaddingHorizontal,
	ISize,
	IStyle,
	ITransition,
	IWidth,
	SizePx
} from "@react-library/common";

import type { ButtonContent } from "../../shared/enums/button-content.type";
import type { ButtonSize } from "../../shared/enums/button-size.type";
import type { ButtonStyle } from "../../shared/enums/button-style.type";

/**
 * Describes values for button split style sizes
 */
export type ButtonSplitPropertyMap = (
	IGap<SizePx> &
	ISize<Record<ButtonSize, ButtonSplitPropertySizeMap>> &
	IStyle<Record<ButtonStyle, ButtonSplitPropertyStyleMap>> &
	ITransition<IBorderRadius<IDurationMs<number>>>
);

type ButtonSplitPropertySizeMap = (
	IButton<ButtonSplitPropertySizeButtonMap> &
	IHeight<SizePx> &
	IMenu<ButtonSplitPropertySizeMenuMap>
);

type ButtonSplitPropertySizeButtonMap = (
	IBorderRadius<ButtonSplitPropertySizeButtonBorderRadiusMap> &
	IContent<Record<ButtonContent, ButtonSplitPropertySizeButtonContentMap>> &
	IFontSize<SizePx> &
	IGap<SizePx> &
	IIconSize<SizePx>
);

type ButtonSplitPropertySizeButtonContentMap = (
	Partial<IPaddingHorizontal<SizePx>> &
	Partial<IWidth<SizePx>>
);

type ButtonSplitPropertySizeButtonBorderRadiusMap = (
	IInside<SizePx> &
	IOutside<SizePx>
);

type ButtonSplitPropertySizeMenuMap = (
	IBorderRadius<ButtonSplitPropertySizeMenuBorderRadiusMap> &
	IIconSize<SizePx> &
	IWidth<SizePx>
);

type ButtonSplitPropertySizeMenuBorderRadiusMap = (
	IInside<ButtonSplitPropertySizeMenuBorderRadiusInsideMap> &
	IOutside<SizePx>
);

type ButtonSplitPropertySizeMenuBorderRadiusInsideMap = (
	ICollapsed<SizePx> &
	IExpanded<SizePx>
);

type ButtonSplitPropertyStyleMap = (
	Partial<IBorderStyle<Property.BorderStyle>> &
	Partial<IBorderWidth<SizePx>>
)
