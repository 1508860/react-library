import type {
	Colour,
	IColour,
	IIsDisabled,
	IName,
	IOnClick,
	IPadding,
	ISize,
	Size
} from "@react-library/common";
import type { MaterialIconName } from "@react-library/material-icons";

/**
 * Props for the icon click component
 */
export type IconClickProps = (
	IColour<Colour> &
	Partial<IIsDisabled> &
	IName<MaterialIconName> &
	IOnClick<Element> &
	Partial<IPadding<Size>> &
	ISize<Size>
);
