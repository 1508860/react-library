import { useState } from "react";

import { MaterialIconName } from "@react-library/material-icons";
import {
	TextFieldExtraTextPosition,
	TextFieldStyle,
	TextFieldText,
	TextFieldValidationText
} from "@react-library/themed-components";

import {
	DemoItem,
	DemoSection
} from "@react-library-demo/shared";
import type { IStyle } from "@react-library/common";

export function ReactLibraryThemedComponentsTextFieldTextDemo() {

	const [textFieldStyles] = useState<Array<TextFieldStyle>>(() => Object.values(TextFieldStyle));

	return (
		<>
			{textFieldStyles.map(textFieldStyle => (
				<ReactLibraryThemedComponentsTextFieldTextDemoStyle
					key={textFieldStyle}
					style={textFieldStyle}
				/>
			))}
		</>
	);
}

function ReactLibraryThemedComponentsTextFieldTextDemoStyle(props: IStyle<TextFieldStyle>) {

	const [value, setValue] = useState<string | undefined>(() => undefined);

	return (
		<DemoSection title={`Text Field - text - ${props.style}`}>
			<DemoItem label="Basic">
				<TextFieldText
					defaultText="Some default text"
					extraTextPosition={TextFieldExtraTextPosition.None}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWidth={500}
					minWidth={300}
					name={`${props.style}-1`}
					onValueChange={setValue}
					style={props.style}
					validation={TextFieldValidationText.None}
					value={value}
				/>
			</DemoItem>
			<DemoItem label="Disabled">
				<TextFieldText
					defaultText="Some default text"
					extraTextPosition={TextFieldExtraTextPosition.None}
					isDisabled={true}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWidth={500}
					minWidth={300}
					name={`${props.style}-2`}
					onValueChange={setValue}
					style={props.style}
					validation={TextFieldValidationText.None}
					value={value}
				/>
			</DemoItem>
			<DemoItem label={`Extra text - ${TextFieldExtraTextPosition.End}`}>
				<TextFieldText
					defaultText="Some default text"
					extraText="Extra"
					extraTextPosition={TextFieldExtraTextPosition.End}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWidth={500}
					minWidth={300}
					name={`${props.style}-4`}
					onValueChange={setValue}
					style={props.style}
					validation={TextFieldValidationText.None}
					value={value}
				/>
			</DemoItem>
			<DemoItem label={`Extra text - ${TextFieldExtraTextPosition.Start}`}>
				<TextFieldText
					defaultText="Some default text"
					extraText="Extra"
					extraTextPosition={TextFieldExtraTextPosition.Start}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWidth={500}
					minWidth={300}
					name={`${props.style}-5`}
					onValueChange={setValue}
					style={props.style}
					validation={TextFieldValidationText.None}
					value={value}
				/>
			</DemoItem>
			<DemoItem label="Character count">
				<TextFieldText
					defaultText="Some default text"
					extraTextPosition={TextFieldExtraTextPosition.None}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxCharacterCount={10}
					maxWidth={500}
					minWidth={300}
					name={`${props.style}-6`}
					onValueChange={setValue}
					style={props.style}
					supportingText="Supporting text"
					validation={TextFieldValidationText.Character}
					value={value}
				/>
			</DemoItem>
			<DemoItem label="Word count">
				<TextFieldText
					defaultText="Some default text"
					extraTextPosition={TextFieldExtraTextPosition.None}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWordCount={5}
					maxWidth={500}
					minWidth={300}
					name={`${props.style}-7`}
					onValueChange={setValue}
					style={props.style}
					supportingText="Supporting text"
					validation={TextFieldValidationText.Word}
					value={value}
				/>
			</DemoItem>
		</DemoSection>
	);
}
