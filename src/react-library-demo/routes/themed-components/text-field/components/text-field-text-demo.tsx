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

	const [defaultValue] = useState<string>(() => "Some default text");
	const [value, setValue] = useState<string | undefined>(() => undefined);
	const [validation] = useState<TextFieldValidationTextConfig>(() => ({
		maxCharacterCount: 10,
		maxWordCount: 5
	}));

	return (
		<>
			<DemoItem label="Basic">
				<TextFieldText
					defaultValue={defaultValue}
					extraTextPosition={TextFieldExtraTextPosition.None}
					id={`text-${props.style}-1`}
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
					defaultValue={defaultValue}
					extraTextPosition={TextFieldExtraTextPosition.None}
					id={`text-${props.style}-2`}
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
					defaultValue={defaultValue}
					extraText="Extra"
					extraTextPosition={TextFieldExtraTextPosition.End}
					id={`text-${props.style}-3`}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWidth={500}
					minWidth={300}
					name={`text-${props.style}-3`}
					onValueChange={setValue}
					style={props.style}
					validation={validation}
					value={value}
				/>
			</DemoItem>
			<DemoItem label={`Extra text - ${TextFieldExtraTextPosition.Start}`}>
				<TextFieldText
					defaultValue={defaultValue}
					extraText="Extra"
					extraTextPosition={TextFieldExtraTextPosition.Start}
					id={`text-${props.style}-4`}
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
		</>
	);
}
