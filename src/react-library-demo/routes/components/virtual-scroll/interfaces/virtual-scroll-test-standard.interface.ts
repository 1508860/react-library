import type { VirtualScrollRowStandard } from "@react-library/components";

export interface IVirtualScrollTestStandard extends VirtualScrollRowStandard {
	id: number;
	text: string;
	renderCount: number;
}
