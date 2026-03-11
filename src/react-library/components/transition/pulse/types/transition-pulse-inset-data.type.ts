import type {
	IInset,
	IInsetAll,
	IKey,
	SizePx
} from "@react-library/common";

/**
 * Props for transition pulse component
 */
export type TransitionPulseInsetData = (
	IInset<IInsetAll<SizePx>> &
	Partial<IKey<number | string>>
);
