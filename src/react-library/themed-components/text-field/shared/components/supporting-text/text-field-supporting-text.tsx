import { Fragment, useEffect } from "react";

import { useTextFieldColourStateContext } from "../../hooks/text-field-colour-state-context.hook";
import { useTextFieldEventsContext } from "../../hooks/text-field-events-context.hook";

import { textFieldSupportingTextContainerStyle } from "./styles/text-field-supporting-text-container-style.function";
import { textFieldSupportingTextStyle } from "./styles/text-field-supporting-text-style.function";
import type { TextFieldSupportingTextProps } from "./types/text-field-supporting-text-props.type";
import { textFieldSupportingTextSideStyle } from "./styles/text-field-supporting-text-side-style.function";

/**
 * Text field supporting text component
 */
export function TextFieldSupportingText(props: TextFieldSupportingTextProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();
	const textFieldEvents = useTextFieldEventsContext();

	// Handle error state
	useEffect(
		() => {
			const hasLeftError: boolean = props.left.some(x => x.isErrored === true);
			const hasRightError: boolean = props.right.some(x => x.isErrored === true);
			textFieldEvents.onIsErrored(hasLeftError || hasRightError);
		},
		[props.left, props.right, textFieldEvents]
	);

	if (props.left.length === 0 && props.right.length === 0) return (
		<Fragment key="no-container" />
	);

	return (
		<div
			key="container"
			style={textFieldSupportingTextContainerStyle(props.style)}
		>
			<div
				key="left"
				style={textFieldSupportingTextSideStyle(true)}
			>
				{props.left.map(x => (
					<span
						key={x.id}
						style={textFieldSupportingTextStyle(x.isErrored, props.style, colourState)}
					>
						{x.text}
					</span>
				))}
			</div>
			<div
				key="right"
				style={textFieldSupportingTextSideStyle(false)}
			>
				{props.right.map(x => (
					<span
						key={x.id}
						style={textFieldSupportingTextStyle(x.isErrored, props.style, colourState)}
					>
						{x.text}
					</span>
				))}
			</div>
		</div>
	);
}
