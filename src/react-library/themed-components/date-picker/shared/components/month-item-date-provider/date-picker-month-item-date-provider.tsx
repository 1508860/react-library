import { HoverLayerColourProvider, TransitionPulseColourProvider } from "@react-library/components";

import { DATE_PICKER_DATE_COLOUR_STATE_CONTEXT } from "../../constants/date-picker-date-colour-state-context.const";
import { DATE_PICKER_DATE_IS_DISABLED_CONTEXT } from "../../constants/date-picker-date-is-disabled-context.const";

import { useDatePickerMonthItemDateProviderColourState } from "./hooks/date-picker-month-item-date-provider-colour-state.hook";
import { useDatePickerMonthItemDateProviderIsDisabledState } from "./hooks/date-picker-month-item-date-provider-is-disabled-state.hook";
import type { DatePickerMonthItemDateProviderProps } from "./types/date-picker-month-item-date-provider-props.type";

/**
 * Date picker month item date provider
 */
export function DatePickerMonthItemDateProvider(props: DatePickerMonthItemDateProviderProps) {

	// Is disabled
	const isDisabled = useDatePickerMonthItemDateProviderIsDisabledState(props, props.weekday);

	// Colour state
	const colourState = useDatePickerMonthItemDateProviderColourState(props, isDisabled);

	return (
		<HoverLayerColourProvider colour={colourState.hover}>
			<TransitionPulseColourProvider colour={colourState.pulse}>
				<DATE_PICKER_DATE_COLOUR_STATE_CONTEXT value={colourState}>
					<DATE_PICKER_DATE_IS_DISABLED_CONTEXT value={isDisabled}>
						{props.children}
					</DATE_PICKER_DATE_IS_DISABLED_CONTEXT>
				</DATE_PICKER_DATE_COLOUR_STATE_CONTEXT>
			</TransitionPulseColourProvider>
		</HoverLayerColourProvider>
	);
}
