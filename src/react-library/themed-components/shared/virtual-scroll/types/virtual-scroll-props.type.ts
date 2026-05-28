import type { IColour } from "@react-library/common";
import type {
	VirtualScrollPropsChildren,
	VirtualScrollPropsConfig,
	VirtualScrollPropsItemIsEqual,
	VirtualScrollPropsItems
} from "@react-library/components";

import type { ScrollColour } from "../../scroll";

/**
 * Describes props for the themed virtual scroll component
 */
export type ThemedVirtualScrollProps<TChildProps> = (
	IColour<ScrollColour> &
	VirtualScrollPropsChildren &
	VirtualScrollPropsConfig &
	VirtualScrollPropsItemIsEqual<TChildProps> &
	VirtualScrollPropsItems<TChildProps>
);
