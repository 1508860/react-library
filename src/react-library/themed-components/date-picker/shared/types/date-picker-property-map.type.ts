import type { Property } from "csstype";

import type {
	IArrow,
	IBorderRadius,
	IBorderWidth,
	IChevron,
	IContainer,
	IDate,
	IFontSize,
	IFontWeight,
	IHeight,
	IIconSize,
	IMarginBottom,
	IMonthItem,
	IPadding,
	ISelection,
	ISize,
	ITitle,
	IWeekday,
	IWidth,
	Size,
	SizePx
} from "@react-library/common";

/**
 * Describes values for date picker style sizes
 */
export type DatePickerPropertyMap = (
	IContainer<DatePickerPropertyContainerMap> &
	IMonthItem<DatePickerPropertyMonthItemMap> &
	ISelection<DatePickerPropertySelectionMap>
);

// Container

type DatePickerPropertyContainerMap = (
	IBorderRadius<Size> &
	IHeight<Size> &
	IPadding<Size>
);

// Month item

type DatePickerPropertyMonthItemMap = (
	IDate<DatePickerPropertyMonthItemDateMap> &
	ITitle<DatePickerPropertyMonthItemTitleMap> &
	IWeekday<DatePickerPropertyMonthItemWeekdayMap> &
	IWidth<Size>
);

type DatePickerPropertyMonthItemDateMap = (
	IBorderWidth<Size> &
	IFontSize<SizePx> &
	IFontWeight<Property.FontWeight> &
	ISize<SizePx>
);

type DatePickerPropertyMonthItemTitleMap = (
	IFontSize<Size> &
	IFontWeight<Property.FontWeight> &
	IHeight<SizePx>
);

type DatePickerPropertyMonthItemWeekdayMap = (
	IFontSize<SizePx> &
	IFontWeight<Property.FontWeight> &
	IHeight<SizePx> &
	IWidth<SizePx>
);

// Selection

type DatePickerPropertySelectionMap = (
	IFontSize<Size> &
	IFontWeight<Property.FontWeight> &
	IIconSize<DatePickerPropertySelectionIconSizeMap> &
	IMarginBottom<Size>
);

type DatePickerPropertySelectionIconSizeMap = (
	IArrow<Size> &
	IChevron<Size>
);
