import {
	ReactLibraryThemedComponentsTextFieldNumberDemo,
	ReactLibraryThemedComponentsTextFieldPasswordDemo,
	ReactLibraryThemedComponentsTextFieldReadonlyDemo,
	ReactLibraryThemedComponentsTextFieldReadonlyTextareaDemo,
	ReactLibraryThemedComponentsTextFieldTextareaDemo,
	ReactLibraryThemedComponentsTextFieldTextDemo
} from "./components";

export function ReactLibraryThemedComponentsTextFieldDemo() {
	return (
		<>
			<ReactLibraryThemedComponentsTextFieldNumberDemo key="number" />
			<ReactLibraryThemedComponentsTextFieldPasswordDemo key="password" />
			<ReactLibraryThemedComponentsTextFieldReadonlyDemo key="readonly" />
			<ReactLibraryThemedComponentsTextFieldReadonlyTextareaDemo key="readonly-readonly" />
			<ReactLibraryThemedComponentsTextFieldTextDemo key="text" />
			<ReactLibraryThemedComponentsTextFieldTextareaDemo key="textarea" />
		</>
	);
}
