import {
	ReactLibraryThemedComponentsTextFieldNumberDemo,
	ReactLibraryThemedComponentsTextFieldPasswordDemo,
	ReactLibraryThemedComponentsTextFieldReadonlyDemo,
	ReactLibraryThemedComponentsTextFieldTextareaDemo,
	ReactLibraryThemedComponentsTextFieldTextDemo
} from "./components";

export function ReactLibraryThemedComponentsTextFieldDemo() {
	return (
		<>
			<ReactLibraryThemedComponentsTextFieldNumberDemo key="number" />
			<ReactLibraryThemedComponentsTextFieldPasswordDemo key="password" />
			<ReactLibraryThemedComponentsTextFieldReadonlyDemo key="readonly" />
			<ReactLibraryThemedComponentsTextFieldTextDemo key="text" />
			<ReactLibraryThemedComponentsTextFieldTextareaDemo key="textarea" />
		</>
	);
}
