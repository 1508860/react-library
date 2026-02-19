import type { IHide, IOrientation, Orientation } from "@react-library/common";

/**
 * Props for the divider component
 */
export type DividerProps = (
	Partial<IHide<boolean>> &
	IOrientation<Orientation>
);
