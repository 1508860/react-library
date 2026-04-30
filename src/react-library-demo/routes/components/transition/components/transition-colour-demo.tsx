import { useState, type ReactElement } from "react";

import {
	HexRgb,
	UseArrayIncrementDirection,
	useArrayIncrementState,
	type ArrayMinLength2,
	type Colour,
	type IColours,
	type ITiming
} from "@react-library/common";
import { TransitionColour, TransitionTiming } from "@react-library/components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

import { TRANSITION_DEMO_SIZE_PX, TRANSITION_DEMO_TRANSITION_DURATION_MS } from "../constants";

export function ReactLibraryComponentsTransitionColourDemo() {

	const [timings] = useState<Array<TransitionTiming>>(() => Object.values(TransitionTiming));
	const [colours] = useState<ArrayMinLength2<Colour>>(() => [
		new HexRgb("FF", "00", "00"),
		new HexRgb("00", "FF", "00"),
		new HexRgb("00", "00", "FF")
	]);

	return (
		<DemoSection title="Colour">
			{timings.map(timing => (
				<DemoItem
					config={[
						{ key: "Timing", value: timing }
					]}
					key={timing}
				>
					<ReactLibraryComponentsTransitionColourDemoItem
						colours={colours}
						timing={timing}
					/>
				</DemoItem>
			))}
		</DemoSection>
	);
}

function ReactLibraryComponentsTransitionColourDemoItem(props: (IColours<ArrayMinLength2<Colour>> & ITiming<TransitionTiming>)): ReactElement {

	const { state } = useArrayIncrementState<Colour, ArrayMinLength2<Colour>>(
		props.colours,
		{
			intervalProps: {
				direction: UseArrayIncrementDirection.Forwards,
				intervalMs: TRANSITION_DEMO_TRANSITION_DURATION_MS
			}
		}
	);

	return (
		<TransitionColour
			colour={state}
			durationMs={TRANSITION_DEMO_TRANSITION_DURATION_MS}
			height={TRANSITION_DEMO_SIZE_PX}
			timing={props.timing}
			width={TRANSITION_DEMO_SIZE_PX}
		/>
	);
}
