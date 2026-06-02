import type {
	IOnValueChange,
	IValue,
	DateTimeDisplayLength,
	IDateTimeDisplayLength,
	IModalText
} from "@react-library/common";

import type {
	DatePickerPropsBounds,
	DatePickerPropsDisabledDates,
	DatePickerPropsDisabledMonths,
	DatePickerPropsDisabledRanges,
	DatePickerPropsDisabledWeekdays
} from "../../../date-picker";

import type { TextFieldPropsId } from "../../shared/types/text-field-props-id.type";
import type { TextFieldPropsIsDisabled } from "../../shared/types/text-field-props-is-disabled.type";
import type { TextFieldPropsIsRequired } from "../../shared/types/text-field-props-is-required.type";
import type { TextFieldPropsLabel } from "../../shared/types/text-field-props-label.type";
import type { TextFieldPropsName } from "../../shared/types/text-field-props-name.type";
import type { TextFieldPropsSize } from "../../shared/types/text-field-props-size.type";
import type { TextFieldPropsStyle } from "../../shared/types/text-field-props-style.type";
import type { TextFieldPropsSupportingText } from "../../shared/types/text-field-props-supporting-text.type";

import type { TextFieldDateOnValueChange } from "./text-field-date-on-value-change.type";
import type { TextFieldDateValue } from "./text-field-date-value.type";

/**
 * Props for text field date component
 */
export type TextFieldDateProps = (
	DatePickerPropsBounds &
	DatePickerPropsDisabledDates &
	DatePickerPropsDisabledMonths &
	DatePickerPropsDisabledRanges &
	DatePickerPropsDisabledWeekdays &
	IDateTimeDisplayLength<DateTimeDisplayLength> &
	IModalText<string> &
	IOnValueChange<TextFieldDateOnValueChange> &
	TextFieldPropsId &
	TextFieldPropsIsDisabled &
	TextFieldPropsIsRequired &
	TextFieldPropsLabel &
	TextFieldPropsName &
	TextFieldPropsSize &
	TextFieldPropsStyle &
	TextFieldPropsSupportingText &
	IValue<TextFieldDateValue>
);
