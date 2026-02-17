/**
 * For a component that can have an virtual scroll row size
 */
export interface IVirtualScrollRowSize<TVirtualScrollRowSize extends (number | string)> {
	virtualScrollRowSize: TVirtualScrollRowSize;
}
