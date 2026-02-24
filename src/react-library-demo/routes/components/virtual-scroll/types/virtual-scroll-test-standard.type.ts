import type { IId, IText } from "@react-library/common";
import type { VirtualScrollRowStandard } from "@react-library/components";

export type VirtualScrollTestStandard = (
	IId<number> &
	IText<string> &
	VirtualScrollRowStandard
);
