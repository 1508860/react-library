import { useState, type ReactElement } from "react";

import {
	Orientation,
	useArrayIncrementState,
	type ArrayMinLength2,
	type ITiming
} from "@react-library/common";
import {
	TransitionFade,
	TransitionFadeDirection,
	TransitionFadeTiming
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

export function ReactLibraryComponentsTransitionFadeDemo() {

	const [timings] = useState<Array<TransitionFadeTiming>>(() => Object.values(TransitionFadeTiming));

	return (
		<DemoSection title="Fade">
			{timings.map(timing => (
				<DemoItem
					config={[
						{ key: "Timing", value: timing }
					]}
					key={timing}
				>
					<ReactLibraryComponentsTransitionFadeDemoItem timing={timing} />
				</DemoItem>
			))}
		</DemoSection>
	);
}

function ReactLibraryComponentsTransitionFadeDemoItem(props: ITiming<TransitionFadeTiming>): ReactElement {

	const { state, increment } = useArrayIncrementState<TransitionFadeDirection, ArrayMinLength2<TransitionFadeDirection>>(
		[TransitionFadeDirection.Out, TransitionFadeDirection.In],
		{}
	);

	return (
		<TransitionFade
			direction={state}
			durationMs={TRANSITION_DEMO_TRANSITION_DURATION_MS}
			onComplete={increment}
			timing={props.timing}
		>
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Any}
				colourScheme={DemoContentColourScheme.Primary}
				height={TRANSITION_DEMO_SIZE_PX}
				includeRenderCounter={true}
				justify={DemoContentJustify.Center}
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				width={TRANSITION_DEMO_SIZE_PX}
			/>
		</TransitionFade>
	);
}
