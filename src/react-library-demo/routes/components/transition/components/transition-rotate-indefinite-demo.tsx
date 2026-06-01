import { Orientation, type IDirection, type ITiming } from "@react-library/common";
import {
	TransitionRotateIndefinite,
	TransitionRotateIndefiniteDirection,
	TransitionTiming
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
import { useState } from "react";

export function ReactLibraryComponentsTransitionRotateIndefiniteDemo() {

	const [directions] = useState<Array<TransitionRotateIndefiniteDirection>>(() => Object.values(TransitionRotateIndefiniteDirection));
	const [timings] = useState<Array<TransitionTiming>>(() => Object.values(TransitionTiming));

	return (
		<DemoSection title="RotateIndefinite">
			{
				directions.map(direction => (
					timings.map(timing => (
						<DemoItem
							config={[
								{ key: "Direction", value: direction },
								{ key: "Timing", value: timing }
							]}
							key={timing}
						>
							<ReactLibraryComponentsTransitionRotateIndefiniteDemoItem
								direction={direction}
								timing={timing}
							/>
						</DemoItem>
					))
				))}
		</DemoSection>
	);
}

function ReactLibraryComponentsTransitionRotateIndefiniteDemoItem(props: (
	IDirection<TransitionRotateIndefiniteDirection> &
	ITiming<TransitionTiming>
)) {
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
				direction={props.direction}
				fullRotationDurationMs={TRANSITION_DEMO_TRANSITION_DURATION_MS}
				timing={props.timing}
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
