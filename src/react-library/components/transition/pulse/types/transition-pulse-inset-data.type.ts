import type {
	IInset,
	IInsetAll,
	IKey,
	SizePx
} from "@react-library/common";

/**
 * Transition pulse inset data
 */
export type TransitionPulseInsetData = (
	IInset<IInsetAll<SizePx>> &
	IKey<number | string>
);
