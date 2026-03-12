import { Orientation } from "@react-library/common";
import {
	TransitionRotateIndefinite,
	TransitionRotateIndefiniteDirection,
	TransitionRotateIndefiniteTiming
} from "@react-library/components";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow
} from "@react-library-demo/shared";

import { TRANSITION_DEMO_SIZE_PX, TRANSITION_DEMO_TRANSITION_DURATION_MS } from "../constants";

export function ReactLibraryComponentsTransitionIndefiniteDemo() {

	return (
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
		>
			<TransitionRotateIndefinite
				direction={TransitionRotateIndefiniteDirection.Forwards}
				fullRotationDurationMs={TRANSITION_DEMO_TRANSITION_DURATION_MS}
				timing={TransitionRotateIndefiniteTiming.Linear}
			>
				<DemoContent
					align={DemoContentAlign.Center}
					childrenType={DemoContentChildren.Text}
					colourScheme={DemoContentColourScheme.Secondary}
					height={TRANSITION_DEMO_SIZE_PX / 2}
					includeRenderCounter={true}
					justify={DemoContentJustify.Center}
					orientation={Orientation.Vertical}
					overflow={DemoContentOverflow.Auto}
					text="Rotating Content"
					width={TRANSITION_DEMO_SIZE_PX / 2}
				/>
			</TransitionRotateIndefinite>
		</DemoContent>
	);
}
