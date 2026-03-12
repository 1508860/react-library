import { useCallback, useState } from "react";

import {
	generateGuid,
	HexRgba,
	Orientation,
	StyleOpacityToHexColourMap,
	type Colour,
	type Guid
} from "@react-library/common";
import { TransitionPulse, TransitionPulseTiming } from "@react-library/components";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow
} from "@react-library-demo/shared";

import { TRANSITION_DEMO_SIZE_PX, TRANSITION_DEMO_TRANSITION_DURATION_MS } from "../constants";

export function ReactLibraryComponentsTransitionPulseDemo() {

	const [colour] = useState<Colour>(() => new HexRgba("00", "00", "00", StyleOpacityToHexColourMap[0.5]));

	const [transitionPulseKey, setTransitionPulseKey] = useState<Guid>(() => generateGuid());
	const handleSetTransitionPulseKey = useCallback(() => setTransitionPulseKey(generateGuid()), []);

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
			<TransitionPulse
				colour={colour}
				durationMs={TRANSITION_DEMO_TRANSITION_DURATION_MS}
				inset={{
					bottom: TRANSITION_DEMO_SIZE_PX / 2,
					left: TRANSITION_DEMO_SIZE_PX / 2,
					right: TRANSITION_DEMO_SIZE_PX / 2,
					top: TRANSITION_DEMO_SIZE_PX / 2
				}}
				key={transitionPulseKey}
				onComplete={handleSetTransitionPulseKey}
				timing={TransitionPulseTiming.EaseInOut}
			/>
		</DemoContent>
	);
}
