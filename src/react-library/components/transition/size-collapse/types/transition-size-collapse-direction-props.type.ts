
import type { IDirection, IHeight, IWidth } from "@react-library/common";

import type { TransitionSizeCollapseDirection } from "../enums/transition-size-collapse-direction.type";
import type { TransitionSizeCollapseUnits } from "./transition-size-collapse-units.type";


type TransitionSizeCollapseDirectionPropsBase<TTransitionSizeCollapseDirection extends TransitionSizeCollapseDirection> = (
	IDirection<TTransitionSizeCollapseDirection>
);

/**
 * Props for transition size collapse component with a direction of {@link TransitionSizeCollapseDirection.All}
 */
export type TransitionSizeCollapseDirectionPropsAll = (
	TransitionSizeCollapseDirectionPropsBase<typeof TransitionSizeCollapseDirection.All>
);

/**
 * Props for transition size collapse component with a direction of {@link TransitionSizeCollapseDirection.Horizontal}
 */
export type TransitionSizeCollapseDirectionPropsHorizontal = (
	Partial<IHeight<TransitionSizeCollapseUnits | undefined>> &
	TransitionSizeCollapseDirectionPropsBase<typeof TransitionSizeCollapseDirection.Horizontal>
);

/**
 * Props for transition size collapse component with a direction of {@link TransitionSizeCollapseDirection.Vertical}
 */
export type TransitionSizeCollapseDirectionPropsVertical = (
	TransitionSizeCollapseDirectionPropsBase<typeof TransitionSizeCollapseDirection.Vertical> &
	Partial<IWidth<TransitionSizeCollapseUnits | undefined>>
);

/**
 * Props for transition size collapse component direction based on {@link TransitionSizeCollapseDirection}
 */
export type TransitionSizeCollapseDirectionProps = (
	TransitionSizeCollapseDirectionPropsAll |
	TransitionSizeCollapseDirectionPropsHorizontal |
	TransitionSizeCollapseDirectionPropsVertical
);
