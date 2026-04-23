import { useState } from "react";

import type { IStyle } from "@react-library/common";
import { MaterialIconName } from "@react-library/material-icons";
import {
	TextFieldExtraTextPosition,
	TextFieldStyle,
	TextFieldText,
	type TextFieldValidationTextConfig
} from "@react-library/themed-components";

import {
	DemoItem,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsTextFieldTextDemo() {

	const [textFieldStyles] = useState<Array<TextFieldStyle>>(() => Object.values(TextFieldStyle));

	return (
		<DemoSection title={`Text Field - text`}>
			{textFieldStyles.map(textFieldStyle => (
				<ReactLibraryThemedComponentsTextFieldTextDemoStyle
					key={textFieldStyle}
					style={textFieldStyle}
				/>
			))}
		</DemoSection>
	);
}

function ReactLibraryThemedComponentsTextFieldTextDemoStyle(props: IStyle<TextFieldStyle>) {

	const [value, setValue] = useState<string | undefined>(() => undefined);
	const [validation] = useState<TextFieldValidationTextConfig>(() => ({
		maxCharacterCount: 10,
		maxWordCount: 5
	}));

	return (
		<>
			<DemoItem label="Basic">
				<TextFieldText
					defaultText="Some default text"
					extraTextPosition={TextFieldExtraTextPosition.None}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWidth={500}
					minWidth={300}
					name={`text-${props.style}-1`}
					onValueChange={setValue}
					style={props.style}
					validation={validation}
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
					name={`text-${props.style}-2`}
					onValueChange={setValue}
					style={props.style}
					validation={validation}
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
					name={`text-${props.style}-4`}
					onValueChange={setValue}
					style={props.style}
					validation={validation}
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
					name={`text-${props.style}-5`}
					onValueChange={setValue}
					style={props.style}
					validation={validation}
					value={value}
				/>
			</DemoItem>
			<DemoItem label="Validation">
				<TextFieldText
					defaultText="Some default text"
					extraTextPosition={TextFieldExtraTextPosition.None}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWidth={500}
					minWidth={300}
					name={`text-${props.style}-6`}
					onValueChange={setValue}
					style={props.style}
					supportingText="Supporting text"
					validation={validation}
					value={value}
				/>
			</DemoItem>
		</>
	);
}
