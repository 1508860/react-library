import { useCallback, useState, type ReactElement } from "react";

import {
	HexRgba,
	Orientation,
	StyleOpacityToHexColourMap,
	type Colour,
	type ITiming
} from "@react-library/common";
import {
	resolveTransitionPulseInsetFromSize,
	TransitionPulse,
	TransitionPulseColourProvider,
	TransitionPulseInsetDataProvider,
	TransitionTiming,
	type TransitionPulseInsetData
} from "@react-library/components";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow,
	DemoItem,
	DemoSection
} from "@react-library-demo/shared";

import { TRANSITION_DEMO_SIZE_PX, TRANSITION_DEMO_TRANSITION_DURATION_MS } from "../constants";

export function ReactLibraryComponentsTransitionPulseDemo() {

	const [timings] = useState<Array<TransitionTiming>>(() => Object.values(TransitionTiming));

	return (
		<DemoSection title="Pulse">
			{timings.map(timing => (
				<DemoItem
					config={[
						{ key: "Timing", value: timing }
					]}
					key={timing}
				>
					<ReactLibraryComponentsTransitionPulseDemoItem timing={timing} />
				</DemoItem>
			))}
		</DemoSection>
	);
}

function ReactLibraryComponentsTransitionPulseDemoItem(props: ITiming<TransitionTiming>): ReactElement {

	const [colour] = useState<Colour>(() => new HexRgba("00", "00", "00", StyleOpacityToHexColourMap[0.5]));

	const [insetData, setInsetData] = useState<TransitionPulseInsetData>(() => resolveTransitionPulseInsetFromSize(TRANSITION_DEMO_SIZE_PX));
	const handleSetTransitionPulseKey = useCallback(() => setInsetData(resolveTransitionPulseInsetFromSize(TRANSITION_DEMO_SIZE_PX)), []);

	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Any}
			colourScheme={DemoContentColourScheme.Primary}
			height={TRANSITION_DEMO_SIZE_PX}
			includeRenderCounter={true}
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Hidden}
			width={TRANSITION_DEMO_SIZE_PX}
		>
			<TransitionPulseColourProvider colour={colour}>
				<TransitionPulseInsetDataProvider insetData={insetData}>
					<TransitionPulse
						durationMs={TRANSITION_DEMO_TRANSITION_DURATION_MS}
						onComplete={handleSetTransitionPulseKey}
						timing={props.timing}
					/>
				</TransitionPulseInsetDataProvider>
			</TransitionPulseColourProvider>
		</DemoContent>
	);
}
