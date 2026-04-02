import {
	ReactLibraryThemedComponentsTooltipsPlainDemo,
	ReactLibraryThemedComponentsTooltipsTextOverflowDemo,
} from "./components";

export function ReactLibraryThemedComponentsTooltipsDemo() {
	return (
		<>
			<ReactLibraryThemedComponentsTooltipsPlainDemo key="plain" />
			<ReactLibraryThemedComponentsTooltipsTextOverflowDemo key="text-overflow" />
		</>
	);
}
