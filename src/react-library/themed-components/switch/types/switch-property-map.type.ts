
import type {
	IBorderRadius,
	IBorderWidth,
	IFontSize,
	IGap,
	IHeight,
	IIconSize,
	ILabel,
	ILeft,
	ILineHeight,
	IMarginHorizontal,
	ISize,
	IThumb,
	ITrack,
	IValue,
	IWidth,
	Size,
	SizePx,
	SizeWithUnits
} from "@react-library/common";

/**
 * Describes values for switch component style sizes
 */
export type SwitchPropertyMap = (
	ILabel<SwitchPropertyLabelMap> &
	IThumb<SwitchPropertyThumbMap> &
	ITrack<SwitchPropertyTrackMap>
);

type SwitchPropertyLabelMap = (
	IFontSize<Size> &
	ILineHeight<SizeWithUnits> &
	IGap<Size>
);

type SwitchPropertyThumbMap = (
	IIconSize<Size> &
	IMarginHorizontal<Size> &
	ISize<Size> &
	IValue<Record<`${boolean}`, SwitchPropertyThumbValueMap>>
);

type SwitchPropertyThumbValueMap = (
	ILeft<SizePx>
);

type SwitchPropertyTrackMap = (
	IBorderRadius<Size> &
	IBorderWidth<Size> &
	IHeight<Size> &
	IWidth<Size>
);
