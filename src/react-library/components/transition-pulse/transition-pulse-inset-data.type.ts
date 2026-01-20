import type {
	Guid,
	IData,
	IId,
	IInset,
	PrefixKeys,
	SizePx
} from "@react-library/common";

/**
 * Props for transition pulse component
 */
export type TransitionPulseInsetData = (
	PrefixKeys<IData<IInset<SizePx>>, "inset"> &
	PrefixKeys<IId<Guid>, "transition">
);
