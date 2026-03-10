import type { IDirection, IIntervalMs } from "../../../interfaces";
import type { UseArrayIncrementDirection } from "../enums/use-array-increment-direction.type";

/**
 * Interval props for use array increment state hook
 */
export type UseArrayIncrementStateIntervalProps = (
	IDirection<UseArrayIncrementDirection> &
	IIntervalMs<number>
);
