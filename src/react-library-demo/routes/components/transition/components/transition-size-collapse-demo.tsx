import { useState, type ReactElement } from "react";

import {
	Orientation,
	UseArrayIncrementDirection,
	useArrayIncrementState,
	type ArrayMinLength2,
	type IDirection,
	type IIsCollapsed,
	type ITiming,
	type SizePx
} from "@react-library/common";
import {
	TransitionSizeCollapse,
	TransitionSizeCollapseDirection,
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

export function ReactLibraryComponentsTransitionSizeCollapseDemo() {

	const [directions] = useState<Array<TransitionSizeCollapseDirection>>(() => Object.values(TransitionSizeCollapseDirection));
	const [timings] = useState<Array<TransitionTiming>>(() => Object.values(TransitionTiming));

	const { state: isCollapsed } = useArrayIncrementState<boolean, ArrayMinLength2<boolean>>(
		[false, true],
		{
			intervalProps: {
				direction: UseArrayIncrementDirection.Forwards,
				intervalMs: TRANSITION_DEMO_TRANSITION_DURATION_MS
			}
		}
	);

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
						<ReactLibraryComponentsTransitionSizeCollapseDemoItem
							direction={direction}
							isCollapsed={isCollapsed}
							key={`${timing}`}
							timing={timing}
						/>
					</DemoItem>
				)
			)}
		</DemoSection>
	);
}

function ReactLibraryComponentsTransitionSizeCollapseDemoItem(
	props: (
		IDirection<TransitionSizeCollapseDirection> &
		IIsCollapsed<boolean> &
		ITiming<TransitionTiming>
	)
): ReactElement {

	const [contentSize] = useState<SizePx>(() => TRANSITION_DEMO_SIZE_PX / 2);

	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Any}
			colourScheme={DemoContentColourScheme.Primary}
			height={TRANSITION_DEMO_SIZE_PX}
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Auto}
			width={TRANSITION_DEMO_SIZE_PX}
		>
			<TransitionSizeCollapse
				direction={props.direction}
				durationMs={TRANSITION_DEMO_TRANSITION_DURATION_MS}
				timing={props.timing}
				isCollapsed={props.isCollapsed}
			>
				<DemoContent
					align={DemoContentAlign.Center}
					childrenType={DemoContentChildren.Any}
					colourScheme={DemoContentColourScheme.Secondary}
					height={contentSize}
					justify={DemoContentJustify.Center}
					orientation={Orientation.Vertical}
					overflow={DemoContentOverflow.Auto}
					width={contentSize}
				/>
			</TransitionSizeCollapse>
		</DemoContent>
	);
}
