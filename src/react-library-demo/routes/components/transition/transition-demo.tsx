import {
	ReactLibraryComponentsTransitionBorderRadiusDemo,
	ReactLibraryComponentsTransitionFadeDemo,
	ReactLibraryComponentsTransitionPulseDemo,
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
			<ReactLibraryComponentsTransitionRotateIndefiniteDemo key="rotate-indefinite" />
			<ReactLibraryComponentsTransitionSizeCollapseDemo key="size-collapse" />
			<ReactLibraryComponentsTransitionSizeDemo key="size" />
		</>
	);
}
