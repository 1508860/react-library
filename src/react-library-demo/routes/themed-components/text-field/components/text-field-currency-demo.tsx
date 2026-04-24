import { useState } from "react";

import type { IStyle } from "@react-library/common";
import { MaterialIconName } from "@react-library/material-icons";
import {
	TextFieldCurrency,
	TextFieldExtraTextPosition,
	TextFieldStyle,
	type TextFieldValidationCurrencyConfig,
} from "@react-library/themed-components";

import {
	DemoItem,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsTextFieldCurrencyDemo() {

	const [textFieldStyles] = useState<Array<TextFieldStyle>>(() => Object.values(TextFieldStyle));

	return (
		<DemoSection title={`Text Field - currency`}>
			{textFieldStyles.map(textFieldStyle => (
				<ReactLibraryThemedComponentsTextFieldCurrencyDemoStyle
					key={textFieldStyle}
					style={textFieldStyle}
				/>
			))}
		</DemoSection>
	);
}

function ReactLibraryThemedComponentsTextFieldCurrencyDemoStyle(props: IStyle<TextFieldStyle>) {

	const [defaultValue] = useState<number>(() => 1234);
	const [validation] = useState<TextFieldValidationCurrencyConfig>(() => ({
		maxValue: 123456,
		minValue: 123
	}));
	const [value, setValue] = useState<number | undefined>(() => undefined);
	const [valueStep] = useState<number>(() => 1);

	return (
		<>
			<DemoItem label="Basic">
				<TextFieldCurrency
					defaultValue={defaultValue}
					extraTextPosition={TextFieldExtraTextPosition.None}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWidth={500}
					minWidth={300}
					name={`currency-${props.style}-1`}
					onValueChange={setValue}
					style={props.style}
					validation={validation}
					value={value}
					valueStep={valueStep}
				/>
			</DemoItem>
			<DemoItem label="Disabled">
				<TextFieldCurrency
					defaultValue={defaultValue}
					extraTextPosition={TextFieldExtraTextPosition.None}
					isDisabled={true}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWidth={500}
					minWidth={300}
					name={`currency-${props.style}-2`}
					onValueChange={setValue}
					style={props.style}
					validation={validation}
					value={value}
					valueStep={valueStep}
				/>
			</DemoItem>
			<DemoItem label={`Extra text - ${TextFieldExtraTextPosition.End}`}>
				<TextFieldCurrency
					defaultValue={defaultValue}
					extraText="Extra"
					extraTextPosition={TextFieldExtraTextPosition.End}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWidth={500}
					minWidth={300}
					name={`currency-${props.style}-3`}
					onValueChange={setValue}
					style={props.style}
					validation={validation}
					value={value}
					valueStep={valueStep}
				/>
			</DemoItem>
			<DemoItem label={`Extra text - ${TextFieldExtraTextPosition.Start}`}>
				<TextFieldCurrency
					defaultValue={defaultValue}
					extraText="Extra"
					extraTextPosition={TextFieldExtraTextPosition.Start}
					isRequired={true}
					label="Label"
					leadingIconName={MaterialIconName.Search}
					maxWidth={500}
					minWidth={300}
					name={`currency-${props.style}-4`}
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
