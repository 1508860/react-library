import { useState, type ReactElement } from "react";

import {
	Orientation,
	UseArrayIncrementDirection,
	useArrayIncrementState,
	type ArrayMinLength2,
	type IDirection,
	type ITiming
} from "@react-library/common";
import {
	TransitionSize,
	TransitionSizeDirection,
	TransitionTiming,
	type TransitionSizeUnits
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

export function ReactLibraryComponentsTransitionSizeDemo() {

	const [directions] = useState<Array<TransitionSizeDirection>>(() => Object.values(TransitionSizeDirection));
	const [timings] = useState<Array<TransitionTiming>>(() => Object.values(TransitionTiming));

	return (
		<DemoSection title="Size">
			{directions.map(direction =>
				timings.map(timing =>
					<DemoItem
						config={[
							{ key: "Direction", value: direction },
							{ key: "Timing", value: timing }
						]}
						key={timing}
					>
						<ReactLibraryComponentsTransitionSizeDemoItem
							direction={direction}
							key={`${timing}`}
							timing={timing}
						/>
					</DemoItem>
				)
			)}
		</DemoSection>
	);
}

function ReactLibraryComponentsTransitionSizeDemoItem(props: (IDirection<TransitionSizeDirection> & ITiming<TransitionTiming>)): ReactElement {

	const { state: size } = useArrayIncrementState<TransitionSizeUnits, ArrayMinLength2<TransitionSizeUnits>>(
		[TRANSITION_DEMO_SIZE_PX / 4, TRANSITION_DEMO_SIZE_PX / 2],
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
			<TransitionSize
				direction={props.direction}
				durationMs={TRANSITION_DEMO_TRANSITION_DURATION_MS}
				height={(props.direction === TransitionSizeDirection.All || props.direction === TransitionSizeDirection.Vertical) ? size : TRANSITION_DEMO_SIZE_PX}
				key={`${props.direction}-${props.timing}`}
				timing={props.timing}
				width={(props.direction === TransitionSizeDirection.All || props.direction === TransitionSizeDirection.Horizontal) ? size : TRANSITION_DEMO_SIZE_PX}
			>
				<DemoContent
					align={DemoContentAlign.Center}
					childrenType={DemoContentChildren.Any}
					colourScheme={DemoContentColourScheme.Secondary}
					height={"100%"}
					justify={DemoContentJustify.Center}
					orientation={Orientation.Vertical}
					overflow={DemoContentOverflow.Auto}
					width={"100%"}
				/>
			</TransitionSize>
		</DemoContent>
	);
}
