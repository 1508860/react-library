import type {
	IBorderBottomRightRadius,
	IBorderRadius,
	IBorderTopRightRadius,
	IDurationMs,
	IExpanded,
	IFontSize,
	IGap,
	IHeight,
	IOrientation,
	IPaddingBottom,
	IPaddingHorizontal,
	IPaddingLeft,
	IPaddingVertical,
	ISize,
	IStyle,
	ITransform,
	IWidth,
	Orientation,
	PrefixKeys,
	SizePx,
	StyleTransformCollection,
	StyleTransformRotate
} from "@react-library/common";

import type { NavigationRailMenuStyle } from "../enums/navigation-rail-menu-style.type";

/**
 * Describes values for navigation rail style sizes
 */
export type NavigationRailPropertyMap = (
	PrefixKeys<IDurationMs<number>, "menuTransitionPer100Px"> &
	IExpanded<Record<`${boolean}`, PrefixKeys<ITransform<StyleTransformCollection<[StyleTransformRotate]>>, "menuIcon">>> &
	IFontSize<SizePx> &
	PrefixKeys<IGap<SizePx>, "itemContent"> &
	IOrientation<Record<
		Orientation,
		(
			IBorderRadius<SizePx> &
			IHeight<SizePx> &
			PrefixKeys<IPaddingBottom<SizePx>, "item">
		)
	>> &
	PrefixKeys<IPaddingHorizontal<SizePx>, "item"> &
	PrefixKeys<IPaddingHorizontal<SizePx>, "menu"> &
	PrefixKeys<IPaddingHorizontal<SizePx>, "menuIcon"> &
	PrefixKeys<IPaddingLeft<SizePx>, "immersiveMenu"> &
	PrefixKeys<IPaddingVertical<SizePx>, "itemCollection"> &
	PrefixKeys<IPaddingVertical<SizePx>, "menuIcon"> &
	PrefixKeys<ISize<SizePx>, "itemIcon"> &
	PrefixKeys<ISize<SizePx>, "menuIcon"> &
	PrefixKeys<IStyle<Record<
		NavigationRailMenuStyle,
		(
			PrefixKeys<IBorderBottomRightRadius<SizePx>, "menu"> &
			PrefixKeys<IBorderTopRightRadius<SizePx>, "menu"> &
			PrefixKeys<IWidth<SizePx>, "menuCollapsed">
		)
	>>, "menu"> &
	PrefixKeys<IWidth<SizePx>, "headerContainer">
)
