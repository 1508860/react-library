import { DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsRadioButtonDemo() {

	return (
		<DemoSection title="Radio Button">
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
				key="is-required"
				label="Required"
			>
			</DemoItem>
			<DemoItem
				key="disabled"
				label="Disabled"
			>
			</DemoItem>
		</DemoSection>
	);
}
