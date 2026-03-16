import type { IId, IText, IVirtualScrollRowSize, SizePx } from "@react-library/common";

export type VirtualScrollDemoItemChildData = (
	IId<number> &
	IText<string> &
	Partial<IVirtualScrollRowSize<SizePx>>
);
