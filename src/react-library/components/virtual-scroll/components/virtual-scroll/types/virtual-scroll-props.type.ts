import type { IChild, IScrollElement } from "@react-library/common";

import type { VirtualScrollPropsConfig } from "../../../types/virtual-scroll-props-config.type";
import type { VirtualScrollItems } from "../../../types/virtual-scroll-items.type";
import type { VirtualScrollScrollbar } from "../../../types/virtual-scroll-scrollbar.type";
/**
 * Props for virtual scroll component
 */
export type VirtualScrollProps = (
	IChild<VirtualScrollItems> &
	IScrollElement<VirtualScrollScrollbar> &
	VirtualScrollPropsConfig
);
