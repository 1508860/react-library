import type { PropsWithChildren } from "react";

import type { IItems } from "@react-library/common";

import type { VirtualScrollItems } from "../../../types/virtual-scroll-items.type";

/**
 * Props for virtual scroll item count provider component
 */
export type VirtualScrollItemCountProviderProps = (
	IItems<VirtualScrollItems> &
	PropsWithChildren
);
