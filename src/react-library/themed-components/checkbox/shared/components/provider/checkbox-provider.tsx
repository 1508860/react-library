import { useCallback, useState } from "react";

import {
	useColourSchemeContext,
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
import { isCheckboxColourStateEqual } from "../../functions/is-checkbox-colour-state-equal.function";
import { resolveCheckboxClickedInset } from "../../functions/resolve-checkbox-clicked-inset.function";
import { resolveCheckboxColourState } from "../../functions/resolve-checkbox-colour-state.function";
import type { CheckboxEvents } from "../../types/checkbox-events.type";
import type { CheckboxOnValueChange } from "../../types/checkbox-on-value-change.type";

import type { CheckboxProviderProps } from "./types/checkbox-provider-props.type";

/**
 * Checkbox provider
 */
export function CheckboxProvider(props: CheckboxProviderProps) {

	// Contexts
	const colourScheme = useColourSchemeContext();

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
	const resolveCheckboxEvents = useCallback<Callback<CheckboxEvents>>(
		() => ({
			onPointerEnter: () => setIsHovered(true),
			onPointerLeave: () => setIsHovered(false),
			onToggle: handleOnToggle
		}),
		[handleOnToggle]
	);
	const checkboxEvents = useResolveState(resolveCheckboxEvents);

	// Selected state
	const resolveSelectedState = useCallback<Callback<CheckboxSelectedState>>(
		() => props.value ? CheckboxSelectedState.Selected : CheckboxSelectedState.UnSelected,
		[props.value]
	);
	const selectedState = useResolveState(resolveSelectedState);

	// Colour state
	const resolveColourState = useCallback(
		() => resolveCheckboxColourState(!!props.isDisabled, colourScheme, (!!props.isRequired && !props.value), selectedState),
		[props.isDisabled, props.isRequired, props.value, colourScheme, selectedState]
	);
	const isColourStateEqual = useCallback(isCheckboxColourStateEqual, []);
	const colourState = useResolveState(resolveColourState, isColourStateEqual);

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
