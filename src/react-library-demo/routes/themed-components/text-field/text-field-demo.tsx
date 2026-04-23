import {
	ReactLibraryThemedComponentsTextFieldPasswordDemo,
	ReactLibraryThemedComponentsTextFieldReadonlyDemo,
	ReactLibraryThemedComponentsTextFieldTextareaDemo,
	ReactLibraryThemedComponentsTextFieldTextDemo
} from "./components";

export function ReactLibraryThemedComponentsTextFieldDemo() {
	return (
		<>
			<ReactLibraryThemedComponentsTextFieldPasswordDemo key="password" />
			<ReactLibraryThemedComponentsTextFieldReadonlyDemo key="readonly" />
			<ReactLibraryThemedComponentsTextFieldTextDemo key="text" />
			<ReactLibraryThemedComponentsTextFieldTextareaDemo key="textarea" />
		</>
	);
}
