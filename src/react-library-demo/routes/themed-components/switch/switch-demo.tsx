import { useState } from "react";

import { Switch } from "@react-library/themed-components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsSwitchDemo() {

	const [value, setValue] = useState<boolean>(() => false);

	return (
		<DemoSection title="Switch">
			<DemoItem
				key="standard"
				label="Standard"
			>
				<Switch
					id="switch-standard"
					name="switch-standard"
					onValueChange={setValue}
					value={value}
				/>
			</DemoItem>
			<DemoItem
				key="label"
				label="Label"
			>
				<Switch
					id="switch-label"
					label="Label"
					name="switch-label"
					onValueChange={setValue}
					value={value}
				/>
			</DemoItem>
			<DemoItem
				key="required"
				label="Required"
			>
				<Switch
					id="switch-required"
					isRequired={true}
					label="Label"
					name="switch-required"
					onValueChange={setValue}
					value={value}
				/>
			</DemoItem>
			<DemoItem
				key="disabled"
				label="Disabled"
			>
				<Switch
					id="switch-disabled"
					isDisabled={true}
					label="Label"
					name="switch-disabled"
					onValueChange={setValue}
					value={value}
				/>
			</DemoItem>
			<DemoItem
				key="label-width"
				label="Label - width"
			>
				<Switch
					id="switch-label-width"
					label="Label"
					name="switch-label-width"
					onValueChange={setValue}
					value={value}
					width={200}
				/>
			</DemoItem>
		</DemoSection>
	);
}
