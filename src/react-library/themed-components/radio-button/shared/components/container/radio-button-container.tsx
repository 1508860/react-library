import { useCallback, useState } from "react";

import type { Callback } from "@react-library/common";
import {
	resolveTransitionPulseInsetFromSize,
	type TransitionPulseInsetData
} from "@react-library/components";

import { RADIO_BUTTON_CLICKED_INSET_CONTEXT } from "../../constants/radio-button-clicked-inset-context.const";
import { RADIO_BUTTON_COLOUR_STATE_CONTEXT } from "../../constants/radio-button-colour-state-context.const";
import { RADIO_BUTTON_EVENTS_CONTEXT } from "../../constants/radio-button-events-context.const";
import { RADIO_BUTTON_IS_HOVERED_CONTEXT } from "../../constants/radio-button-is-hovered-context.const";
import { RADIO_BUTTON_SIZE_TARGET_CONTAINER } from "../../constants/radio-button-size.const";
import { useRadioButtonColourState } from "../../hooks/use-radio-button-colour-state.hook";
import { useRadioButtonIsErroredContext } from "../../hooks/radio-button-is-errored-context.hook";
import { useRadioButtonOnValueChangeContext } from "../../hooks/radio-button-on-value-change-context.hook";
import { useRadioButtonEventsState } from "../../hooks/use-radio-button-events-state.hook";

import { RADIO_BUTTON_CONTAINER_STYLE } from "./styles/radio-button-container-style.const";
import type { RadioButtonContainerProps } from "./types/radio-button-container-props.type";

/**
 * Radio button container
 */
export function RadioButtonContainer(props: RadioButtonContainerProps) {

	// Contexts
	const radioButtonIsErrored = useRadioButtonIsErroredContext();
	const radioButtonOnValueChange = useRadioButtonOnValueChangeContext();

	// Handle hovered state
	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const handleOnPointerEnter = useCallback<Callback<void>>(() => setIsHovered(true), []);
	const handleOnPointerLeave = useCallback<Callback<void>>(() => setIsHovered(false), []);

	// Clicked inset
	const [clickedInset, setClickedInset] = useState<TransitionPulseInsetData | null>(() => null);

	// Handle click event
	const handleOnChecked = useCallback<Callback<void>>(
		() => {
			if (props.isDisabled) return;
			setClickedInset(resolveTransitionPulseInsetFromSize(RADIO_BUTTON_SIZE_TARGET_CONTAINER))
			radioButtonOnValueChange(props.value);
		},
		[props.isDisabled, props.value, radioButtonOnValueChange]
	);

	// Radio button events
	const radioButtonEvents = useRadioButtonEventsState(handleOnChecked);

	// Colour state
	const colourState = useRadioButtonColourState(props.isDisabled, props.value, radioButtonIsErrored);

	return (
		<RADIO_BUTTON_IS_HOVERED_CONTEXT value={isHovered}>
			<RADIO_BUTTON_CLICKED_INSET_CONTEXT value={clickedInset}>
				<RADIO_BUTTON_EVENTS_CONTEXT value={radioButtonEvents}>
					<RADIO_BUTTON_COLOUR_STATE_CONTEXT value={colourState}>
						<div
							onPointerCancel={handleOnPointerLeave}
							onPointerEnter={handleOnPointerEnter}
							onPointerLeave={handleOnPointerLeave}
							style={RADIO_BUTTON_CONTAINER_STYLE}
						>
							{props.children}
						</div>
					</RADIO_BUTTON_COLOUR_STATE_CONTEXT>
				</RADIO_BUTTON_EVENTS_CONTEXT>
			</RADIO_BUTTON_CLICKED_INSET_CONTEXT>
		</RADIO_BUTTON_IS_HOVERED_CONTEXT>
	);
}
