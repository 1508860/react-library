/**
 * For a component that can have a default child segment id
 */
export interface IDefaultChildSegmentId<TDefaultChildSegmentId extends (number | string)> {
	defaultChildSegmentId: TDefaultChildSegmentId;
}
