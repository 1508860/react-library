import { useState, type ReactElement } from "react";

import {
	Orientation,
	UseArrayIncrementDirection,
	useArrayIncrementState,
	type ArrayMinLength2,
	type IBorderRadius,
	type ITiming
} from "@react-library/common";
import {
	TransitionBorderRadius,
	TransitionTiming,
	type TransitionBorderRadiusUnits
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

export function ReactLibraryComponentsTransitionBorderRadiusDemo() {

	const [timings] = useState<Array<TransitionTiming>>(() => Object.values(TransitionTiming));

	const { state: borderRadius } = useArrayIncrementState<TransitionBorderRadiusUnits, ArrayMinLength2<TransitionBorderRadiusUnits>>(
		[TRANSITION_DEMO_SIZE_PX / 8, TRANSITION_DEMO_SIZE_PX / 4],
		{
			intervalProps: {
				direction: UseArrayIncrementDirection.Forwards,
				intervalMs: TRANSITION_DEMO_TRANSITION_DURATION_MS
			}
		}
	);

	return (
		<DemoSection title="Border Radius">
			{timings.map(timing =>
				<DemoItem
					config={[
						{ key: "Timing", value: timing }
					]}
					key={timing}
				>
					<ReactLibraryComponentsTransitionBorderRadiusDemoItem
						borderRadius={borderRadius}
						key={`${timing}`}
						timing={timing}
					/>
				</DemoItem>
			)}
		</DemoSection>
	);
}

function ReactLibraryComponentsTransitionBorderRadiusDemoItem(props: (IBorderRadius<TransitionBorderRadiusUnits> & ITiming<TransitionTiming>)): ReactElement {
	return (
		<TransitionBorderRadius
			borderBottomLeftRadius={props.borderRadius}
			borderBottomRightRadius={props.borderRadius}
			borderTopLeftRadius={props.borderRadius}
			borderTopRightRadius={props.borderRadius}
			durationMs={TRANSITION_DEMO_TRANSITION_DURATION_MS}
			timing={props.timing}
		>
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Any}
				colourScheme={DemoContentColourScheme.Primary}
				height={TRANSITION_DEMO_SIZE_PX}
				justify={DemoContentJustify.Center}
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				width={TRANSITION_DEMO_SIZE_PX}
			/>
		</TransitionBorderRadius>
	);
}
