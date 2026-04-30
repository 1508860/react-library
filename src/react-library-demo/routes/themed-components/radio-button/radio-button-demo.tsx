import { useState } from "react";

import {
	RadioButton,
	RadioButtonGroup,
	RadioButtonValue,
	type RadioButtonValueOptional
} from "@react-library/themed-components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsRadioButtonDemo() {

	const [valueStandard, setValueStandard] = useState<RadioButtonValueOptional>(() => undefined);
	const [valueRequired, setValueRequired] = useState<RadioButtonValueOptional>(() => undefined);
	const [valueDisabled, setValueDisabled] = useState<RadioButtonValueOptional>(() => undefined);

	return (
		<DemoSection title="Radio Button">
			<DemoItem
				key="standard"
				label="Standard"
			>
				<RadioButtonGroup
					name="standard"
					onValueChange={setValueStandard}
					value={valueStandard}
				>
					<RadioButton
						id={`standard-${RadioButtonValue.Value1}`}
						label="Label 1"
						value={RadioButtonValue.Value1}
					/>
					<RadioButton
						id={`standard-${RadioButtonValue.Value2}`}
						label="Label 2"
						value={RadioButtonValue.Value2}
					/>
					<RadioButton
						id={`standard-${RadioButtonValue.Value3}`}
						label="Label 3"
						value={RadioButtonValue.Value3}
					/>
				</RadioButtonGroup>
			</DemoItem>
			<DemoItem
				key="required"
				label="Required"
			>
				<RadioButtonGroup
					isRequired={true}
					name="required"
					onValueChange={setValueRequired}
					value={valueRequired}
				>
					<RadioButton
						id={`required-${RadioButtonValue.Value1}`}
						label="Label 1"
						value={RadioButtonValue.Value1}
					/>
					<RadioButton
						id={`required-${RadioButtonValue.Value2}`}
						label="Label 2"
						value={RadioButtonValue.Value2}
					/>
					<RadioButton
						id={`required-${RadioButtonValue.Value3}`}
						label="Label 3"
						value={RadioButtonValue.Value3}
					/>
				</RadioButtonGroup>
			</DemoItem>
			<DemoItem
				key="disabled"
				label="Disabled"
			>
				<RadioButtonGroup
					name="disabled"
					onValueChange={setValueDisabled}
					value={valueDisabled}
				>
					<RadioButton
						id={`disabled-${RadioButtonValue.Value1}`}
						isDisabled={false}
						label="Label 1"
						value={RadioButtonValue.Value1}
					/>
					<RadioButton
						id={`disabled-${RadioButtonValue.Value2}`}
						isDisabled={true}
						label="Label 2"
						value={RadioButtonValue.Value2}
					/>
					<RadioButton
						id={`disabled-${RadioButtonValue.Value3}`}
						isDisabled={false}
						label="Label 3"
						value={RadioButtonValue.Value3}
					/>
				</RadioButtonGroup>
			</DemoItem>
		</DemoSection>
	);
}
