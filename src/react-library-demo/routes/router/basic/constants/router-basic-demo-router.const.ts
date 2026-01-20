import { RouterSegment, type RouteRoot } from "@react-library/router";

import { ReactLibraryRouterBasicDemoComponentRoot } from "../components/router-basic-demo-component-root";
import { ReactLibraryRouterBasicDemoComponentWithChildren } from "../components/router-basic-demo-component-with-children";
import { ReactLibraryRouterBasicDemoComponent } from "../components/router-basic-demo-component";
import { RouterBasicDemoSegmentId } from "../enums/router-basic-demo-segment-id.type";

/**
 * Example router segment configuration
 */
export const ROUTER_BASIC_DEMO_ROUTER: RouteRoot = {
	type: RouterSegment.Root,
	segmentId: RouterBasicDemoSegmentId.Segment_Root,
	element: ReactLibraryRouterBasicDemoComponentRoot,
	children: {
		[RouterBasicDemoSegmentId.Segment_1]: {
			type: RouterSegment.WithChildren,
			segment: RouterBasicDemoSegmentId.Segment_1,
			element: ReactLibraryRouterBasicDemoComponentWithChildren,
			children: {
				[RouterBasicDemoSegmentId.Segment_1_1]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_1_1,
					element: ReactLibraryRouterBasicDemoComponent
				},
				[RouterBasicDemoSegmentId.Segment_1_2]: {
					type: RouterSegment.WithChildren,
					segment: RouterBasicDemoSegmentId.Segment_1_2,
					element: ReactLibraryRouterBasicDemoComponentWithChildren,
					children: {
						[RouterBasicDemoSegmentId.Segment_1_2_1]: {
							type: RouterSegment.Child,
							segment: RouterBasicDemoSegmentId.Segment_1_2_1,
							element: ReactLibraryRouterBasicDemoComponent
						},
						[RouterBasicDemoSegmentId.Segment_1_2_2]: {
							type: RouterSegment.Child,
							segment: RouterBasicDemoSegmentId.Segment_1_2_2,
							element: ReactLibraryRouterBasicDemoComponent
						}
					}
				},
				[RouterBasicDemoSegmentId.Segment_1_3]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_1_3,
					element: ReactLibraryRouterBasicDemoComponent
				}
			}
		},
		[RouterBasicDemoSegmentId.Segment_2]: {
			type: RouterSegment.WithChildren,
			segment: RouterBasicDemoSegmentId.Segment_2,
			element: ReactLibraryRouterBasicDemoComponentWithChildren,
			children: {
				[RouterBasicDemoSegmentId.Segment_2_1]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_2_1,
					element: ReactLibraryRouterBasicDemoComponent
				},
				[RouterBasicDemoSegmentId.Segment_2_2]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_2_2,
					element: ReactLibraryRouterBasicDemoComponent
				}
			}
		},
		[RouterBasicDemoSegmentId.Segment_3]: {
			type: RouterSegment.WithChildren,
			segment: RouterBasicDemoSegmentId.Segment_3,
			element: ReactLibraryRouterBasicDemoComponentWithChildren,
			children: {
				[RouterBasicDemoSegmentId.Segment_3_1]: {
					type: RouterSegment.WithChildren,
					segment: RouterBasicDemoSegmentId.Segment_3_1,
					element: ReactLibraryRouterBasicDemoComponentWithChildren,
					children: {
						[RouterBasicDemoSegmentId.Segment_3_1_1]: {
							type: RouterSegment.WithChildren,
							segment: RouterBasicDemoSegmentId.Segment_3_1_1,
							element: ReactLibraryRouterBasicDemoComponentWithChildren,
							children: {
								[RouterBasicDemoSegmentId.Segment_3_1_1_1]: {
									type: RouterSegment.Child,
									segment: RouterBasicDemoSegmentId.Segment_3_1_1_1,
									element: ReactLibraryRouterBasicDemoComponent
								}
							}
						}
					}
				}
			}
		},
		[RouterBasicDemoSegmentId.Segment_4]: {
			type: RouterSegment.WithChildren,
			segment: RouterBasicDemoSegmentId.Segment_4,
			element: ReactLibraryRouterBasicDemoComponentWithChildren,
			children: {
				[RouterBasicDemoSegmentId.Segment_4_1]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_4_1,
					element: ReactLibraryRouterBasicDemoComponent
				},
				[RouterBasicDemoSegmentId.Segment_4_2]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_4_2,
					element: ReactLibraryRouterBasicDemoComponent
				},
				[RouterBasicDemoSegmentId.Segment_4_3]: {
					type: RouterSegment.WithChildren,
					segment: RouterBasicDemoSegmentId.Segment_4_3,
					element: ReactLibraryRouterBasicDemoComponentWithChildren,
					children: {
						[RouterBasicDemoSegmentId.Segment_4_3_1]: {
							type: RouterSegment.Child,
							segment: RouterBasicDemoSegmentId.Segment_4_3_1,
							element: ReactLibraryRouterBasicDemoComponent
						}
					}
				},
				[RouterBasicDemoSegmentId.Segment_4_4]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_4_4,
					element: ReactLibraryRouterBasicDemoComponent
				}
			}
		}
	}
}
