import { useState } from "react";

import {
	DateMonth,
	DateWeekday,
	type DateMonthsRange,
	type DateWeekdaysRange
} from "@react-library/common";
import {
	DatePicker,
	type DatePickerDisabledDates,
	type DatePickerDisabledRanges,
	type DatePickerValue
} from "@react-library/themed-components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsDatePickerDemo() {

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
	const [value, setValue] = useState<DatePickerValue | undefined>(() => undefined);

	return (
		<DemoSection title="Date Picker">
			<DemoItem>
				<DatePicker
					dateFrom={dateFrom}
					dateTo={dateTo}
					disabledDates={disabledDates}
					disabledMonths={disabledMonths}
					disabledRanges={disabledRanges}
					disabledWeekdays={disabledWeekdays}
					onValueChange={setValue}
					value={value}
				/>
			</DemoItem>
		</DemoSection>
	);
}
