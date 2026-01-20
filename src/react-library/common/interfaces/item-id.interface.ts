/**
 * For a component that can have an item id
 */
export interface IItemId<TItemId extends (number | string)> {
	itemId: TItemId;
}
