import type {
	Guid,
	IInset,
	IInsetAll,
	ITransitionId,
	SizePx
} from "@react-library/common";

/**
 * Props for transition pulse component
 */
export type TransitionPulseInsetData = (
	IInset<IInsetAll<SizePx>> &
	ITransitionId<Guid>
);
