import { DatePickerContainer } from "../shared/components/container";
import { DatePickerMonthItemScrollEvents } from "../shared/components/month-item-scroll-events";
import { DatePickerMonthItemsResolver } from "../shared/components/month-items-resolver";
import { DatePickerProvider } from "../shared/components/provider";
import { DatePickerSelectionContainer } from "../shared/components/selection-container";

import type { DatePickerProps } from "./types/date-picker-props.type";

/**
 * Datepicker component
 */
export function DatePicker(props: DatePickerProps) {
	return (
		<DatePickerProvider {...props}>
			<DatePickerContainer>
				<DatePickerSelectionContainer>
					<DatePickerMonthItemsResolver>
						<DatePickerMonthItemScrollEvents />
					</DatePickerMonthItemsResolver>
				</DatePickerSelectionContainer>
			</DatePickerContainer>
		</DatePickerProvider>
	);
}
