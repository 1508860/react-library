import type { IChild, IColour } from "@react-library/common";
import type { VirtualScrollItems, VirtualScrollPropsConfig } from "@react-library/components";

import type { ScrollColour } from "../../scroll";

/**
 * Describes props for the themed virtual scroll component
 */
export type ThemedVirtualScrollProps = (
	IChild<VirtualScrollItems> &
	IColour<ScrollColour> &
	VirtualScrollPropsConfig
);
