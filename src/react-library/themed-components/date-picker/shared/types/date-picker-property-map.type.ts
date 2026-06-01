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
	IGap,
	IHeight,
	IIconSize,
	IItemHeight,
	IMarginBottom,
	IMonthItem,
	IPadding,
	ISelection,
	ISelectionMenu,
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
	ISelection<DatePickerPropertySelectionMap> &
	ISelectionMenu<DatePickerPropertySelectionMenuMap>
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

// Selection menu

type DatePickerPropertySelectionMenuMap = (
	IFontSize<Size> &
	IFontWeight<Property.FontWeight> &
	IGap<Size> &
	IIconSize<Size> &
	IItemHeight<SizePx>
);
