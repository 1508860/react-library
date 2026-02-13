import type {
	Guid,
	IId,
	IInset,
	IInsetAll,
	PrefixKeys,
	SizePx
} from "@react-library/common";

/**
 * Props for transition pulse component
 */
export type TransitionPulseInsetData = (
	IInset<IInsetAll<SizePx>> &
	PrefixKeys<IId<Guid>, "transition">
);
