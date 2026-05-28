import type { IIndex, IPercentVisible, ScalePercent } from "@react-library/common";

/**
 * Virtual scroll index in view data
 */
export type VirtualScrollIndexInView = (
	IIndex<number> &
	IPercentVisible<ScalePercent>
);

/**
 * {@link VirtualScrollIndexInView} array
 */
export type VirtualScrollIndexesInView = Array<VirtualScrollIndexInView>;
