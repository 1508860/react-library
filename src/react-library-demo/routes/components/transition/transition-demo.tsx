import {
	ReactLibraryComponentsTransitionBorderRadiusDemo,
	ReactLibraryComponentsTransitionFadeDemo,
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
			<ReactLibraryComponentsTransitionFadeDemo key="fade" />
			<ReactLibraryComponentsTransitionPulseDemo key="pulse" />
			<ReactLibraryComponentsTransitionRotateDemo key="rotate" />
			<ReactLibraryComponentsTransitionRotateIndefiniteDemo key="rotate-indefinite" />
			<ReactLibraryComponentsTransitionSizeCollapseDemo key="size-collapse" />
			<ReactLibraryComponentsTransitionSizeDemo key="size" />
		</>
	);
}
