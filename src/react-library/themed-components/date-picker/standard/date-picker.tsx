import { DatePickerContainer } from "../shared/components/container";
import { DatePickerMonthItemsResolver } from "../shared/components/month-items-resolver";
import { DatePickerProvider } from "../shared/components/provider";

import type { DatePickerProps } from "./types/date-picker-props.type";

/**
 * Datepicker component
 */
export function DatePicker(props: DatePickerProps) {
	return (
		<DatePickerProvider {...props}>
			<DatePickerContainer>
				<DatePickerMonthItemsResolver />
			</DatePickerContainer>
		</DatePickerProvider>
	);
}
