/**
 * For a component that can have an virtual scroll row id prefix
 */
export interface IVirtualScrollRowIdPrefix<TVirtualScrollRowIdPrefix extends (number | string)> {
	virtualScrollRowIdPrefix: TVirtualScrollRowIdPrefix;
}
