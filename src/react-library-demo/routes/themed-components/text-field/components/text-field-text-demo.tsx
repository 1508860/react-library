import { useState } from "react";

import { MaterialIconName } from "@react-library/material-icons";
import { TextField, TextFieldContent, TextFieldExtraTextPosition, TextFieldStyle } from "@react-library/themed-components";

import {
	DemoItem,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsTextFieldTextDemo() {

	const [value, setValue] = useState<string | undefined>(() => undefined);

	return (
		<>
			<DemoSection title="Text Field - Text">
				<DemoItem label={`${TextFieldStyle.Filled}`}>
					<TextField
						content={TextFieldContent.Text}
						defaultText="Some default text"
						extraTextPosition={TextFieldExtraTextPosition.None}
						isDisabled={false}
						isRequired={true}
						label="Label"
						leadingIconName={MaterialIconName.Search}
						maxWidth={500}
						minWidth={300}
						name={`${TextFieldStyle.Filled}-1`}
						onValueChange={setValue}
						style={TextFieldStyle.Filled}
						value={value}
					/>
				</DemoItem>
				<DemoItem label={`${TextFieldStyle.Filled} - disabled`}>
					<TextField
						content={TextFieldContent.Text}
						defaultText="Some default text"
						extraTextPosition={TextFieldExtraTextPosition.None}
						isDisabled={true}
						isRequired={true}
						label="Label"
						leadingIconName={MaterialIconName.Search}
						maxWidth={500}
						minWidth={300}
						name={`${TextFieldStyle.Filled}-2`}
						onValueChange={setValue}
						style={TextFieldStyle.Filled}
						value={value}
					/>
				</DemoItem>
				<DemoItem label={`${TextFieldStyle.Filled} - is password`}>
					<TextField
						content={TextFieldContent.Text}
						defaultText="Some default text"
						extraTextPosition={TextFieldExtraTextPosition.None}
						isPassword={true}
						isRequired={true}
						label="Label"
						leadingIconName={MaterialIconName.Search}
						maxWidth={500}
						minWidth={300}
						name={`${TextFieldStyle.Filled}-3`}
						onValueChange={setValue}
						style={TextFieldStyle.Filled}
						value={value}
					/>
				</DemoItem>
				<DemoItem label={`${TextFieldStyle.Filled} - extra text - ${TextFieldExtraTextPosition.End}`}>
					<TextField
						content={TextFieldContent.Text}
						defaultText="Some default text"
						extraText="Extra"
						extraTextPosition={TextFieldExtraTextPosition.End}
						isPassword={true}
						isRequired={true}
						label="Label"
						leadingIconName={MaterialIconName.Search}
						maxWidth={500}
						minWidth={300}
						name={`${TextFieldStyle.Filled}-4`}
						onValueChange={setValue}
						style={TextFieldStyle.Filled}
						value={value}
					/>
				</DemoItem>
				<DemoItem label={`${TextFieldStyle.Filled} - extra text - ${TextFieldExtraTextPosition.Start}`}>
					<TextField
						content={TextFieldContent.Text}
						defaultText="Some default text"
						extraText="Extra"
						extraTextPosition={TextFieldExtraTextPosition.Start}
						isPassword={true}
						isRequired={true}
						label="Label"
						leadingIconName={MaterialIconName.Search}
						maxWidth={500}
						minWidth={300}
						name={`${TextFieldStyle.Filled}-5`}
						onValueChange={setValue}
						style={TextFieldStyle.Filled}
						value={value}
					/>
				</DemoItem>
				<DemoItem label={`${TextFieldStyle.Outlined}`}>
					<TextField
						content={TextFieldContent.Text}
						defaultText="Some default text"
						extraTextPosition={TextFieldExtraTextPosition.None}
						isDisabled={false}
						isRequired={true}
						label="Label"
						leadingIconName={MaterialIconName.Search}
						maxWidth={500}
						minWidth={300}
						name={`${TextFieldStyle.Outlined}-1`}
						onValueChange={setValue}
						style={TextFieldStyle.Outlined}
						value={value}
					/>
				</DemoItem>
				<DemoItem label={`${TextFieldStyle.Outlined} - disabled`}>
					<TextField
						content={TextFieldContent.Text}
						defaultText="Some default text"
						extraTextPosition={TextFieldExtraTextPosition.None}
						isDisabled={true}
						isRequired={true}
						label="Label"
						leadingIconName={MaterialIconName.Search}
						maxWidth={500}
						minWidth={300}
						name={`${TextFieldStyle.Outlined}-2`}
						onValueChange={setValue}
						style={TextFieldStyle.Outlined}
						value={value}
					/>
				</DemoItem>
				<DemoItem label={`${TextFieldStyle.Outlined} - is password`}>
					<TextField
						content={TextFieldContent.Text}
						defaultText="Some default text"
						extraTextPosition={TextFieldExtraTextPosition.None}
						isPassword={true}
						isRequired={true}
						label="Label"
						leadingIconName={MaterialIconName.Search}
						maxWidth={500}
						minWidth={300}
						name={`${TextFieldStyle.Outlined}-3`}
						onValueChange={setValue}
						style={TextFieldStyle.Outlined}
						value={value}
					/>
				</DemoItem>
				<DemoItem label={`${TextFieldStyle.Outlined} - extra text - ${TextFieldExtraTextPosition.End}`}>
					<TextField
						content={TextFieldContent.Text}
						defaultText="Some default text"
						extraText="Extra"
						extraTextPosition={TextFieldExtraTextPosition.End}
						isPassword={true}
						isRequired={true}
						label="Label"
						leadingIconName={MaterialIconName.Search}
						maxWidth={500}
						minWidth={300}
						name={`${TextFieldStyle.Outlined}-4`}
						onValueChange={setValue}
						style={TextFieldStyle.Outlined}
						value={value}
					/>
				</DemoItem>
				<DemoItem label={`${TextFieldStyle.Outlined} - extra text - ${TextFieldExtraTextPosition.Start}`}>
					<TextField
						content={TextFieldContent.Text}
						defaultText="Some default text"
						extraText="Extra"
						extraTextPosition={TextFieldExtraTextPosition.Start}
						isPassword={true}
						isRequired={true}
						label="Label"
						leadingIconName={MaterialIconName.Search}
						maxWidth={500}
						minWidth={300}
						name={`${TextFieldStyle.Outlined}-5`}
						onValueChange={setValue}
						style={TextFieldStyle.Outlined}
						value={value}
					/>
				</DemoItem>
			</DemoSection>
		</>
	);
}
