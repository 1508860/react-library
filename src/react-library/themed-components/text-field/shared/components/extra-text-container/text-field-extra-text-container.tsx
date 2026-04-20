import { TextFieldExtraTextPosition } from "../../enums/text-field-extra-text-position.type";
import { useTextFieldColourStateContext } from "../../hooks/text-field-colour-state-context.hook";

import { textFieldInputExtraTextStyle } from "./styles/text-field-extra-text-style.function";
import type { TextFieldExtraTextContainerProps } from "./types/text-field-extra-text-container-props.type";

/**
 * Text field extra text container component
 */
export function TextFieldExtraTextContainer(props: TextFieldExtraTextContainerProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();

	if (props.extraTextPosition === TextFieldExtraTextPosition.End) return (
		<>
			{props.children}
			<span
				key={TextFieldExtraTextPosition.End}
				style={textFieldInputExtraTextStyle(props.style, colourState)}
			>
				{props.extraText}
			</span>
		</>
	);

	if (props.extraTextPosition === TextFieldExtraTextPosition.Start) return (
		<>
			<span
				key={TextFieldExtraTextPosition.Start}
				style={textFieldInputExtraTextStyle(props.style, colourState)}
			>
				{props.extraText}
			</span>
			{props.children}
		</>
	);

	return (
		props.children
	);
}
