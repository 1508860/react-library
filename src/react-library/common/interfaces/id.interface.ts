/**
 * For a component that can have an id
 */
export interface IId<TId extends (number | string)> {
	id: TId;
}
