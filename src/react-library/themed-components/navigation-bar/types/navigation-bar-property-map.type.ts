import type {
	IBorderRadius,
	IFontSize,
	IGap,
	IHeight,
	IIconSize,
	IItemPaddingHorizontal,
	IOrientation,
	Orientation,
	SizePx
} from "@react-library/common";

/**
 * Describes values for navigation bar style sizes
 */
export type NavigationBarPropertyMap = (
	IFontSize<SizePx> &
	IGap<SizePx> &
	IHeight<SizePx> &
	IIconSize<SizePx> &
	IItemPaddingHorizontal<SizePx> &
	IOrientation<Record<Orientation, NavigationBarPropertyOrientationMap>>
);

type NavigationBarPropertyOrientationMap = (
	IBorderRadius<SizePx> &
	IHeight<SizePx>
);
