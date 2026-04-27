import { useState } from "react";

import { Checkbox } from "@react-library/themed-components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsCheckboxDemo() {

	const [checkboxSelected, setCheckboxSelected] = useState<boolean>(() => true);

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
					key="label"
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
					key="standard"
					label="Standard"
				>
				</DemoItem>
				<DemoItem
					key="label"
					label="Label"
				>
				</DemoItem>
				<DemoItem
					key="disabled"
					label="Disabled"
				>
				</DemoItem>
			</DemoSection>
		</>
	);
}
