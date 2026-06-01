import {
	useMonthMapDisplayState,
	DateTimeDisplayLength
} from "@react-library/common";

import { DatePickerSelectionMenuItem } from "../../../selection-menu-item";

import type { DatePickerSelectionMenuMonthsResolverItemProps } from "./types/date-picker-selection-menu-months-resolver-item-props.type";

/**
 * Date picker selection menu months resolver item
 */
export function DatePickerSelectionMenuMonthsResolverItem(props: DatePickerSelectionMenuMonthsResolverItemProps) {

	// Display month
	const [displayMonth] = useMonthMapDisplayState(props.month, DateTimeDisplayLength.Long);

	return (
		<DatePickerSelectionMenuItem
			isActive={props.isActive}
			label={displayMonth}
			onClick={props.onClick}
		/>
	);
}
