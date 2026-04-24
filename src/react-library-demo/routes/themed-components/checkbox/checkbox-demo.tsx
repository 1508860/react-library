import { DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsCheckboxDemo() {
	return (
		<>
			<DemoSection title="Checkbox">
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
