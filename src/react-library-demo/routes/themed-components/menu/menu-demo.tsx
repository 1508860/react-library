import {
	ReactLibraryThemedComponentsMenuSelectDemo,
	ReactLibraryThemedComponentsMenuStandardDemo
} from "./components";

export function ReactLibraryThemedComponentsMenuDemo() {
	return (
		<>
			<ReactLibraryThemedComponentsMenuSelectDemo key="select" />
			<ReactLibraryThemedComponentsMenuStandardDemo key="standard" />
		</>
	);
}
