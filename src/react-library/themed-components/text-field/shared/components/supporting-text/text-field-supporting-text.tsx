import { Fragment, useEffect } from "react";

import { useTextFieldColourStateContext } from "../../hooks/text-field-colour-state-context.hook";
import { useTextFieldEventsContext } from "../../hooks/text-field-events-context.hook";

import { textFieldSupportingTextContainerStyle } from "./styles/text-field-supporting-text-container-style.function";
import { textFieldSupportingTextStyle } from "./styles/text-field-supporting-text-style.function";
import type { TextFieldSupportingTextProps } from "./types/text-field-supporting-text-props.type";

/**
 * Text field supporting text component
 */
export function TextFieldSupportingText(props: TextFieldSupportingTextProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();
	const textFieldEvents = useTextFieldEventsContext();

	// Handle error state
	useEffect(
		() => textFieldEvents.onIsErrored(!!props.left?.isErrored || !!props.right?.isErrored),
		[props.left?.isErrored, props.right?.isErrored, textFieldEvents]
	);

	if (!props.left && !props.right) return (
		<Fragment key="no-container" />
	);

	return (
		<div
			key="container"
			style={textFieldSupportingTextContainerStyle(props.style)}
		>
			{
				props.left ?
					<div
						key="left"
						style={textFieldSupportingTextStyle(props.left.isErrored, props.style, colourState, true)}
					>
						{props.left.text}
					</div> :
					<Fragment key="no-left" />
			}
			{
				props.right ?
					<div
						key="right"
						style={textFieldSupportingTextStyle(props.right.isErrored, props.style, colourState, false)}
					>
						{props.right.text}
					</div> :
					<Fragment key="no-right" />
			}
		</div>
	);
}
