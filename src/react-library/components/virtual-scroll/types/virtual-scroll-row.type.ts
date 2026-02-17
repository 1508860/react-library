import type {
	SizePx,
	IVirtualScrollRowIdPrefix,
	IVirtualScrollRowType,
	IVirtualScrollRowId,
	IVirtualScrollRowSize,
	IVirtualScrollCanShowChildren,
	IVirtualScrollChildren,
} from "@react-library/common";

import type { VirtualScrollRow } from "../enums/virtual-scroll-row.type";

// Virtual scroll row

/**
 * Type to describe the id prefix to add to an element that may exist in a parent-child hierarchy
 */
export type VirtualScrollRowIdPrefix = IVirtualScrollRowIdPrefix<string>;

type VirtualScrollRowTypeBase<TRowType extends VirtualScrollRow> = IVirtualScrollRowType<TRowType>;

type VirtualScrollRowBase = (
	IVirtualScrollRowId<(number | string)> &
	Partial<IVirtualScrollRowSize<SizePx>>
);

/**
 * Base virtual scroll row type with an aditional optional data that may exist against the row
 * Note: this allows for comparisons between:
 * {@link VirtualScrollRowStandard} (has no type), {@link VirtualScrollRowParent}, {@link VirtualScrollRowGrandParent}, {@link VirtualScrollRowGreatGrandParent}
 */
export type VirtualScrollRowComparable<TRowType extends VirtualScrollRow> = (
	VirtualScrollRowBase &
	Partial<VirtualScrollRowIdPrefix> &
	Partial<VirtualScrollRowTypeBase<TRowType>>
);

type VirtualScrollRowAccordionParentBase<TRowType extends VirtualScrollRow, TChild> = (
	Partial<IVirtualScrollCanShowChildren> &
	IVirtualScrollChildren<TChild> &
	VirtualScrollRowBase &
	VirtualScrollRowTypeBase<TRowType>
);

// Virtual scroll row

/**
 * Standard virtual scroll row type 
 */
export type VirtualScrollRowStandard = VirtualScrollRowBase;

/**
 * Virtual scroll row type for a parent
 */
export type VirtualScrollRowParent<TChild> =
	VirtualScrollRowAccordionParentBase<typeof VirtualScrollRow.Parent, TChild>;

/**
 * Virtual scroll row type for a grand parent
 */
export type VirtualScrollRowGrandParent<TChild> =
	VirtualScrollRowAccordionParentBase<typeof VirtualScrollRow.GrandParent, TChild>;

/**
 * Virtual scroll row type for a great grand parent
 */
export type VirtualScrollRowGreatGrandParent<TChild> =
	VirtualScrollRowAccordionParentBase<typeof VirtualScrollRow.GreatGrandParent, TChild>;
