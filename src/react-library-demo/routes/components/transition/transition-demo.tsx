import {
	ReactLibraryComponentsTransitionFadeDemo,
	ReactLibraryComponentsTransitionRotateIndefiniteDemo,
	ReactLibraryComponentsTransitionPulseDemo,
	ReactLibraryComponentsTransitionSizeDemo,
	ReactLibraryComponentsTransitionBorderRadiusDemo
} from "./components";

export function ReactLibraryComponentsTransitionDemo() {
	return (
		<>
			<ReactLibraryComponentsTransitionBorderRadiusDemo key="border-radius" />
			<ReactLibraryComponentsTransitionFadeDemo key="fade" />
			<ReactLibraryComponentsTransitionPulseDemo key="pulse" />
			<ReactLibraryComponentsTransitionRotateIndefiniteDemo key="rotate-indefinite" />
			<ReactLibraryComponentsTransitionSizeDemo key="size" />
		</>
	);
}
