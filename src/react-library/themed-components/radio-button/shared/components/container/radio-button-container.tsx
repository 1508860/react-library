import { useCallback, useState } from "react";

import type { Callback } from "@react-library/common";
import type { TransitionPulseInsetData } from "@react-library/components";

import { RADIO_BUTTON_CLICKED_INSET_CONTEXT } from "../../constants/radio-button-clicked-inset-context.const";
import { RADIO_BUTTON_COLOUR_STATE_CONTEXT } from "../../constants/radio-button-colour-state-context.const";
import { RADIO_BUTTON_IS_HOVERED_CONTEXT } from "../../constants/radio-button-is-hovered-context.const";
import { resolveRadioButtonClickedInset } from "../../functions/resolve-radio-button-clicked-inset.function";
import { useRadioButtonColourState } from "../../hooks/use-radio-button-colour-state.hook";
import { useRadioButtonIsErroredContext } from "../../hooks/radio-button-is-errored-context.hook";
import { useRadioButtonOnValueChangeContext } from "../../hooks/radio-button-on-value-change-context.hook";

import { radioButtonContainerStyle } from "./styles/radio-button-container-style.function";
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
	const handleOnClick = useCallback<Callback<void>>(
		() => {
			if (props.isDisabled) return;
			setClickedInset(resolveRadioButtonClickedInset())
			radioButtonOnValueChange(props.value);
		},
		[props.isDisabled, props.value, radioButtonOnValueChange]
	);

	// Colour state
	const colourState = useRadioButtonColourState(props.isDisabled, props.value, radioButtonIsErrored);

	return (
		<RADIO_BUTTON_IS_HOVERED_CONTEXT value={isHovered}>
			<RADIO_BUTTON_CLICKED_INSET_CONTEXT value={clickedInset}>
				<RADIO_BUTTON_COLOUR_STATE_CONTEXT value={colourState}>
					<div
						onClick={handleOnClick}
						onPointerCancel={handleOnPointerLeave}
						onPointerEnter={handleOnPointerEnter}
						onPointerLeave={handleOnPointerLeave}
						style={radioButtonContainerStyle(!!props.isDisabled, isHovered)}
					>
						{props.children}
					</div>
				</RADIO_BUTTON_COLOUR_STATE_CONTEXT>
			</RADIO_BUTTON_CLICKED_INSET_CONTEXT>
		</RADIO_BUTTON_IS_HOVERED_CONTEXT>
	);
}
