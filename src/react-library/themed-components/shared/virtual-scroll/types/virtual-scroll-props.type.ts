import type { PropsWithChildren } from "react";

import type { VirtualScrollPropsConfig } from "@react-library/components";

import type { ScrollVirtualPropsColour } from "../../scroll";

/**
 * Describes props for the themed virtual scroll component
 */
export type ThemedVirtualScrollProps = (
	PropsWithChildren &
	ScrollVirtualPropsColour &
	VirtualScrollPropsConfig
);
