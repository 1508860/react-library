import {
	ReactLibraryComponentsTransitionBorderRadiusDemo,
	ReactLibraryComponentsTransitionColourDemo,
	ReactLibraryComponentsTransitionFadeDemo,
	ReactLibraryComponentsTransitionInsetDemo,
	ReactLibraryComponentsTransitionPulseDemo,
	ReactLibraryComponentsTransitionRotateDemo,
	ReactLibraryComponentsTransitionRotateIndefiniteDemo,
	ReactLibraryComponentsTransitionSizeCollapseDemo,
	ReactLibraryComponentsTransitionSizeDemo
} from "./components";

export function ReactLibraryComponentsTransitionDemo() {
	return (
		<>
			<ReactLibraryComponentsTransitionBorderRadiusDemo key="border-radius" />
			<ReactLibraryComponentsTransitionColourDemo key="colour" />
			<ReactLibraryComponentsTransitionFadeDemo key="fade" />
			<ReactLibraryComponentsTransitionInsetDemo key="inset" />
			<ReactLibraryComponentsTransitionPulseDemo key="pulse" />
			<ReactLibraryComponentsTransitionRotateDemo key="rotate" />
			<ReactLibraryComponentsTransitionRotateIndefiniteDemo key="rotate-indefinite" />
			<ReactLibraryComponentsTransitionSizeCollapseDemo key="size-collapse" />
			<ReactLibraryComponentsTransitionSizeDemo key="size" />
		</>
	);
}
