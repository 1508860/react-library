import type {
	IHide,
	IMarginAfter,
	IMarginBefore,
	IOrientation,
	Orientation,
	Size
} from "@react-library/common";

/**
 * Props for the divider component
 */
export type DividerProps = (
	Partial<IHide<boolean>> &
	Partial<IMarginAfter<Size>> &
	Partial<IMarginBefore<Size>> &
	IOrientation<Orientation>
);
