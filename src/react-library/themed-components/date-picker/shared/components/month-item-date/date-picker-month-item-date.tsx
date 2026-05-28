import { useCallback, useState } from "react";

import {
	useFontContext,
	type Callback,
	type CallbackWithParameter
} from "@react-library/common";
import {
	HoverLayerShowProvider,
	resolveTransitionPulseInsetFromEvent,
	TransitionPulseInsetDataProvider,
	type TransitionPulseInsetData
} from "@react-library/components";

import { useDatePickerDateColourStateContext } from "../../hooks/date-picker-date-colour-state-context.hook";
import { useDatePickerDateIsDisabledContext } from "../../hooks/date-picker-date-is-disabled-context.hook";
import { useDatePickerOnValueChangeContext } from "../../hooks/date-picker-on-value-change-context.hook";

import { datePickerMonthItemDateStyle } from "./styles/date-picker-month-item-date-style.function";
import type { DatePickerMonthItemDateProps } from "./types/date-picker-month-item-date-props.type";

/**
 * Date picker month item date
 */
export function DatePickerMonthItemDate(props: DatePickerMonthItemDateProps) {

	// Contexts
	const font = useFontContext();

	// Local contexts
	const colourState = useDatePickerDateColourStateContext();
	const isDisabled = useDatePickerDateIsDisabledContext();
	const onValueChange = useDatePickerOnValueChangeContext();

	// Hover state
	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const onPointerEnter = useCallback<Callback<void>>(
		() => {
			if (isDisabled) return;
			setIsHovered(true);
		},
		[isDisabled]
	);
	const onPointerLeave = useCallback<Callback<void>>(() => setIsHovered(false), []);

	// Transition pulse inset data
	const [transitionPulseInsetData, setTransitionPulseInsetData] = useState<TransitionPulseInsetData | undefined>(() => undefined);

	// Handle click event
	const onClick = useCallback<CallbackWithParameter<React.MouseEvent<Element>, void>>(
		(event) => {
			if (isDisabled) return;
			setTransitionPulseInsetData(resolveTransitionPulseInsetFromEvent(event));
			onValueChange({
				day: props.day,
				month: props.month,
				year: props.year
			});
		},
		[props.day, props.month, props.year, onValueChange, isDisabled]
	);

	return (
		<div
			onClick={onClick}
			onPointerCancel={onPointerLeave}
			onPointerEnter={onPointerEnter}
			onPointerLeave={onPointerLeave}
			style={datePickerMonthItemDateStyle(font, colourState)}
		>
			{props.day}
			<HoverLayerShowProvider show={isHovered}>
				<TransitionPulseInsetDataProvider insetData={transitionPulseInsetData}>
					{props.children}
				</TransitionPulseInsetDataProvider>
			</HoverLayerShowProvider>
		</div>
	);
}
