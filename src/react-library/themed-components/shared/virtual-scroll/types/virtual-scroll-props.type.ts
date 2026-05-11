import type { PropsWithChildren } from "react";

import type { IColour } from "@react-library/common";
import type { VirtualScrollPropsConfig } from "@react-library/components";

import type { ScrollColour } from "../../scroll";

/**
 * Describes props for the themed virtual scroll component
 */
export type ThemedVirtualScrollProps = (
	IColour<ScrollColour> &
	PropsWithChildren &
	VirtualScrollPropsConfig
);
