import { useCallback } from "react";

import {
	type Callback,
	useResolveState,
	toInputUTCDate,
	useDateDisplayState,
	DateDisplayStyle
} from "@react-library/common";

import { TooltipTextOverflow } from "../../../../tooltips";

import { useTextFieldColourStateContext } from "../../../shared/hooks/text-field-colour-state-context.hook";

import type { TextFieldDateProps } from "../../types/text-field-date-props.type";

import { TEXT_FIELD_DATE_INPUT_STYLE } from "./styles/text-field-date-input-style.const";
import { textFieldDateValueStyle } from "./styles/text-field-date-value-style.function";

/**
 * Text field date input component
 */
export function TextFieldDateInput(props: TextFieldDateProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();

	// Input value
	const resolveValue = useCallback<Callback<string>>(() => props.value ? toInputUTCDate(props.value) : "", [props.value]);
	const value = useResolveState(resolveValue);

	// Display value
	const [displayValue] = useDateDisplayState(props.value, DateDisplayStyle.Day, props.dateTimeDisplayLength);

	return (
		<>
			<div
				key="value"
				style={textFieldDateValueStyle(props.style, colourState)}
			>
				<TooltipTextOverflow
					content={displayValue}
					key="display-value"
					width="100%"
				/>
			</div>
			<input
				disabled={true}
				id={props.id}
				key="input"
				name={props.name}
				placeholder={props.label}
				style={TEXT_FIELD_DATE_INPUT_STYLE}
				type="text"
				value={value}
			/>
		</>
	);
}
