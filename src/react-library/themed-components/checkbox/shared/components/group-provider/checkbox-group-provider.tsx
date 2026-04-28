import { useCallback, useEffect, useRef, useState } from "react";

import {
	Subject,
	SubscriberState,
	type Callback,
	type CallbackWithParameter,
	type IRatio
} from "@react-library/common";
import type { TransitionPulseInsetData } from "@react-library/components";

import { CHECKBOX_CLICKED_INSET_CONTEXT } from "../../constants/checkbox-clicked-inset-context.const";
import { CHECKBOX_COLOUR_STATE_CONTEXT } from "../../constants/checkbox-colour-state-context.const";
import { CHECKBOX_EVENTS_CONTEXT } from "../../constants/checkbox-events-context.const";
import { CHECKBOX_IS_HOVERED_CONTEXT } from "../../constants/checkbox-is-hovered-context.const";
import { CHECKBOX_SELECTED_STATE_CONTEXT } from "../../constants/checkbox-selected-state-context.const";
import { CheckboxSelectedState } from "../../enums/checkbox-selected-state.type";
import { CHECKBOX_SUBJECT_CONTEXT } from "../../constants/checkbox-subject-context.const";
import { CHECKBOX_SUBSCRIBER_STATE_CONTEXT } from "../../constants/checkbox-subscriber-state-context.const";
import { resolveCheckboxClickedInset } from "../../functions/resolve-checkbox-clicked-inset.function";
import { useCheckboxColourState } from "../../hooks/use-checkbox-colour-state.hook";
import { useCheckboxEventsState } from "../../hooks/use-checkbox-events-state.hook";
import type { CheckboxSubject } from "../../types/checkbox-subject.type";
import type { CheckboxSubscriberState } from "../../types/checkbox-subscriber-state.type";

import type { CheckboxGroupProviderProps } from "./types/checkbox-group-provider-props.type";

/**
 * Checkbox group provider
 */
export function CheckboxGroupProvider(props: CheckboxGroupProviderProps) {

	// Input event states
	const [isHovered, setIsHovered] = useState<boolean>(() => false);

	// Clicked inset
	const [clickedInset, setClickedInset] = useState<TransitionPulseInsetData | null>(() => null);

	// Checkbox subject
	const [checkboxSubject] = useState<CheckboxSubject>(() => new Subject<boolean>());

	// Subscriber state

	// Selected state
	const [selectedState, setSelectedState] = useState<CheckboxSelectedState>(() => CheckboxSelectedState.UnSelected);
	const selectedStateRef = useRef<CheckboxSelectedState>(selectedState);
	const handleSetSelectedState = useCallback<CallbackWithParameter<CheckboxSelectedState, void>>(
		(selectedState) => {
			setSelectedState(selectedState);
			selectedStateRef.current = selectedState;
		},
		[]
	);

	// Checkbox states
	const [checkboxesSelected, setCheckboxesSelected] = useState<IRatio>(() => ({ denominator: 0, numerator: 0 }));
	useEffect(
		() => {
			if (checkboxesSelected.numerator === 0) return handleSetSelectedState(CheckboxSelectedState.UnSelected);
			if (checkboxesSelected.numerator < checkboxesSelected.denominator) return handleSetSelectedState(CheckboxSelectedState.Indeterminate);
			handleSetSelectedState(CheckboxSelectedState.Selected);
		},
		[checkboxesSelected.denominator, checkboxesSelected.numerator, handleSetSelectedState]
	);

	// Checkbox subscriber state
	const [checkboxSubscriberState] = useState<CheckboxSubscriberState>(() => new SubscriberState<CheckboxSelectedState>({
		onSubscribeChange: (values) => setCheckboxesSelected({
			denominator: values.length,
			numerator: values.filter(x => x.state === CheckboxSelectedState.Selected).length
		})
	}));

	// Notify selected state change
	const handleOnToggle = useCallback<Callback<void>>(
		// Set to selected if partially selected
		() => {
			if (props.isDisabled) return;
			setClickedInset(resolveCheckboxClickedInset());
			const newState = (selectedStateRef.current === CheckboxSelectedState.Selected) ? CheckboxSelectedState.UnSelected : CheckboxSelectedState.Selected;
			handleSetSelectedState(newState)
			checkboxSubject.notify(newState === CheckboxSelectedState.Selected);
		},
		[props.isDisabled, checkboxSubject, handleSetSelectedState]
	);

	// Checkbox events
	const checkboxEvents = useCheckboxEventsState(handleOnToggle, setIsHovered);

	// Colour state
	const colourState = useCheckboxColourState(props.isDisabled, false, selectedState);

	return (
		<CHECKBOX_SUBSCRIBER_STATE_CONTEXT value={checkboxSubscriberState}>
			<CHECKBOX_SUBJECT_CONTEXT value={checkboxSubject}>
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
			</CHECKBOX_SUBJECT_CONTEXT>
		</CHECKBOX_SUBSCRIBER_STATE_CONTEXT>
	);
}
