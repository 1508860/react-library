import { useDatePickerColourStateContext } from "../../hooks/date-picker-colour-state-context.hook";

import { datePickerContainerStyle } from "./styles/date-picker-container-style.function";
import type { DatePickerContainerProps } from "./types/date-picker-container-props.type";

/**
 * Date picker container
 */
export function DatePickerContainer(props: DatePickerContainerProps) {

	const colourState = useDatePickerColourStateContext();

	return (
		<div style={datePickerContainerStyle(colourState)}>
			{props.children}
		</div>
	);
}
