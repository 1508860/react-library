import { Fragment, useCallback, useState } from "react";

import {
	DATE_MONTH_ALL,
	DateMonth,
	DateTimeDisplayLength,
	Subject,
	useMonthMapDisplayState,
	useResolveState,
	type Callback,
	type CallbackWithParameter
} from "@react-library/common";

import { DATE_PICKER_SELECTION_CHANGE_SUBJECT_CONTEXT } from "../../constants/date-picker-selection-change-subject-context.const";
import { DATE_PICKER_SET_SELECTION_STATE_CALLBACK_CONTEXT } from "../../constants/date-picker-set-selection-state-callback-context.const";
import { useDatePickerYearsContext } from "../../hooks/date-picker-years-context.hook";
import type { DatePickerSelectionChangeSubject } from "../../types/date-picker-selection-change-subject.type";
import type { DatePickerSelectionState } from "../../types/date-picker-selection-state.type";

import { DatePickerSelection } from "../selection";
import { DatePickerSelectionMenuMonthsResolver } from "../selection-menu-months-resolver";
import { DatePickerSelectionMenuYearsResolver } from "../selection-menu-years-resolver";

import { DATE_PICKER_SELECTION_CONTAINER_STYLE } from "./styles/date-picker-selection-container-style.const";
import { DATE_PICKER_SELECTION_CONTENT_STYLE } from "./styles/date-picker-selection-content-style.const";
import { DATE_PICKER_SELECTION_INNER_CONTAINER_STYLE } from "./styles/date-picker-selection-inner-container-style.const";
import type { DatePickerSelectionContainerProps } from "./types/date-picker-selection-container-props.type";
import { resolveDatePickerSelectionStateToIndex } from "../../functions/resolve-date-picker-select-state-index.function";

/**
 * Date picker Selection container
 */
export function DatePickerSelectionContainer(props: DatePickerSelectionContainerProps) {

	// Local contexts
	const years = useDatePickerYearsContext();

	// Selection state
	const [selectionState, setSelectionState] = useState<DatePickerSelectionState>(
		() => ({ month: DateMonth.January, year: years[0] ?? -1 })
	);

	// Selection indexes
	const resolveMonthItemsLastIndex = useCallback<Callback<number>>(
		() => (years.length * DATE_MONTH_ALL.length) - 1,
		[years.length]
	);
	const monthItemsLastIndex = useResolveState(resolveMonthItemsLastIndex);
	const resolveSelectionStateIndex = useCallback<Callback<number>>(
		() => resolveDatePickerSelectionStateToIndex(selectionState, years),
		[years, selectionState]
	);
	const selectionStateIndex = useResolveState(resolveSelectionStateIndex);

	// Is open
	const [isMonthOpen, setIsMonthOpen] = useState<boolean>(() => false);
	const toggleIsMonthOpen = useCallback(() => setIsMonthOpen((prev) => !prev), []);
	const setMonthClosed = useCallback<Callback<void>>(() => setIsMonthOpen(false), []);
	const [isYearOpen, setIsYearOpen] = useState<boolean>(() => false);
	const toggleIsYearOpen = useCallback(() => setIsYearOpen((prev) => !prev), []);
	const setYearClosed = useCallback<Callback<void>>(() => setIsYearOpen(false), []);

	// Display month
	const [displayMonth] = useMonthMapDisplayState(selectionState.month, DateTimeDisplayLength.Medium);

	// Selection change subject
	const [selectionChangeSubject] = useState<DatePickerSelectionChangeSubject>(() => new Subject<number>());

	const onIndexChange = useCallback<CallbackWithParameter<number, void>>(
		(newIndex) => selectionChangeSubject.notify(newIndex),
		[selectionChangeSubject]
	);

	return (
		<div style={DATE_PICKER_SELECTION_CONTAINER_STYLE}>
			<div
				key="inner-container"
				style={DATE_PICKER_SELECTION_INNER_CONTAINER_STYLE}
			>
				<DatePickerSelection
					incrementBy={1}
					index={selectionStateIndex}
					isDisabled={isYearOpen}
					isOpen={isMonthOpen}
					key="selection-month"
					label={displayMonth}
					lastIndex={monthItemsLastIndex}
					onClick={toggleIsMonthOpen}
					onIncrement={onIndexChange}
				/>
				<DatePickerSelection
					incrementBy={DATE_MONTH_ALL.length}
					index={selectionStateIndex}
					isDisabled={isMonthOpen}
					isOpen={isYearOpen}
					key="selection-year"
					label={selectionState.year}
					lastIndex={monthItemsLastIndex}
					onClick={toggleIsYearOpen}
					onIncrement={onIndexChange}
				/>
			</div>
			<div
				key="content-container"
				style={DATE_PICKER_SELECTION_CONTENT_STYLE}
			>
				<DATE_PICKER_SELECTION_CHANGE_SUBJECT_CONTEXT value={selectionChangeSubject}>
					<DATE_PICKER_SET_SELECTION_STATE_CALLBACK_CONTEXT value={setSelectionState}>
						{props.children}
						{
							isMonthOpen ?
								<DatePickerSelectionMenuMonthsResolver
									key="selection-menu-months"
									onClick={setMonthClosed}
									selectionState={selectionState}
								/> :
								<Fragment key="selection-menu-months" />
						}
						{
							isYearOpen ?
								<DatePickerSelectionMenuYearsResolver
									key="selection-menu-years"
									onClick={setYearClosed}
									selectionState={selectionState}
								/> :
								<Fragment key="selection-menu-years" />
						}
					</DATE_PICKER_SET_SELECTION_STATE_CALLBACK_CONTEXT>
				</DATE_PICKER_SELECTION_CHANGE_SUBJECT_CONTEXT>
			</div>
		</div>
	);
}
