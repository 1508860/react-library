import type { IItems } from "@react-library/common";

import type { VirtualScrollItems } from "./virtual-scroll-item.type";

/**
 * Props for virtual scroll component items
*/
export type VirtualScrollPropsItems<TChildProps> = (
	IItems<VirtualScrollItems<TChildProps>>
);
