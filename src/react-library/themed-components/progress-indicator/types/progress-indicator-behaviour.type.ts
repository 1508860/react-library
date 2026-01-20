import type { IBehaviour, IOnComplete, IPosition, IRatio, IShape } from "@react-library/common";

import type { ProgressIndicatorBehaviour } from "../enums/progress-indicator-behaviour.type";
import type { ProgressIndicatorPosition } from "../enums/progress-indicator-position.type";
import type { ProgressIndicatorShape } from "../enums/progress-indicator-shape.type";

/**
 * Describes base type for progress indicator behaviour
 */
type ProgressIndicatorBehaviourBase<TProgressIndicatorBehaviour extends ProgressIndicatorBehaviour> = (
	IBehaviour<TProgressIndicatorBehaviour> &
	IPosition<ProgressIndicatorPosition> &
	IShape<ProgressIndicatorShape>
);

/**
 * Describes progress indicator behaviour of determinate
 */
export type ProgressIndicatorBehaviourDeterminate = (
	Partial<IOnComplete<void, void>> &
	ProgressIndicatorBehaviourBase<typeof ProgressIndicatorBehaviour.Determinate> &
	IRatio
);

/**
 * Describes progress indicator behaviour of indeterminate
 */
export type ProgressIndicatorBehaviourIndeterminate = (
	ProgressIndicatorBehaviourBase<typeof ProgressIndicatorBehaviour.Indeterminate>
);

/**
 * Describes all types of progress indicator behaviour
 */
export type ProgressIndicatorBehaviourAll = (
	ProgressIndicatorBehaviourDeterminate |
	ProgressIndicatorBehaviourIndeterminate
);
