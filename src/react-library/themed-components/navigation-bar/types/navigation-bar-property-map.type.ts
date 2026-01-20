import type {
	IBorderRadius,
	IFontSize,
	IGap,
	IHeight,
	IOrientation,
	IPadding,
	ISize,
	Orientation,
	PrefixKeys,
	SizePx
} from "@react-library/common";

/**
 * Describes values for navigation bar style sizes
 */
export type INavigationBarPropertyMap = (
	IFontSize<SizePx> &
	IGap<SizePx> &
	PrefixKeys<IHeight<SizePx>, "bar"> &
	IOrientation<Record<
		Orientation,
		(
			IBorderRadius<SizePx> &
			IHeight<SizePx>
		)
	>> &
	PrefixKeys<IPadding<SizePx>, "itemSide"> &
	PrefixKeys<ISize<SizePx>, "icon">
)
