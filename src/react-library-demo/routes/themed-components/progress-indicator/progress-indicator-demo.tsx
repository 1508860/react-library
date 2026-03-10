import { useCallback, useState } from "react";

import {
	Orientation,
	SCALE_PERCENT_MAX,
	ScalePercent,
	UseArrayIncrementDirection,
	useArrayIncrementState,
	type ArrayMinLength2
} from "@react-library/common";
import {
	ProgressIndicator,
	ProgressIndicatorBehaviour,
	ProgressIndicatorPosition,
	ProgressIndicatorShape
} from "@react-library/themed-components";

import {
	DemoContent,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoItem,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsProgressIndicatorDemo() {

	const { state: determinateState } = useArrayIncrementState<ScalePercent, ArrayMinLength2<ScalePercent>>(
		[ScalePercent[0], ScalePercent[20], ScalePercent[40], ScalePercent[60], ScalePercent[100]],
		{
			intervalProps: {
				direction: UseArrayIncrementDirection.Forwards,
				intervalMs: 1000
			}
		}
	);

	const [determinateCircleCompleted, setDeterminateCircleCompleted] = useState<boolean>(() => false);
	const handleIncrementDeterminateCircleCompleted = useCallback(() => setDeterminateCircleCompleted(true), []);
	const [determinateFlatCompleted, setDeterminateFlatCompleted] = useState<boolean>(() => false);
	const handleIncrementDeterminateFlatCompleted = useCallback(() => setDeterminateFlatCompleted(true), []);

	return (
		<>
			<DemoSection
				key="determinate"
				title="Progess Indicator - Determinate"
			>
				<DemoItem
					key="circle"
					label={`Circle - ${determinateCircleCompleted}`}
				>
					<DemoContent
						childrenType={DemoContentChildren.Any}
						colourScheme={DemoContentColourScheme.Primary}
						height={300}
						includeRenderCounter={true}
						justify={DemoContentJustify.Center}
						orientation={Orientation.Vertical}
						width={300}
					>
						<ProgressIndicator
							behaviour={ProgressIndicatorBehaviour.Determinate}
							denominator={SCALE_PERCENT_MAX}
							numerator={determinateState}
							onComplete={handleIncrementDeterminateCircleCompleted}
							position={ProgressIndicatorPosition.Fill}
							shape={ProgressIndicatorShape.Circle}
						/>
					</DemoContent>
				</DemoItem>
				<DemoItem
					key="flat"
					label={`Flat - ${determinateFlatCompleted}`}
				>
					<DemoContent
						childrenType={DemoContentChildren.Any}
						colourScheme={DemoContentColourScheme.Primary}
						height={300}
						includeRenderCounter={true}
						justify={DemoContentJustify.Center}
						orientation={Orientation.Vertical}
						width={300}
					>
						<ProgressIndicator
							behaviour={ProgressIndicatorBehaviour.Determinate}
							denominator={SCALE_PERCENT_MAX}
							numerator={determinateState}
							onComplete={handleIncrementDeterminateFlatCompleted}
							position={ProgressIndicatorPosition.Fill}
							shape={ProgressIndicatorShape.Flat}
						/>
					</DemoContent>
				</DemoItem>
			</DemoSection>
			<DemoSection
				key="indeterminate"
				title="Progess Indicator - Indeterminate"
			>
				<DemoItem
					key="circle"
					label="Circle"
				>
					<DemoContent
						childrenType={DemoContentChildren.Any}
						colourScheme={DemoContentColourScheme.Primary}
						height={300}
						includeRenderCounter={true}
						justify={DemoContentJustify.Center}
						orientation={Orientation.Vertical}
						width={300}
					>
						<ProgressIndicator
							behaviour={ProgressIndicatorBehaviour.Indeterminate}
							position={ProgressIndicatorPosition.Fill}
							shape={ProgressIndicatorShape.Circle}
						/>
					</DemoContent>
				</DemoItem>
				<DemoItem
					key="flat"
					label="Flat"
				>
					<DemoContent
						childrenType={DemoContentChildren.Any}
						colourScheme={DemoContentColourScheme.Primary}
						height={300}
						includeRenderCounter={true}
						justify={DemoContentJustify.Center}
						orientation={Orientation.Vertical}
						width={300}
					>
						<ProgressIndicator
							behaviour={ProgressIndicatorBehaviour.Indeterminate}
							position={ProgressIndicatorPosition.Fill}
							shape={ProgressIndicatorShape.Flat}
						/>
					</DemoContent>
				</DemoItem>
			</DemoSection>
		</>
	);
}
