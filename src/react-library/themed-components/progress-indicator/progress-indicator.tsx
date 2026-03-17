import { ProgressIndicatorCircleDeterminate } from "./components/progress-indicator-circle-determinate";
import { ProgressIndicatorCircleIndeterminate } from "./components/progress-indicator-circle-indeterminate";
import { ProgressIndicatorContainer } from "./components/progress-indicator-container";
import { ProgressIndicatorFlatDeterminate } from "./components/progress-indicator-flat-determinate";
import { ProgressIndicatorFlatIndeterminate } from "./components/progress-indicator-flat-indeterminate";
import { ProgressIndicatorBehaviour } from "./enums/progress-indicator-behaviour.type";
import { ProgressIndicatorShape } from "./enums/progress-indicator-shape.type";
import type { ProgressIndicatorProps } from "./types/progress-indicator-props.type";

/**
 * Component to handle progress indicators
 * @param props
 */
export function ProgressIndicator(props: ProgressIndicatorProps) {

	return (
		<ProgressIndicatorContainer position={props.position}>
			{
				(props.shape === ProgressIndicatorShape.Circle) ?
					(
						(props.behaviour === ProgressIndicatorBehaviour.Determinate) ?
							<ProgressIndicatorCircleDeterminate
								behaviour={props.behaviour}
								denominator={props.denominator}
								key={`${props.shape}-${props.behaviour}`}
								numerator={props.numerator}
								onComplete={props.onComplete}
								position={props.position}
								shape={props.shape}
							/> :
							<ProgressIndicatorCircleIndeterminate
								key={`${props.shape}-${props.behaviour}`}
							/>
					) :
					(
						(props.behaviour === ProgressIndicatorBehaviour.Determinate) ?
							<ProgressIndicatorFlatDeterminate
								behaviour={props.behaviour}
								denominator={props.denominator}
								key={`${props.shape}-${props.behaviour}`}
								numerator={props.numerator}
								onComplete={props.onComplete}
								position={props.position}
								shape={props.shape}
							/> :
							<ProgressIndicatorFlatIndeterminate
								behaviour={props.behaviour}
								key={`${props.shape}-${props.behaviour}`}
								position={props.position}
								shape={props.shape}
							/>
					)
			}
		</ProgressIndicatorContainer>
	);
}
