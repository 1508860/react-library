import { useCallback, useEffect, useRef, useState } from "react";

import {
	Subject,
	SubscriberState,
	type Callback,
	type CallbackWithParameter,
} from "@react-library/common";
import type { TransitionPulseInsetData } from "@react-library/components";

import { CHECKBOX_CLICKED_INSET_CONTEXT } from "../../constants/checkbox-clicked-inset-context.const";
import { CHECKBOX_EVENTS_CONTEXT } from "../../constants/checkbox-events-context.const";
import { CHECKBOX_GROUP_SELECTED_COUNTS_DEFAULT } from "../../constants/checkbox-group-counts.const";
import { CHECKBOX_IS_HOVERED_CONTEXT } from "../../constants/checkbox-is-hovered-context.const";
import { CHECKBOX_SELECTED_STATE_CONTEXT } from "../../constants/checkbox-selected-state-context.const";
import { CheckboxSelectedState } from "../../enums/checkbox-selected-state.type";
import { CHECKBOX_SUBJECT_CONTEXT } from "../../constants/checkbox-subject-context.const";
import { CHECKBOX_SUBSCRIBER_STATE_CONTEXT } from "../../constants/checkbox-subscriber-state-context.const";
import { resolveCheckboxClickedInset } from "../../functions/resolve-checkbox-clicked-inset.function";
import { useCheckboxEventsState } from "../../hooks/use-checkbox-events-state.hook";
import { useCheckboxObserver } from "../../hooks/use-checkbox-observer.hook";
import { useCheckboxSubscriber } from "../../hooks/use-checkbox-subscriber.hook";
import type { CheckboxGroupSelectedCounts } from "../../types/checkbox-group-selected-counts.type";
import type { CheckboxSubject } from "../../types/checkbox-subject.type";
import type { CheckboxSubscriberState } from "../../types/checkbox-subscriber-state.type";

import type { CheckboxGroupContainerProviderProps } from "./types/checkbox-group-container-provider-props.type";

/**
 * Checkbox group container provider
 */
export function CheckboxGroupContainerProvider(props: CheckboxGroupContainerProviderProps) {

	// Input event states
	const [isHovered, setIsHovered] = useState<boolean>(() => false);

	// Clicked inset
	const [clickedInset, setClickedInset] = useState<TransitionPulseInsetData | null>(() => null);

	// Checkbox subject
	const [checkboxSubject] = useState<CheckboxSubject>(() => new Subject<CheckboxSelectedState>());

	// Selected state
	const [selectedState, setSelectedState] = useState<CheckboxSelectedState>(() => CheckboxSelectedState.Unselected);
	const selectedStateRef = useRef<CheckboxSelectedState>(selectedState);
	const handleSetSelectedState = useCallback<CallbackWithParameter<CheckboxSelectedState, void>>(
		(selectedState) => {
			setSelectedState(selectedState);
			selectedStateRef.current = selectedState;
		},
		[]
	);

	// Checkbox states
	const [checkboxesSelected, setCheckboxesSelected] = useState<CheckboxGroupSelectedCounts>(() => CHECKBOX_GROUP_SELECTED_COUNTS_DEFAULT);
	useEffect(
		() => {
			if (checkboxesSelected.indeterminate > 0) return handleSetSelectedState(CheckboxSelectedState.Indeterminate);
			if (checkboxesSelected.selected === 0) return handleSetSelectedState(CheckboxSelectedState.Unselected);
			if (checkboxesSelected.selected < checkboxesSelected.total) return handleSetSelectedState(CheckboxSelectedState.Indeterminate);
			handleSetSelectedState(CheckboxSelectedState.Selected);
		},
		[handleSetSelectedState, checkboxesSelected.indeterminate, checkboxesSelected.selected, checkboxesSelected.total]
	);

	// Checkbox subscriber state
	const [checkboxSubscriberState] = useState<CheckboxSubscriberState>(() => new SubscriberState<CheckboxSelectedState>({
		onSubscribeChange: (values) => setCheckboxesSelected({
			indeterminate: values.filter(x => x.state === CheckboxSelectedState.Indeterminate).length,
			selected: values.filter(x => x.state === CheckboxSelectedState.Selected).length,
			total: values.length
		})
	}));

	// Notify selected state change
	const handleOnToggle = useCallback<Callback<void>>(
		// Set to selected if partially selected
		() => {
			setClickedInset(resolveCheckboxClickedInset());
			const newState = (selectedStateRef.current === CheckboxSelectedState.Selected) ? CheckboxSelectedState.Unselected : CheckboxSelectedState.Selected;
			handleSetSelectedState(newState);
			checkboxSubject.notify(newState);
		},
		[checkboxSubject, handleSetSelectedState]
	);

	// Handle observer change
	const handleObserverUpdate = useCallback<CallbackWithParameter<CheckboxSelectedState, void>>(
		// Set to selected if partially selected
		(value) => {
			handleSetSelectedState(value);
			checkboxSubject.notify(value);
		},
		[checkboxSubject, handleSetSelectedState]
	);

	// Checkbox events
	const checkboxEvents = useCheckboxEventsState(handleOnToggle, setIsHovered);

	// Checkbox subscriber - for checkbox group to maintain child states
	useCheckboxSubscriber(selectedState);

	// Checkbox observer - for updating checkbox state due to checkbox group change
	useCheckboxObserver(handleObserverUpdate);

	return (
		<CHECKBOX_SUBSCRIBER_STATE_CONTEXT value={checkboxSubscriberState}>
			<CHECKBOX_SUBJECT_CONTEXT value={checkboxSubject}>
				<CHECKBOX_IS_HOVERED_CONTEXT value={isHovered}>
					<CHECKBOX_CLICKED_INSET_CONTEXT value={clickedInset}>
						<CHECKBOX_EVENTS_CONTEXT value={checkboxEvents}>
							<CHECKBOX_SELECTED_STATE_CONTEXT value={selectedState}>
								{props.children}
							</CHECKBOX_SELECTED_STATE_CONTEXT>
						</CHECKBOX_EVENTS_CONTEXT>
					</CHECKBOX_CLICKED_INSET_CONTEXT>
				</CHECKBOX_IS_HOVERED_CONTEXT>
			</CHECKBOX_SUBJECT_CONTEXT>
		</CHECKBOX_SUBSCRIBER_STATE_CONTEXT>
	);
}
