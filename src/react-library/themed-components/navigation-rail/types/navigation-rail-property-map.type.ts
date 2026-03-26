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
	IMenuIconPaddingHorizontal,
	IMenuIconPaddingVertical,
	IMenuIconSize,
	IMenuIconTransform,
	IMenuPaddingHorizontal,
	IMenuStyle,
	IMenuTransitionDurationMs,
	IOrientation,
	Orientation,
	SizePx,
	StyleTransformCollection,
	StyleTransformRotate
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
	IMenuIconPaddingHorizontal<SizePx> &
	IMenuIconPaddingVertical<SizePx> &
	IMenuIconSize<SizePx> &
	IMenuPaddingHorizontal<SizePx> &
	IMenuStyle<Record<NavigationRailMenuStyle, NavigationRailPropertyMenuStyleMap>> &
	IMenuTransitionDurationMs<number> &
	IOrientation<Record<Orientation, NavigationRailPropertyOrientationMap>>
);

type NavigationRailPropertyMenuIconExpandedMap = (
	IMenuIconTransform<StyleTransformCollection<[StyleTransformRotate]>>
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
