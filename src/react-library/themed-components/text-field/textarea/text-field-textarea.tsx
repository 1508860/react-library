import { TextFieldContainer } from "../shared/components/container";
import { TextFieldIconError } from "../shared/components/icon-error";
import { TextFieldInnerContainer } from "../shared/components/inner-container";
import { TextFieldInputContainer } from "../shared/components/input-container";
import { TextFieldInputLabel } from "../shared/components/input-label";
import { TextFieldProvider } from "../shared/components/provider";

import { TextFieldTextareaInput } from "./components/input";
import { TextFieldTextareaSupportingText } from "./components/supporting-text";
import { useTextFieldTextareaIsPopulatedState } from "./hooks/text-field-textarea-is-populated-state.hook";
import type { TextFieldTextareaProps } from "./types/text-field-textarea-props.type";

/**
 * Text field textarea component
 */
export function TextFieldTextarea(props: TextFieldTextareaProps) {
	return (
		<TextFieldProvider<TextFieldTextareaProps>
			isDisabled={!!props.isDisabled}
			props={props}
			style={props.style}
			useIsPopulatedState={useTextFieldTextareaIsPopulatedState}
		>
			<TextFieldContainer>
				<TextFieldInnerContainer
					{...props}
					key="inner-container"
				>
					<TextFieldInputContainer
						key="input-container"
						style={props.style}
					>
						<TextFieldInputLabel
							isRequired={!!props.isRequired}
							key="label"
							label={props.label}
							name={props.name}
							style={props.style}
						/>
						<TextFieldTextareaInput
							{...props}
							key="input"
						/>
					</TextFieldInputContainer>
					<TextFieldIconError
						key="icon-error"
						style={props.style}
					/>
				</TextFieldInnerContainer>
				<TextFieldTextareaSupportingText
					{...props}
					key="supporting-text"
				/>
			</TextFieldContainer>
		</TextFieldProvider>
	);
}
