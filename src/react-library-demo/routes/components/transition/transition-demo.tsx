import {
	ReactLibraryComponentsTransitionFadeDemo,
	ReactLibraryComponentsTransitionRotateIndefiniteDemo,
	ReactLibraryComponentsTransitionPulseDemo
} from "./components";

export function ReactLibraryComponentsTransitionDemo() {
	return (
		<>
			<ReactLibraryComponentsTransitionFadeDemo />
			<ReactLibraryComponentsTransitionPulseDemo />
			<ReactLibraryComponentsTransitionRotateIndefiniteDemo />
		</>
	);
}
