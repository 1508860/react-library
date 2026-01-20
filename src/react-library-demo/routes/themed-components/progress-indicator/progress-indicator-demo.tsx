import { useCallback, useState } from "react";

import {
	SCALE_PERCENT_MAX,
	ScalePercent,
	useArrayIncrementIntervalState,
	type ArrayMinLength2
} from "@react-library/common";
import {
	ProgressIndicator,
	ProgressIndicatorBehaviour,
	ProgressIndicatorPosition,
	ProgressIndicatorShape
} from "@react-library/themed-components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsProgressIndicatorDemo() {

	const [determinateState] = useArrayIncrementIntervalState<ScalePercent, ArrayMinLength2<ScalePercent>>(
		[ScalePercent[0], ScalePercent[20], ScalePercent[40], ScalePercent[60], ScalePercent[100]],
		1000
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
					<div
						style={{
							backgroundColor: "coral",
							height: 300,
							width: 300
						}}
					>
						<ProgressIndicator
							behaviour={ProgressIndicatorBehaviour.Determinate}
							denominator={SCALE_PERCENT_MAX}
							numerator={determinateState}
							onComplete={handleIncrementDeterminateCircleCompleted}
							position={ProgressIndicatorPosition.Fill}
							shape={ProgressIndicatorShape.Circle}
						/>
					</div>
				</DemoItem>
				<DemoItem
					key="flat"
					label={`Flat - ${determinateFlatCompleted}`}
				>
					<div
						style={{
							backgroundColor: "coral",
							height: 300,
							width: 300
						}}
					>
						<ProgressIndicator
							behaviour={ProgressIndicatorBehaviour.Determinate}
							denominator={SCALE_PERCENT_MAX}
							numerator={determinateState}
							onComplete={handleIncrementDeterminateFlatCompleted}
							position={ProgressIndicatorPosition.Fill}
							shape={ProgressIndicatorShape.Flat}
						/>
					</div>
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
					<div
						style={{
							backgroundColor: "coral",
							height: 300,
							width: 300
						}}
					>
						<ProgressIndicator
							behaviour={ProgressIndicatorBehaviour.Indeterminate}
							position={ProgressIndicatorPosition.Fill}
							shape={ProgressIndicatorShape.Circle}
						/>
					</div>
				</DemoItem>
				<DemoItem
					key="flat"
					label="Flat"
				>
					<div
						style={{
							backgroundColor: "coral",
							height: 300,
							width: 300
						}}
					>
						<ProgressIndicator
							behaviour={ProgressIndicatorBehaviour.Indeterminate}
							position={ProgressIndicatorPosition.Fill}
							shape={ProgressIndicatorShape.Flat}
						/>
					</div>
				</DemoItem>
			</DemoSection>
		</>
	);
}
