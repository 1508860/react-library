import { RouterSegment, type RouteRoot } from "@react-library/router";

import { ReactLibraryRouterBasicDemoCustomGuardElement } from "../components/router-basic-demo-custom-guard";
import { ReactLibraryRouterBasicDemoDefaultGuardElement } from "../components/router-basic-demo-default-guard";
import { ReactLibraryRouterBasicDemoElementRoot } from "../components/router-basic-demo-element-root";
import { ReactLibraryRouterBasicDemoElementWithChildren } from "../components/router-basic-demo-element-with-children";
import { ReactLibraryRouterBasicDemoElement } from "../components/router-basic-demo-element";
import { RouterBasicDemoSegmentId } from "../enums/router-basic-demo-segment-id.type";
import { ReactLibraryRouterBasicDemoGuardAlternates } from "../hooks/router-basic-demo-guard-alternates.hook";
import { ReactLibraryRouterBasicDemoGuardFailure } from "../hooks/router-basic-demo-guard-failure.hook";
import { ReactLibraryRouterBasicDemoGuardSuccess } from "../hooks/router-basic-demo-guard-success.hook";

/**
 * Example router segment configuration
 */
export const ROUTER_BASIC_DEMO_ROUTER: RouteRoot = {
	type: RouterSegment.Root,
	segmentId: RouterBasicDemoSegmentId.Segment_Root,
	element: ReactLibraryRouterBasicDemoElementRoot,
	defaultGuardElement: ReactLibraryRouterBasicDemoDefaultGuardElement,
	children: {
		[RouterBasicDemoSegmentId.Segment_1]: {
			type: RouterSegment.WithChildren,
			segment: RouterBasicDemoSegmentId.Segment_1,
			element: ReactLibraryRouterBasicDemoElementWithChildren,
			children: {
				[RouterBasicDemoSegmentId.Segment_1_1]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_1_1,
					element: ReactLibraryRouterBasicDemoElement
				},
				[RouterBasicDemoSegmentId.Segment_1_2]: {
					type: RouterSegment.WithChildren,
					segment: RouterBasicDemoSegmentId.Segment_1_2,
					element: ReactLibraryRouterBasicDemoElementWithChildren,
					children: {
						[RouterBasicDemoSegmentId.Segment_1_2_1]: {
							type: RouterSegment.Child,
							segment: RouterBasicDemoSegmentId.Segment_1_2_1,
							element: ReactLibraryRouterBasicDemoElement
						},
						[RouterBasicDemoSegmentId.Segment_1_2_2]: {
							type: RouterSegment.Child,
							segment: RouterBasicDemoSegmentId.Segment_1_2_2,
							element: ReactLibraryRouterBasicDemoElement
						}
					}
				},
				[RouterBasicDemoSegmentId.Segment_1_3]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_1_3,
					element: ReactLibraryRouterBasicDemoElement
				}
			}
		},
		[RouterBasicDemoSegmentId.Segment_2]: {
			type: RouterSegment.WithChildren,
			segment: RouterBasicDemoSegmentId.Segment_2,
			element: ReactLibraryRouterBasicDemoElementWithChildren,
			children: {
				[RouterBasicDemoSegmentId.Segment_2_1]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_2_1,
					element: ReactLibraryRouterBasicDemoElement
				},
				[RouterBasicDemoSegmentId.Segment_2_2]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_2_2,
					element: ReactLibraryRouterBasicDemoElement
				}
			}
		},
		[RouterBasicDemoSegmentId.Segment_3]: {
			type: RouterSegment.WithChildren,
			segment: RouterBasicDemoSegmentId.Segment_3,
			element: ReactLibraryRouterBasicDemoElementWithChildren,
			children: {
				[RouterBasicDemoSegmentId.Segment_3_1]: {
					type: RouterSegment.WithChildren,
					segment: RouterBasicDemoSegmentId.Segment_3_1,
					element: ReactLibraryRouterBasicDemoElementWithChildren,
					children: {
						[RouterBasicDemoSegmentId.Segment_3_1_1]: {
							type: RouterSegment.WithChildren,
							segment: RouterBasicDemoSegmentId.Segment_3_1_1,
							element: ReactLibraryRouterBasicDemoElementWithChildren,
							children: {
								[RouterBasicDemoSegmentId.Segment_3_1_1_1]: {
									type: RouterSegment.Child,
									segment: RouterBasicDemoSegmentId.Segment_3_1_1_1,
									element: ReactLibraryRouterBasicDemoElement
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
			element: ReactLibraryRouterBasicDemoElementWithChildren,
			children: {
				[RouterBasicDemoSegmentId.Segment_4_1]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_4_1,
					element: ReactLibraryRouterBasicDemoElement,
					guards: [
						ReactLibraryRouterBasicDemoGuardAlternates
					]
				},
				[RouterBasicDemoSegmentId.Segment_4_2]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_4_2,
					element: ReactLibraryRouterBasicDemoElement,
					guardElement: ReactLibraryRouterBasicDemoCustomGuardElement,
					guards: [
						ReactLibraryRouterBasicDemoGuardSuccess,
						ReactLibraryRouterBasicDemoGuardFailure
					]
				},
				[RouterBasicDemoSegmentId.Segment_4_3]: {
					type: RouterSegment.WithChildren,
					segment: RouterBasicDemoSegmentId.Segment_4_3,
					element: ReactLibraryRouterBasicDemoElementWithChildren,
					children: {
						[RouterBasicDemoSegmentId.Segment_4_3_1]: {
							type: RouterSegment.Child,
							segment: RouterBasicDemoSegmentId.Segment_4_3_1,
							element: ReactLibraryRouterBasicDemoElement
						}
					}
				},
				[RouterBasicDemoSegmentId.Segment_4_4]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_4_4,
					element: ReactLibraryRouterBasicDemoElement
				}
			}
		}
	}
}
