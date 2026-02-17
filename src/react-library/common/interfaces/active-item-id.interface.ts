/**
 * For a component that can have an active item id
 */
export interface IActiveItemId<TActiveItemId extends (number | string)> {
	activeItemId: TActiveItemId;
}
