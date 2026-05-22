import type {
	Colour,
	IActiveIndicator,
	IBackground,
	IHover,
	IIcon,
	IIsActive,
	ILabel,
	IPulse
} from "@react-library/common";

/**
 * Describes values for tabs component colours
 */
export type TabsColourState = (
	IActiveIndicator<Colour> &
	IBackground<Colour> &
	IIsActive<Record<`${boolean}`, TabsItemColourState>> &
	IPulse<Colour>
);

/**
 * Describes values for tabs component item colours
 */
export type TabsItemColourState = (
	IHover<Colour> &
	IIcon<Colour> &
	ILabel<Colour>
);
