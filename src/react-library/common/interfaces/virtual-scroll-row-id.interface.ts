/**
 * For a component that can have an virtual scroll row id
 */
export interface IVirtualScrollRowId<TVirtualScrollRowId extends (number | string)> {
	virtualScrollRowId: TVirtualScrollRowId;
}
