import { useCheckboxEventsContext } from "../../hooks/checkbox-events-context.hook";

import { CHECKBOX_INPUT_STYLE } from "./styles/checkbox-input-style.const";
import type { CheckboxInputProps } from "./types/checkbox-input-props.type";

/**
 * Checkbox input
 */
export function CheckboxInput(props: CheckboxInputProps) {

	const checkboxEvents = useCheckboxEventsContext();

	return (
		<input
			disabled={props.isDisabled}
			id={props.name}
			name={props.name}
			onChange={checkboxEvents.onToggle}
			placeholder={props.label}
			style={CHECKBOX_INPUT_STYLE}
			type="checkbox"
			value={props.value ? `${props.value}` : undefined}
		/>
	);
}
