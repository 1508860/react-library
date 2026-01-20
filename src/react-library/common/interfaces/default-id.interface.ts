/**
 * For a component that can have a default id
 */
export interface IDefaultId<TDefaultId extends (number | string)> {
	defaultId: TDefaultId;
}
