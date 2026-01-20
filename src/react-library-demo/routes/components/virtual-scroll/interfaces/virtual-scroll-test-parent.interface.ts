import type { VirtualScrollRowParent } from "@react-library/components";

import type { IVirtualScrollTestStandard } from "./virtual-scroll-test-standard.interface";

export interface IVirtualScrollTestParent extends VirtualScrollRowParent<IVirtualScrollTestStandard> {
	id: number;
	text: string;
	renderCount: number;
}
