import { useState } from "react";

import {
	Checkbox,
	CheckboxGroup,
	CheckboxGroupContainer
} from "@react-library/themed-components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsCheckboxDemo() {

	// Checkbox
	const [checkboxSelected, setCheckboxSelected] = useState<boolean>(() => true);

	// Checkbox group - standard
	const [checkboxGroupStandardSelected1, setCheckboxGroupStandardSelected1] = useState<boolean>(() => true);
	const [checkboxGroupStandardSelected2, setCheckboxGroupStandardSelected2] = useState<boolean>(() => true);
	const [checkboxGroupStandardSelected3, setCheckboxGroupStandardSelected3] = useState<boolean>(() => true);

	// Checkbox group - nested
	const [checkboxGroupNestedSelected1, setCheckboxGroupNestedSelected1] = useState<boolean>(() => true);
	const [checkboxGroupNestedSelected2, setCheckboxGroupNestedSelected2] = useState<boolean>(() => true);

	const [checkboxGroupNested1Selected1, setCheckboxGroupNested1Selected1] = useState<boolean>(() => true);
	const [checkboxGroupNested1Selected2, setCheckboxGroupNested1Selected2] = useState<boolean>(() => true);
	const [checkboxGroupNested1Selected3, setCheckboxGroupNested1Selected3] = useState<boolean>(() => true);

	const [checkboxGroupNested2Selected1, setCheckboxGroupNested2Selected1] = useState<boolean>(() => true);
	const [checkboxGroupNested2Selected2, setCheckboxGroupNested2Selected2] = useState<boolean>(() => true);
	const [checkboxGroupNested2Selected3, setCheckboxGroupNested2Selected3] = useState<boolean>(() => true);

	return (
		<>
			<DemoSection title="Checkbox">
				<DemoItem
					key="standard"
					label="Standard"
				>
					<Checkbox
						id="checkbox-1"
						name="checkbox-1"
						onValueChange={setCheckboxSelected}
						value={checkboxSelected}
					/>
				</DemoItem>
				<DemoItem
					key="label"
					label="Label"
				>
					<Checkbox
						id="checkbox-2"
						label="Label"
						name="checkbox-2"
						onValueChange={setCheckboxSelected}
						value={checkboxSelected}
					/>
				</DemoItem>
				<DemoItem
					key="is-required"
					label="Required"
				>
					<Checkbox
						id="checkbox-3"
						isRequired={true}
						label="Label"
						name="checkbox-3"
						onValueChange={setCheckboxSelected}
						value={checkboxSelected}
					/>
				</DemoItem>
				<DemoItem
					key="disabled"
					label="Disabled"
				>
					<Checkbox
						id="checkbox-4"
						isDisabled={true}
						label="Label"
						name="checkbox-4"
						onValueChange={setCheckboxSelected}
						value={checkboxSelected}
					/>
				</DemoItem>
			</DemoSection>
			<DemoSection title="Checkbox - group">
				<DemoItem
					key="label"
					label="Standard"
				>
					<CheckboxGroupContainer>
						<CheckboxGroup
							id="checkboxgroup-standard"
							label="Label - Group"
						/>
						<Checkbox
							id="checkboxgroup-standard-1"
							label="Label"
							name="checkboxgroup-standard-1"
							onValueChange={setCheckboxGroupStandardSelected1}
							value={checkboxGroupStandardSelected1}
						/>
						<Checkbox
							id="checkboxgroup-standard-2"
							label="Label"
							name="checkboxgroup-standard-2"
							onValueChange={setCheckboxGroupStandardSelected2}
							value={checkboxGroupStandardSelected2}
						/>
						<Checkbox
							id="checkboxgroup-standard-3"
							label="Label"
							name="checkboxgroup-standard-3"
							onValueChange={setCheckboxGroupStandardSelected3}
							value={checkboxGroupStandardSelected3}
						/>
					</CheckboxGroupContainer>
				</DemoItem>

				<DemoItem
					key="label"
					label="Nested"
				>
					<CheckboxGroupContainer>
						<CheckboxGroup
							id="checkboxgroup-nested"
							label="Label - Group Main"
						/>
						<Checkbox
							id="checkboxgroup-nested-1"
							label="Label"
							name="checkboxgroup-nested-1"
							onValueChange={setCheckboxGroupNestedSelected1}
							value={checkboxGroupNestedSelected1}
						/>
						<Checkbox
							id="checkboxgroup-nested-2"
							label="Label"
							name="checkboxgroup-nested-2"
							onValueChange={setCheckboxGroupNestedSelected2}
							value={checkboxGroupNestedSelected2}
						/>
						<CheckboxGroupContainer>
							<CheckboxGroup
								id="checkboxgroup-nested-group-1"
								label="Label - Sub Group 1"
							/>
							<Checkbox
								id="checkboxgroup-nested-1-1"
								label="Label"
								name="checkboxgroup-nested-1-1"
								onValueChange={setCheckboxGroupNested1Selected1}
								value={checkboxGroupNested1Selected1}
							/>
							<Checkbox
								id="checkboxgroup-nested-1-2"
								label="Label"
								name="checkboxgroup-nested-1-2"
								onValueChange={setCheckboxGroupNested1Selected2}
								value={checkboxGroupNested1Selected2}
							/>
							<Checkbox
								id="checkboxgroup-nested-1-3"
								label="Label"
								name="checkboxgroup-nested-1-3"
								onValueChange={setCheckboxGroupNested1Selected3}
								value={checkboxGroupNested1Selected3}
							/>
						</CheckboxGroupContainer>
						<CheckboxGroupContainer>
							<CheckboxGroup
								id="checkboxgroup-nested-group-2"
								label="Label - Sub Group 2"
							/>
							<Checkbox
								id="checkboxgroup-nested-2-1"
								label="Label"
								name="checkboxgroup-nested-2-1"
								onValueChange={setCheckboxGroupNested2Selected1}
								value={checkboxGroupNested2Selected1}
							/>
							<Checkbox
								id="checkboxgroup-nested-2-2"
								label="Label"
								name="checkboxgroup-nested-2-2"
								onValueChange={setCheckboxGroupNested2Selected2}
								value={checkboxGroupNested2Selected2}
							/>
							<Checkbox
								id="checkboxgroup-nested-2-3"
								label="Label"
								name="checkboxgroup-nested-2-3"
								onValueChange={setCheckboxGroupNested2Selected3}
								value={checkboxGroupNested2Selected3}
							/>
						</CheckboxGroupContainer>
					</CheckboxGroupContainer>
				</DemoItem>
			</DemoSection>
		</>
	);
}
