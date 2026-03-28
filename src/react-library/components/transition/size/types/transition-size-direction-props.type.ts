
import type { IDirection, IHeight, IWidth } from "@react-library/common";

import type { TransitionSizeDirection } from "../enums/transition-size-direction.type";
import type { TransitionSizeUnits } from "./transition-size-units.type";


type TransitionSizeDirectionPropsBase<TTransitionSizeDirection extends TransitionSizeDirection> = (
	IDirection<TTransitionSizeDirection>
);

/**
 * Props for transition size component with a direction of {@link TransitionSizeDirection.All}
 */
export type TransitionSizeDirectionPropsAll = (
	IHeight<TransitionSizeUnits> &
	TransitionSizeDirectionPropsBase<typeof TransitionSizeDirection.All> &
	IWidth<TransitionSizeUnits>
);

/**
 * Props for transition size component with a direction of {@link TransitionSizeDirection.Horizontal}
 */
export type TransitionSizeDirectionPropsHorizontal = (
	Partial<IHeight<TransitionSizeUnits | undefined>> &
	TransitionSizeDirectionPropsBase<typeof TransitionSizeDirection.Horizontal> &
	IWidth<TransitionSizeUnits>
);

/**
 * Props for transition size component with a direction of {@link TransitionSizeDirection.Vertical}
 */
export type TransitionSizeDirectionPropsVertical = (
	IHeight<TransitionSizeUnits> &
	TransitionSizeDirectionPropsBase<typeof TransitionSizeDirection.Vertical> &
	Partial<IWidth<TransitionSizeUnits | undefined>>
);

/**
 * Props for transition size component direction based on {@link TransitionSizeDirection}
 */
export type TransitionSizeDirectionProps = (
	TransitionSizeDirectionPropsAll |
	TransitionSizeDirectionPropsHorizontal |
	TransitionSizeDirectionPropsVertical
);
