import type { IId, IText, IRenderCount } from "@react-library/common";
import type { VirtualScrollRowParent } from "@react-library/components";

import type { VirtualScrollTestStandard } from "./virtual-scroll-test-standard.type";

export type VirtualScrollTestParent = (
	IId<number> &
	IText<string> &
	IRenderCount<number> &
	VirtualScrollRowParent<VirtualScrollTestStandard>
);
