import { useState, type ReactElement } from "react";

import {
	Orientation,
	UseArrayIncrementDirection,
	useArrayIncrementState,
	type ArrayMinLength2,
	type ITiming,
	type Size
} from "@react-library/common";
import {
	TransitionInset,
	TransitionTiming,
	type TransitionPropsInsetAll
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

export function ReactLibraryComponentsTransitionInsetDemo() {

	const [timings] = useState<Array<TransitionTiming>>(() => Object.values(TransitionTiming));

	return (
		<DemoSection title="Inset">
			{timings.map(timing => (
				<DemoItem
					config={[
						{ key: "Timing", value: timing }
					]}
					key={timing}
				>
					<ReactLibraryComponentsTransitionInsetDemoItem timing={timing} />
				</DemoItem>
			))}
		</DemoSection>
	);
}

function ReactLibraryComponentsTransitionInsetDemoItem(props: ITiming<TransitionTiming>): ReactElement {

	const [inset] = useState<Size>(() => TRANSITION_DEMO_SIZE_PX / 4);
	const [insetNone] = useState<Size>(() => TRANSITION_DEMO_SIZE_PX / 8);
	const [insets] = useState<ArrayMinLength2<TransitionPropsInsetAll>>(() => [
		{ bottom: insetNone, left: insetNone, right: insetNone, top: insetNone },
		{ bottom: inset, left: inset, right: inset, top: inset }
	]);

	const { state } = useArrayIncrementState<TransitionPropsInsetAll, ArrayMinLength2<TransitionPropsInsetAll>>(
		insets,
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
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Hidden}
			width={TRANSITION_DEMO_SIZE_PX}
		>
			<TransitionInset
				bottom={state.bottom}
				durationMs={TRANSITION_DEMO_TRANSITION_DURATION_MS}
				left={state.left}
				right={state.right}
				timing={props.timing}
				top={state.top}
			>
				<DemoContent
					align={DemoContentAlign.Center}
					childrenType={DemoContentChildren.Any}
					colourScheme={DemoContentColourScheme.Secondary}
					height="100%"
					justify={DemoContentJustify.Center}
					orientation={Orientation.Vertical}
					overflow={DemoContentOverflow.Hidden}
					width="100%"
				/>
			</TransitionInset>
		</DemoContent>
	);
}
