import { useState } from "react";

import { Checkbox, CheckboxGroup } from "@react-library/themed-components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsCheckboxDemo() {

	const [checkboxSelected, setCheckboxSelected] = useState<boolean>(() => true);

	const [checkboxGroupSelected1, setCheckboxGroupSelected1] = useState<boolean>(() => true);
	const [checkboxGroupSelected2, setCheckboxGroupSelected2] = useState<boolean>(() => true);
	const [checkboxGroupSelected3, setCheckboxGroupSelected3] = useState<boolean>(() => true);

	return (
		<>
			<DemoSection title="Checkbox">
				<DemoItem
					key="standard"
					label="Standard"
				>
					<Checkbox
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
					label="Label"
				>
					<CheckboxGroup label="Group Label">
						<Checkbox
							label="Label"
							name="checkboxgroup-label-1"
							onValueChange={setCheckboxGroupSelected1}
							value={checkboxGroupSelected1}
						/>
						<Checkbox
							label="Label"
							name="checkboxgroup-label-2"
							onValueChange={setCheckboxGroupSelected2}
							value={checkboxGroupSelected2}
						/>
						<Checkbox
							label="Label"
							name="checkboxgroup-label-3"
							onValueChange={setCheckboxGroupSelected3}
							value={checkboxGroupSelected3}
						/>
					</CheckboxGroup>
				</DemoItem>
			</DemoSection>
		</>
	);
}
