import { Fragment, useState, type ReactElement } from "react";

import {
	HexRgb,
	Orientation,
	UseArrayIncrementDirection,
	useArrayIncrementState,
	type ArrayMinLength2,
	type IAll,
	type ISingle,
	type IState,
	type ITiming
} from "@react-library/common";
import {
	TransitionBorderRadius,
	TransitionBorderRadiusScope,
	TransitionTiming,
	type TransitionBorderRadiusPropsScopeAll,
	type TransitionBorderRadiusPropsScopeSingle
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

type ReactLibraryComponentsTransitionBorderRadiusDemoScope = (
	IAll<TransitionBorderRadiusPropsScopeAll> &
	ISingle<TransitionBorderRadiusPropsScopeSingle>
);

export function ReactLibraryComponentsTransitionBorderRadiusDemo() {

	const [timings] = useState<Array<TransitionTiming>>(() => Object.values(TransitionTiming));
	const { state } = useArrayIncrementState<
		ReactLibraryComponentsTransitionBorderRadiusDemoScope,
		ArrayMinLength2<ReactLibraryComponentsTransitionBorderRadiusDemoScope>
	>(
		[
			{
				all: {
					scope: TransitionBorderRadiusScope.All,
					style: {
						colour: new HexRgb("00", "00", "FF"),
						radius: TRANSITION_DEMO_SIZE_PX / 8,
						style: "solid",
						width: 5
					}
				},
				single: {
					scope: TransitionBorderRadiusScope.Single,
					style: {
						bottom: {
							colour: new HexRgb("00", "00", "FF"),
							leftRadius: TRANSITION_DEMO_SIZE_PX / 8,
							rightRadius: TRANSITION_DEMO_SIZE_PX / 8,
							style: "solid",
							width: 5
						}
					}
				}
			},
			{
				all: {
					scope: TransitionBorderRadiusScope.All,
					style: {
						colour: new HexRgb("FF", "00", "00"),
						radius: TRANSITION_DEMO_SIZE_PX / 4,
						style: "solid",
						width: 5
					}
				},
				single: {
					scope: TransitionBorderRadiusScope.Single,
					style: {
						bottom: {
							colour: new HexRgb("FF", "00", "00"),
							leftRadius: TRANSITION_DEMO_SIZE_PX / 4,
							rightRadius: TRANSITION_DEMO_SIZE_PX / 4,
							style: "solid",
							width: 5
						}
					}
				}
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
		<DemoSection title="Border Radius">
			{timings.map(timing =>
				<Fragment key={timing}>
					<DemoItem
						config={[
							{ key: "Scope", value: state.all.scope },
							{ key: "Timing", value: timing }
						]}
						key="all"
					>
						<ReactLibraryComponentsTransitionBorderRadiusDemoItem
							key={`all-${timing}`}
							state={state.all}
							timing={timing}
						/>
					</DemoItem>
					<DemoItem
						config={[
							{ key: "Scope", value: state.single.scope },
							{ key: "Timing", value: timing }
						]}
						key="single"
					>
						<ReactLibraryComponentsTransitionBorderRadiusDemoItem
							key={`single-${timing}`}
							state={state.single}
							timing={timing}
						/>
					</DemoItem>
				</Fragment>
			)}
		</DemoSection>
	);
}

function ReactLibraryComponentsTransitionBorderRadiusDemoItem(
	props: (
		IState<TransitionBorderRadiusPropsScopeAll | TransitionBorderRadiusPropsScopeSingle> &
		ITiming<TransitionTiming>
	)
): ReactElement {
	return (
		<TransitionBorderRadius
			scope={props.state.scope}
			style={props.state.style}
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
