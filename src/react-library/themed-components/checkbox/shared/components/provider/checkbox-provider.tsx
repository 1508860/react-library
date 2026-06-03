import { useCallback, useState } from "react";

import {
	useResolveState,
	type Callback,
	type CallbackWithParameter
} from "@react-library/common";
import {
	HoverLayerColourProvider,
	HoverLayerShowProvider,
	resolveTransitionPulseInsetFromSize,
	TransitionPulseColourProvider,
	TransitionPulseInsetDataProvider,
	useFormValidationSubscriberOptional,
	type TransitionPulseInsetData
} from "@react-library/components";

import { CHECKBOX_COLOUR_STATE_CONTEXT } from "../../constants/checkbox-colour-state-context.const";
import { CHECKBOX_EVENTS_CONTEXT } from "../../constants/checkbox-events-context.const";
import { CHECKBOX_SELECTED_STATE_CONTEXT } from "../../constants/checkbox-selected-state-context.const";
import { CHECKBOX_SIZE_TARGET_CONTAINER } from "../../constants/checkbox-size.const";
import { CheckboxSelectedState } from "../../enums/checkbox-selected-state.type";
import { useCheckboxColourState } from "../../hooks/use-checkbox-colour-state.hook";
import { useCheckboxEventsState } from "../../hooks/use-checkbox-events-state.hook";
import { useCheckboxObserver } from "../../hooks/use-checkbox-observer.hook";
import { useCheckboxSubscriber } from "../../hooks/use-checkbox-subscriber.hook";

import type { CheckboxProviderProps } from "./types/checkbox-provider-props.type";

/**
 * Checkbox provider
 */
export function CheckboxProvider(props: CheckboxProviderProps) {

	// Is errored
	const resolveIsErrored = useCallback<Callback<boolean>>(
		() => (!!props.isRequired && !props.value),
		[props.isRequired, props.value]
	);
	const isErrored = useResolveState(resolveIsErrored);

	// Input event states
	const [isHovered, setIsHovered] = useState<boolean>(() => false);

	// Transition pulse inset data
	const [transitionPulseInsetData, setTransitionPulseInsetData] = useState<TransitionPulseInsetData | undefined>(() => undefined);

	// Handle toggling current value
	const handleOnToggle = useCallback<Callback<void>>(
		() => {
			setTransitionPulseInsetData(resolveTransitionPulseInsetFromSize(CHECKBOX_SIZE_TARGET_CONTAINER));
			props.onValueChange(!props.value);
		},
		[props]
	);

	// Checkbox events
	const checkboxEvents = useCheckboxEventsState(props.isDisabled, handleOnToggle, setIsHovered);

	// Selected state
	const resolveSelectedState = useCallback<Callback<CheckboxSelectedState>>(
		() => props.value ? CheckboxSelectedState.Selected : CheckboxSelectedState.Unselected,
		[props.value]
	);
	const selectedState = useResolveState(resolveSelectedState);

	// Handle observer change
	const handleObserverUpdate = useCallback<CallbackWithParameter<CheckboxSelectedState, void>>(
		// Set to selected if partially selected
		(value) => {
			props.onValueChange(value === CheckboxSelectedState.Selected);
		},
		[props]
	);

	// Checkbox subscriber - for checkbox group to maintain child states
	useCheckboxSubscriber(selectedState);

	// Checkbox observer - for updating checkbox state due to checkbox group change
	useCheckboxObserver(handleObserverUpdate);

	// Colour state
	const colourState = useCheckboxColourState(!!props.isDisabled, isErrored, selectedState);

	// Handle optional form validation
	useFormValidationSubscriberOptional(!isErrored);

	return (
		<HoverLayerColourProvider colour={colourState.hoverColour}>
			<HoverLayerShowProvider show={isHovered}>
				<TransitionPulseColourProvider colour={colourState.pulseColour}>
					<TransitionPulseInsetDataProvider insetData={transitionPulseInsetData}>
						<CHECKBOX_EVENTS_CONTEXT value={checkboxEvents}>
							<CHECKBOX_SELECTED_STATE_CONTEXT value={selectedState}>
								<CHECKBOX_COLOUR_STATE_CONTEXT value={colourState}>
									{props.children}
								</CHECKBOX_COLOUR_STATE_CONTEXT>
							</CHECKBOX_SELECTED_STATE_CONTEXT>
						</CHECKBOX_EVENTS_CONTEXT>
					</TransitionPulseInsetDataProvider>
				</TransitionPulseColourProvider>
			</HoverLayerShowProvider>
		</HoverLayerColourProvider>
	);
}
