import { useState } from "react";

import type { IStyle } from "@react-library/common";
import { MaterialIconName } from "@react-library/material-icons";
import {
	TextFieldExtraTextPosition,
	TextFieldNumber,
	TextFieldStyle,
	type TextFieldValidationNumberConfig
} from "@react-library/themed-components";

import {
	DemoItem,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsTextFieldNumberDemo() {

	const [textFieldStyles] = useState<Array<TextFieldStyle>>(() => Object.values(TextFieldStyle));

	return (
		<DemoSection title={`Text Field - number`}>
			{textFieldStyles.map(textFieldStyle => (
				<ReactLibraryThemedComponentsTextFieldNumberDemoStyle
					key={textFieldStyle}
					style={textFieldStyle}
				/>
			))}
		</DemoSection>
	);
}

function ReactLibraryThemedComponentsTextFieldNumberDemoStyle(props: IStyle<TextFieldStyle>) {

	const [defaultValue] = useState<number>(() => 1234);
	const [validation] = useState<TextFieldValidationNumberConfig>(() => ({
		maxValue: 123456,
		minValue: 123
	}));
	const [value, setValue] = useState<number | undefined>(() => undefined);
	const [valueStep] = useState<number>(() => 1);

	return (
		<>
			<DemoItem label="Basic">
				<TextFieldNumber
					defaultNumber={defaultValue}
					extraTextPosition={TextFieldExtraTextPosition.None}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWidth={500}
					minWidth={300}
					name={`number-${props.style}-1`}
					onValueChange={setValue}
					style={props.style}
					validation={validation}
					value={value}
					valueStep={valueStep}
				/>
			</DemoItem>
			<DemoItem label="Disabled">
				<TextFieldNumber
					defaultNumber={defaultValue}
					extraTextPosition={TextFieldExtraTextPosition.None}
					isDisabled={true}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWidth={500}
					minWidth={300}
					name={`number-${props.style}-2`}
					onValueChange={setValue}
					style={props.style}
					validation={validation}
					value={value}
					valueStep={valueStep}
				/>
			</DemoItem>
			<DemoItem label={`Extra text - ${TextFieldExtraTextPosition.End}`}>
				<TextFieldNumber
					defaultNumber={defaultValue}
					extraText="Extra"
					extraTextPosition={TextFieldExtraTextPosition.End}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWidth={500}
					minWidth={300}
					name={`number-${props.style}-3`}
					onValueChange={setValue}
					style={props.style}
					validation={validation}
					value={value}
					valueStep={valueStep}
				/>
			</DemoItem>
			<DemoItem label={`Extra text - ${TextFieldExtraTextPosition.Start}`}>
				<TextFieldNumber
					defaultNumber={defaultValue}
					extraText="Extra"
					extraTextPosition={TextFieldExtraTextPosition.Start}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWidth={500}
					minWidth={300}
					name={`number-${props.style}-4`}
					onValueChange={setValue}
					style={props.style}
					validation={validation}
					value={value}
					valueStep={valueStep}
				/>
			</DemoItem>
		</>
	);
}
