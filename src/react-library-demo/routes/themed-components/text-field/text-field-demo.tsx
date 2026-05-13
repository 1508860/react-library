import {
	ReactLibraryThemedComponentsTextFieldCurrencyDemo,
	ReactLibraryThemedComponentsTextFieldNumberDemo,
	ReactLibraryThemedComponentsTextFieldPasswordDemo,
	ReactLibraryThemedComponentsTextFieldReadonlyDemo,
	ReactLibraryThemedComponentsTextFieldReadonlyTextareaDemo,
	ReactLibraryThemedComponentsTextFieldSelectDemo,
	ReactLibraryThemedComponentsTextFieldTextareaDemo,
	ReactLibraryThemedComponentsTextFieldTextDemo
} from "./components";

export function ReactLibraryThemedComponentsTextFieldDemo() {
	return (
		<>
			<ReactLibraryThemedComponentsTextFieldCurrencyDemo key="currency" />
			<ReactLibraryThemedComponentsTextFieldNumberDemo key="number" />
			<ReactLibraryThemedComponentsTextFieldPasswordDemo key="password" />
			<ReactLibraryThemedComponentsTextFieldReadonlyDemo key="readonly" />
			<ReactLibraryThemedComponentsTextFieldReadonlyTextareaDemo key="readonly-readonly" />
			<ReactLibraryThemedComponentsTextFieldSelectDemo key="select" />
			<ReactLibraryThemedComponentsTextFieldTextDemo key="text" />
			<ReactLibraryThemedComponentsTextFieldTextareaDemo key="textarea" />
		</>
	);
}
