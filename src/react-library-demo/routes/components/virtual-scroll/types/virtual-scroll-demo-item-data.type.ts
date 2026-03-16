import type {
	IChild,
	IId,
	IText,
	IVirtualScrollRowSize,
	SizePx
} from "@react-library/common";

import type { VirtualScrollDemoItemChildData } from "./virtual-scroll-demo-item-child-data.type";

export type VirtualScrollDemoItemData = (
	IChild<Array<VirtualScrollDemoItemChildData>> &
	IId<number> &
	IText<string> &
	Partial<IVirtualScrollRowSize<SizePx>>
);
