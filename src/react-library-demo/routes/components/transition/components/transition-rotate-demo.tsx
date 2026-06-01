import {
	Orientation,
	ScaleDegrees,
	UseArrayIncrementDirection,
	useArrayIncrementState,
	type ArrayMinLength2,
	type ITiming,
	type ScaleDegreesState
} from "@react-library/common";
import {
	TransitionRotate,
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

export function ReactLibraryComponentsTransitionRotateDemo() {

	const [timings] = useState<Array<TransitionTiming>>(() => Object.values(TransitionTiming));

	return (
		<DemoSection title="Rotate">
			{
				timings.map(timing => (
					<DemoItem
						config={[
							{ key: "Timing", value: timing }
						]}
						key={timing}
					>
						<ReactLibraryComponentsTransitionRotateDemoItem
							timing={timing}
						/>
					</DemoItem>
				))}
		</DemoSection>
	);
}

function ReactLibraryComponentsTransitionRotateDemoItem(props: ITiming<TransitionTiming>) {

	const { state: rotate } = useArrayIncrementState<ScaleDegreesState, ArrayMinLength2<ScaleDegreesState>>(
		[
			{
				degrees: ScaleDegrees[360],
				rotationCount: 0
			},
			{
				degrees: ScaleDegrees[-360],
				rotationCount: 0
			}
		],
		{
			intervalProps: {
				direction: UseArrayIncrementDirection.Forwards,
				intervalMs: TRANSITION_DEMO_TRANSITION_DURATION_MS
			}
		}
	);

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
			<TransitionRotate
				durationMs={TRANSITION_DEMO_TRANSITION_DURATION_MS}
				rotate={rotate}
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
			</TransitionRotate>
		</DemoContent>
	);
}
