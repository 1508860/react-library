import type { IDegrees, IRotationCount } from "../../../interfaces";

import type { ScaleDegrees } from "../enums/scale-degrees.type";

/**
 * Type to define a rotation count (+ve / -ve) and how many {@link ScaleDegrees} though the next rotation
 */
export type ScaleDegreesState = (
	IDegrees<ScaleDegrees> &
	IRotationCount<number>
)
