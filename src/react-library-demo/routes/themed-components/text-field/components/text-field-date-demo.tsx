import { useState } from "react";

import {
	DateMonth,
	type DateMonthsRange,
	type DateWeekdaysRange,
	DateWeekday,
	DateTimeDisplayLength
} from "@react-library/common";
import {
	TextFieldDate,
	TextFieldStyle,
	type DatePickerDisabledDates,
	type DatePickerDisabledRanges,
	type DatePickerValue
} from "@react-library/themed-components";

import {
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsTextFieldDateDemo() {

	const [disabledStates] = useState<Array<boolean>>(() => [false, true]);
	const [textFieldStyles] = useState<Array<TextFieldStyle>>(() => Object.values(TextFieldStyle));

	const [dateFrom] = useState<DatePickerValue>(() => ({ day: 1, month: DateMonth.June, year: 1990 }));
	const [dateTo] = useState<DatePickerValue>(() => ({ day: 30, month: DateMonth.June, year: 2030 }));
	const [disabledDates] = useState<DatePickerDisabledDates | undefined>(() => [
		{ day: 31, month: DateMonth.January, year: 1991 }
	]);
	const [disabledMonths] = useState<DateMonthsRange | undefined>(() => [DateMonth.February]);
	const [disabledRanges] = useState<DatePickerDisabledRanges | undefined>(() => [{
		dateFrom: { day: 1, month: DateMonth.December, year: 1990 },
		dateTo: { day: 1, month: DateMonth.January, year: 1991 }
	}]);
	const [disabledWeekdays] = useState<DateWeekdaysRange | undefined>(() => [DateWeekday.Saturday]);
	const [value, setValue] = useState<Date | undefined>(() => undefined);

	return (
		<DemoSection title={`Text Field - date`}>
			{textFieldStyles.map(textFieldStyle => (
				disabledStates.map(isDisabled => (
					<TextFieldDate
						dateFrom={dateFrom}
						dateTimeDisplayLength={DateTimeDisplayLength.Long}
						dateTo={dateTo}
						disabledDates={disabledDates}
						disabledMonths={disabledMonths}
						disabledRanges={disabledRanges}
						disabledWeekdays={disabledWeekdays}
						id={`date-${textFieldStyle}-${isDisabled}`}
						isDisabled={isDisabled}
						isRequired={true}
						key={`${textFieldStyle}-${isDisabled}`}
						label="Label"
						maxWidth={500}
						minWidth={300}
						modalText="Choose a date"
						name={`date-${textFieldStyle}-${isDisabled}`}
						onValueChange={setValue}
						style={textFieldStyle}
						supportingText="Supporting text"
						value={value}
					/>
				))
			))}
		</DemoSection>
	);
}
