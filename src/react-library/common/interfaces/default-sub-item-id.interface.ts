/**
 * For a component that can have a default sub item id
 */
export interface IDefaultSubItemId<TDefaultSubItemId extends (number | string)> {
	defaultSubItemId: TDefaultSubItemId;
}
