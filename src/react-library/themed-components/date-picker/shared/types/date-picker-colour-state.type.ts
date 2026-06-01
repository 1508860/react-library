import type {
	Colour,
	IBackground,
	IColour,
	IDisabled,
	IFont,
	IHover,
	IIcon,
	IMonth,
	ISelection,
	ISelectionMenu,
	ITitle,
	IWeekday
} from "@react-library/common";

/**
 * Describes values for date picker component colours
 */
export type DatePickerColourState = (
	IBackground<Colour> &
	IMonth<DatePickerMonthColourState> &
	ISelection<DatePickerSelectionColourState> &
	ISelectionMenu<DatePickerSelectionMenuColourState> &
	ITitle<DatePickerTitleColourState> &
	IWeekday<DatePickerWeekdayColourState>
);

// Month

type DatePickerMonthColourState = (
	IFont<Colour>
);

// Selection

type DatePickerSelectionColourState = (
	IDisabled<Record<`${boolean}`, DatePickerSelectionDisabledColourState>>
);

type DatePickerSelectionDisabledColourState = (
	IColour<Colour>
);

// Selection menu

type DatePickerSelectionMenuColourState = (
	IBackground<Colour> &
	IFont<Colour> &
	IHover<Colour> &
	IIcon<Colour>
);

// Title

type DatePickerTitleColourState = (
	IFont<Colour>
);

// Weekday

type DatePickerWeekdayColourState = (
	IFont<Colour>
);
