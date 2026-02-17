/**
 * For a component that can have an virtual scroll children
 */
export interface IVirtualScrollChildren<TChild> {
	virtualScrollChildren: TChild | Array<TChild>;
}
