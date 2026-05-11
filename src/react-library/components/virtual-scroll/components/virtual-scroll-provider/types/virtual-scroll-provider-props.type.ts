import type { PropsWithChildren } from "react";

import type { VirtualScrollPropsConfig } from "../../../types/virtual-scroll-props-config.type";

/**
 * Props for virtual scroll provider component
 */
export type VirtualScrollProviderProps = (
	PropsWithChildren &
	VirtualScrollPropsConfig
);
