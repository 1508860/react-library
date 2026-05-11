import type { IChild } from "@react-library/common";

import type { VirtualScrollContainer } from "../../../types/virtual-scroll-container.type";
import type { VirtualScrollPropsConfig } from "../../../types/virtual-scroll-props-config.type";

/**
 * Props for virtual scroll component
 */
export type VirtualScrollProps = (
	IChild<VirtualScrollContainer> &
	VirtualScrollPropsConfig
);
