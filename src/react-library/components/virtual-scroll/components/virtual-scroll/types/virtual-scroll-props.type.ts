import type { PropsWithChildren } from "react";

import type { IScrollElement } from "@react-library/common";

import type { VirtualScrollPropsConfig } from "../../../types/virtual-scroll-props-config.type";
import type { VirtualScrollScrollbar } from "../../../types/virtual-scroll-scrollbar.type";
/**
 * Props for virtual scroll component
 */
export type VirtualScrollProps = (
	PropsWithChildren &
	IScrollElement<VirtualScrollScrollbar> &
	VirtualScrollPropsConfig
);
