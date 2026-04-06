import {
	ReactLibraryThemedComponentsTooltipsPlainDemo,
	ReactLibraryThemedComponentsTooltipsRichDemo,
	ReactLibraryThemedComponentsTooltipsTextOverflowDemo,
} from "./components";

export function ReactLibraryThemedComponentsTooltipsDemo() {
	return (
		<>
			<ReactLibraryThemedComponentsTooltipsPlainDemo key="plain" />
			<ReactLibraryThemedComponentsTooltipsRichDemo key="rich" />
			<ReactLibraryThemedComponentsTooltipsTextOverflowDemo key="text-overflow" />
		</>
	);
}
