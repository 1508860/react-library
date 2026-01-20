/**
 * For a component that can have a segment id
 */
export interface ISegmentId<TSegmentId extends (number | string)> {
	segmentId: TSegmentId;
}
