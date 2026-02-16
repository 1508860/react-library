import type { RouterSegmentId } from "@react-library/router";

/**
 * Router basic demo segment ids
 */
export const RouterBasicDemoSegmentId = {
	Segment_Root: "segment_root",

	Segment_1: "segment_1",
	Segment_1_1: "segment_1_1",
	Segment_1_2: "segment_1_2",
	Segment_1_2_1: "segment_1_2_1",
	Segment_1_2_2: "segment_1_2_2",
	Segment_1_3: "segment_1_3",

	Segment_2: "segment_2",
	Segment_2_1: "segment_2_1",
	Segment_2_1_1: "segment_2_1_1",
	Segment_2_1_1_1: "segment_2_1_1_1",

	Segment_3: "segment_3",
	Segment_3_1: "segment_3_1",
	Segment_3_2: "segment_3_2",
	Segment_3_3: "segment_3_3",
	Segment_3_3_1: "segment_3_3_1",
	Segment_3_3_2: "segment_3_3_2"
} as const satisfies Record<string, RouterSegmentId>;

/**
 * Type for {@link RouterBasicDemoSegmentId}
 */
export type RouterBasicDemoSegmentId = (typeof RouterBasicDemoSegmentId)[keyof typeof RouterBasicDemoSegmentId];
