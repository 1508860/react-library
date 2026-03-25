import {
	ReactLibraryComponentsTransitionFadeDemo,
	ReactLibraryComponentsTransitionRotateIndefiniteDemo,
	ReactLibraryComponentsTransitionPulseDemo,
	ReactLibraryComponentsTransitionSizeDemo
} from "./components";

export function ReactLibraryComponentsTransitionDemo() {
	return (
		<>
			<ReactLibraryComponentsTransitionFadeDemo key="fade" />
			<ReactLibraryComponentsTransitionPulseDemo key="pulse" />
			<ReactLibraryComponentsTransitionRotateIndefiniteDemo key="rotate-indefinite" />
			<ReactLibraryComponentsTransitionSizeDemo key="size" />
		</>
	);
}
