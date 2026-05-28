import type {
	Colour,
	IBackground,
	IDisabled,
	IFont,
	IHover,
	IIcon,
	IMenu,
	IMonth,
	IPulse,
	ISelected,
	ISelection,
	ITitle,
	IWeekday
} from "@react-library/common";

/**
 * Describes values for date picker component colours
 */
export type DatePickerColourState = (
	IBackground<Colour> &
	IMenu<DatePickerMenuColourState> &
	IMonth<DatePickerMonthColourState> &
	ISelection<DatePickerSelectionColourState> &
	ITitle<DatePickerTitleColourState> &
	IWeekday<DatePickerWeekdayColourState>
);

// Menu

type DatePickerMenuColourState = (
	IBackground<Colour> &
	IFont<Colour> &
	IHover<Colour> &
	IIcon<Colour> &
	IPulse<Colour> &
	ISelected<Record<`${boolean}`, DatePickerMenuSelectedColourState>>
);

type DatePickerMenuSelectedColourState = (
	IBackground<Colour | undefined>
);

// Month

type DatePickerMonthColourState = (
	IFont<Colour>
);

// Selection

type DatePickerSelectionColourState = (
	IDisabled<Record<`${boolean}`, DatePickerSelectionDisabledColourState>> &
	IIcon<Colour>
);

type DatePickerSelectionDisabledColourState = (
	IFont<Colour>
);

// Title

type DatePickerTitleColourState = (
	IFont<Colour>
);

// Weekday

type DatePickerWeekdayColourState = (
	IFont<Colour>
);
