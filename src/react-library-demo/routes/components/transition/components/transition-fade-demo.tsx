import { Orientation, useArrayIncrementState, type ArrayMinLength2 } from "@react-library/common";
import { TransitionFade, TransitionFadeDirection } from "@react-library/components";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow
} from "@react-library-demo/shared";

import { TRANSITION_DEMO_TRANSITION_DURATION_MS } from "../constants";
import { TRANSITION_DEMO_SIZE_PX } from "../constants/transition-demo-size.const";

export function ReactLibraryComponentsTransitionFadeDemo() {

	const { state, increment } = useArrayIncrementState<TransitionFadeDirection, ArrayMinLength2<TransitionFadeDirection>>(
		[TransitionFadeDirection.Out, TransitionFadeDirection.In],
		{}
	);

	return (
		<TransitionFade
			direction={state}
			durationMs={TRANSITION_DEMO_TRANSITION_DURATION_MS}
			onComplete={increment}
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
