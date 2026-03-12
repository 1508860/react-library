import {
	DemoItem,
	DemoSection
} from "@react-library-demo/shared";

import {
	ReactLibraryComponentsTransitionFadeDemo,
	ReactLibraryComponentsTransitionIndefiniteDemo,
	ReactLibraryComponentsTransitionPulseDemo
} from "./components";

export function ReactLibraryComponentsTransitionDemo() {
	return (
		<DemoSection title="Transition">
			<DemoItem
				key="fade"
				label="Fade"
			>
				<ReactLibraryComponentsTransitionFadeDemo />
			</DemoItem>
			<DemoItem
				key="pulse"
				label="Pulse"
			>
				<ReactLibraryComponentsTransitionPulseDemo />
			</DemoItem>
			<DemoItem
				key="rotate-indefinite"
				label="Rotate Indefinite"
			>
				<ReactLibraryComponentsTransitionIndefiniteDemo />
			</DemoItem>
		</DemoSection>
	);
}
