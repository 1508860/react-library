import type { IColour } from "@react-library/common";
import type { VirtualScrollPropsConfig, VirtualScrollPropsItems } from "@react-library/components";

import type { ScrollColour } from "../../scroll";

/**
 * Describes props for the themed virtual scroll component
 */
export type ThemedVirtualScrollProps<TChildProps> = (
	IColour<ScrollColour> &
	VirtualScrollPropsConfig &
	VirtualScrollPropsItems<TChildProps>
);
