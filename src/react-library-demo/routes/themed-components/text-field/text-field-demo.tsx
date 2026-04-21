import {
	ReactLibraryThemedComponentsTextFieldReadonlyDemo,
	ReactLibraryThemedComponentsTextFieldTextDemo
} from "./components";

export function ReactLibraryThemedComponentsTextFieldDemo() {
	return (
		<>
			<ReactLibraryThemedComponentsTextFieldReadonlyDemo key="readonly" />
			<ReactLibraryThemedComponentsTextFieldTextDemo key="text" />
		</>
	);
}
