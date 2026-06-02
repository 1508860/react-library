import { Fragment, useCallback, useEffect, useRef, useState } from "react";

import {
	isDateEqual,
	toDateMonth,
	useResolveState,
	type Callback
} from "@react-library/common";
import { MaterialIconName } from "@react-library/material-icons";

import { DatePicker, type DatePickerValue } from "../../../../date-picker";
import {
	ModalBasic,
	ModalBasicActionDismissText,
	type ModalBasicActionConfirm,
	type ModalBasicActionDismiss
} from "../../../../modals";
import type { ScrollBasicSizeVertical } from "../../../../shared";

import { useTextFieldOnClickContext } from "../../../shared/hooks/text-field-on-click-context.hook";

import { useTextFieldDateModalIsOpenContext } from "../../hooks/text-field-date-modal-is-open-context.hook";
import type { TextFieldDateProps } from "../../types/text-field-date-props.type";
import type { TextFieldDateValue } from "../../types/text-field-date-value.type";

/**
 * Text field date modal component
 */
export function TextFieldDateModal(props: TextFieldDateProps) {

	// Local contexts
	const modalIsOpen = useTextFieldDateModalIsOpenContext();

	if (!modalIsOpen) return (
		<Fragment key="no-modal" />
	);

	return (
		<TextFieldDateModalChild {...props} key="modal" />
	);
}


/**
 * Text field date modal child component
 */
function TextFieldDateModalChild(props: TextFieldDateProps) {

	// Local contexts
	const onClick = useTextFieldOnClickContext();

	// Modal children size
	const [modalChildrenSize] = useState<ScrollBasicSizeVertical>(() => ({}));

	// Value
	const valueRef = useRef<TextFieldDateValue>(props.value);
	const [datePickerValue, setDatePickerValue] = useState<DatePickerValue | undefined>(() => undefined);

	// Update date picker if value has been updated
	useEffect(
		() => {
			if (
				(valueRef.current === undefined && props.value === undefined) ||
				(valueRef.current !== undefined && props.value !== undefined && isDateEqual(props.value, valueRef.current))
			) return;

			valueRef.current = props.value;

			if (props.value === undefined) {
				setDatePickerValue(undefined);
				return;
			}

			setDatePickerValue({
				day: props.value.getUTCDate(),
				month: toDateMonth(props.value.getUTCMonth()),
				year: props.value.getUTCFullYear()
			});
		},
		[props.value]
	);

	// Action confirm
	const resolveActionConfirm = useCallback<Callback<ModalBasicActionConfirm>>(
		() => ({
			action: () => {
				if (datePickerValue === undefined) props.onValueChange(undefined);
				else props.onValueChange(new Date(Date.UTC(
					datePickerValue.year,
					datePickerValue.month,
					datePickerValue.day
				)));
				onClick();
			},
			text: "OK"
		}),
		[props, onClick, datePickerValue]
	);
	const actionConfirm = useResolveState(resolveActionConfirm);

	// Action dismiss
	const resolveActionDismiss = useCallback<Callback<ModalBasicActionDismiss>>(
		() => ({
			action: onClick,
			text: ModalBasicActionDismissText.Cancel
		}),
		[onClick]
	);
	const actionDismiss = useResolveState(resolveActionDismiss);

	return (
		<ModalBasic
			actionConfirm={actionConfirm}
			actionDismiss={actionDismiss}
			childrenSize={modalChildrenSize}
			iconName={MaterialIconName.CalendarToday}
			isFullWidth={true}
			text={props.modalText}
			title={props.label}
		>
			<DatePicker
				dateFrom={props.dateFrom}
				dateTo={props.dateTo}
				disabledDates={props.disabledDates}
				disabledMonths={props.disabledMonths}
				disabledRanges={props.disabledRanges}
				disabledWeekdays={props.disabledWeekdays}
				onValueChange={setDatePickerValue}
				value={datePickerValue}
			/>
		</ModalBasic>
	);
}
