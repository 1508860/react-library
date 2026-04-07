import type {
	IBorderRadius,
	IExpanded,
	IFontSize,
	IHeaderContainerWidth,
	IHeight,
	IImmersiveMenuPaddingLeft,
	IItemCollectionPaddingVertical,
	IItemContentGap,
	IItemIconSize,
	IItemPaddingBottom,
	IItemPaddingHorizontal,
	IMenuBorderBottomRightRadius,
	IMenuBorderTopRightRadius,
	IMenuCollapsedWidth,
	IMenuIconMarginHorizontal,
	IMenuIconPadding,
	IMenuIconRotate,
	IMenuIconSize,
	IMenuPaddingHorizontal,
	IMenuStyle,
	IMenuTransitionDurationMs,
	IOrientation,
	Orientation,
	ScaleDegreesState,
	SizePx
} from "@react-library/common";

import type { NavigationRailMenuStyle } from "../enums/navigation-rail-menu-style.type";

/**
 * Describes values for navigation rail style sizes
 */
export type NavigationRailPropertyMap = (
	IExpanded<Record<`${boolean}`, NavigationRailPropertyMenuIconExpandedMap>> &
	IFontSize<SizePx> &
	IHeaderContainerWidth<SizePx> &
	IImmersiveMenuPaddingLeft<SizePx> &
	IItemCollectionPaddingVertical<SizePx> &
	IItemContentGap<SizePx> &
	IItemIconSize<SizePx> &
	IItemPaddingHorizontal<SizePx> &
	IMenuIconMarginHorizontal<SizePx> &
	IMenuIconPadding<SizePx> &
	IMenuIconSize<SizePx> &
	IMenuPaddingHorizontal<SizePx> &
	IMenuStyle<Record<NavigationRailMenuStyle, NavigationRailPropertyMenuStyleMap>> &
	IMenuTransitionDurationMs<number> &
	IOrientation<Record<Orientation, NavigationRailPropertyOrientationMap>>
);

type NavigationRailPropertyMenuIconExpandedMap = (
	IMenuIconRotate<ScaleDegreesState>
);

type NavigationRailPropertyOrientationMap = (
	IBorderRadius<SizePx> &
	IHeight<SizePx> &
	IItemPaddingBottom<SizePx>
);

type NavigationRailPropertyMenuStyleMap = (
	IMenuBorderBottomRightRadius<SizePx> &
	IMenuBorderTopRightRadius<SizePx> &
	IMenuCollapsedWidth<SizePx>
);
