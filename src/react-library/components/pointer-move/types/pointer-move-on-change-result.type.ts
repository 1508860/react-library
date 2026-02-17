import type { IPagePosition, IPositionCurrent, IPositionInitial } from "@react-library/common";

/**
 * Describes the result for a pointer move change event
 */
export type PointerMoveOnChangeResult = (
	IPositionCurrent<IPagePosition> &
	IPositionInitial<IPagePosition>
);
