import type { PropsWithChildren } from "react";

import type { VirtualScrollPropsConfig } from "../../../types/virtual-scroll-props-config.type";

/**
 * Props for virtual scroll config provider component
 */
export type VirtualScrollConfigProviderProps = (
	PropsWithChildren &
	VirtualScrollPropsConfig
);
