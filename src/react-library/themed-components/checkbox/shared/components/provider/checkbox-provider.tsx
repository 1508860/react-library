import { useCallback, useState } from "react";

import {
	useResolveState,
	type Callback
} from "@react-library/common";
import type { TransitionPulseInsetData } from "@react-library/components";

import { CHECKBOX_CLICKED_INSET_CONTEXT } from "../../constants/checkbox-clicked-inset-context.const";
import { CHECKBOX_COLOUR_STATE_CONTEXT } from "../../constants/checkbox-colour-state-context.const";
import { CHECKBOX_EVENTS_CONTEXT } from "../../constants/checkbox-events-context.const";
import { CHECKBOX_IS_HOVERED_CONTEXT } from "../../constants/checkbox-is-hovered-context.const";
import { CHECKBOX_SELECTED_STATE_CONTEXT } from "../../constants/checkbox-selected-state-context.const";
import { CheckboxSelectedState } from "../../enums/checkbox-selected-state.type";
import { resolveCheckboxClickedInset } from "../../functions/resolve-checkbox-clicked-inset.function";
import { useCheckboxColourState } from "../../hooks/use-checkbox-colour-state.hook";
import { useCheckboxEventsState } from "../../hooks/use-checkbox-events-state.hook";
import type { CheckboxOnValueChange } from "../../types/checkbox-on-value-change.type";

import type { CheckboxProviderProps } from "./types/checkbox-provider-props.type";

/**
 * Checkbox provider
 */
export function CheckboxProvider(props: CheckboxProviderProps) {

	// Input event states
	const [isHovered, setIsHovered] = useState<boolean>(() => false);

	// Clicked inset
	const [clickedInset, setClickedInset] = useState<TransitionPulseInsetData | null>(() => null);

	// Handle value change
	const handleOnValueChange = useCallback<CheckboxOnValueChange>(
		(value) => {
			if (props.isDisabled) return;
			setClickedInset(resolveCheckboxClickedInset());
			props.onValueChange(value);
		},
		[props]
	);

	const handleOnToggle = useCallback<Callback<void>>(
		() => handleOnValueChange(!props.value),
		[props.value, handleOnValueChange]
	);

	// Checkbox events
	const checkboxEvents = useCheckboxEventsState(handleOnToggle, setIsHovered);

	// Selected state
	const resolveSelectedState = useCallback<Callback<CheckboxSelectedState>>(
		() => props.value ? CheckboxSelectedState.Selected : CheckboxSelectedState.UnSelected,
		[props.value]
	);
	const selectedState = useResolveState(resolveSelectedState);

	// Colour state
	const colourState = useCheckboxColourState(!!props.isDisabled, (!!props.isRequired && !props.value), selectedState);

	return (
		<CHECKBOX_IS_HOVERED_CONTEXT value={isHovered}>
			<CHECKBOX_CLICKED_INSET_CONTEXT value={clickedInset}>
				<CHECKBOX_EVENTS_CONTEXT value={checkboxEvents}>
					<CHECKBOX_SELECTED_STATE_CONTEXT value={selectedState}>
						<CHECKBOX_COLOUR_STATE_CONTEXT value={colourState}>
							{props.children}
						</CHECKBOX_COLOUR_STATE_CONTEXT>
					</CHECKBOX_SELECTED_STATE_CONTEXT>
				</CHECKBOX_EVENTS_CONTEXT>
			</CHECKBOX_CLICKED_INSET_CONTEXT>
		</CHECKBOX_IS_HOVERED_CONTEXT>
	);
}
