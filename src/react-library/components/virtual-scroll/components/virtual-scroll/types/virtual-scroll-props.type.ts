import type { PropsWithChildren } from "react";

import type { IScrollElement } from "@react-library/common";

import type { VirtualScrollPropsConfig } from "../../../types/virtual-scroll-props-config.type";
import type { VirtualScrollPropsItemIsEqual } from "../../../types/virtual-scroll-props-item-is-equal.type";
import type { VirtualScrollPropsItems } from "../../../types/virtual-scroll-props-items.type";
import type { VirtualScrollScrollbar } from "../../../types/virtual-scroll-scrollbar.type";
/**
 * Props for virtual scroll component
 */
export type VirtualScrollProps<TChildProps> = (
	PropsWithChildren &
	IScrollElement<VirtualScrollScrollbar> &
	VirtualScrollPropsConfig &
	VirtualScrollPropsItemIsEqual<TChildProps> &
	VirtualScrollPropsItems<TChildProps>
);
