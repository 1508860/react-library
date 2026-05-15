import { useCallback } from "react";

import { type Callback, useResolveState } from "@react-library/common";

import { TooltipTextOverflow } from "../../../../tooltips";

import { useTextFieldColourStateContext } from "../../../shared/hooks/text-field-colour-state-context.hook";

import { TextFieldSelectInteraction } from "../../enums/text-field-select-interaction.type";
import type { TextFieldSelectItemId } from "../../types/text-field-select-item-id.type";
import type { TextFieldSelectProps } from "../../types/text-field-select-props.type";

import { textFieldSelectValueStyle } from "./styles/text-field-select-value-style.function";
import { TEXT_FIELD_SELECT_INPUT_STYLE } from "./styles/text-field-select-input-style.const";

/**
 * Text field select input component
 */
export function TextFieldSelectInput<TId extends TextFieldSelectItemId>(props: TextFieldSelectProps<TId>) {

	// Contexts
	const colourState = useTextFieldColourStateContext();

	// Format value
	const resolveValue = useCallback<Callback<string>>(
		() => {
			if (props.interaction === TextFieldSelectInteraction.Multi) {
				return props.items
					.filter(x => props.value.includes(x.id))
					.reduce((a, b, index) => `${a}${index === 0 ? "" : ", "}${b.text}`, "");
			}
			return props.items.find(x => x.id === props.value)?.text ?? "";
		},
		[props.interaction, props.items, props.value]
	);
	const value = useResolveState(resolveValue);

	return (
		<>
			<div
				key="value"
				style={textFieldSelectValueStyle(props.extraTextPosition, props.style, colourState)}
			>
				<TooltipTextOverflow
					content={value}
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
				style={TEXT_FIELD_SELECT_INPUT_STYLE}
				type="text"
				value={value}
			/>
		</>
	);
}
