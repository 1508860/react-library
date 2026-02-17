/**
 * For a component that can have a transition id
 */
export interface ITransitionId<TTransitionId extends (number | string)> {
	transitionId: TTransitionId;
}
