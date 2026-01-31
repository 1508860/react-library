import { RouterSegment, type RouteRoot } from "@react-library/router";

import { ReactLibraryRouterBasicDemoCustomGuardLoading } from "../components/router-basic-demo-custom-guard-loading";
import { ReactLibraryRouterBasicDemoCustomGuard } from "../components/router-basic-demo-custom-guard";
import { ReactLibraryRouterBasicDemoDefaultGuardLoading } from "../components/router-basic-demo-default-guard-loading";
import { ReactLibraryRouterBasicDemoDefaultGuard } from "../components/router-basic-demo-default-guard";
import { ReactLibraryRouterBasicDemoElementRoot } from "../components/router-basic-demo-element-root";
import { ReactLibraryRouterBasicDemoElementWithChildren } from "../components/router-basic-demo-element-with-children";
import { ReactLibraryRouterBasicDemoElement } from "../components/router-basic-demo-element";
import { RouterBasicDemoSegmentId } from "../enums/router-basic-demo-segment-id.type";
import { ReactLibraryRouterBasicDemoGuardFailure } from "../hooks/router-basic-demo-guard-failure.hook";
import { ReactLibraryRouterBasicDemoGuardOnInterval } from "../hooks/router-basic-demo-guard-on-interval.hook";
import { ReactLibraryRouterBasicDemoGuardSuccess } from "../hooks/router-basic-demo-guard-success.hook";

/**
 * Example router segment configuration
 */
export const ROUTER_BASIC_DEMO_ROUTER: RouteRoot = {
	type: RouterSegment.Root,
	segmentId: RouterBasicDemoSegmentId.Segment_Root,
	element: ReactLibraryRouterBasicDemoElementRoot,
	defaultGuardElement: ReactLibraryRouterBasicDemoDefaultGuard,
	defaultGuardLoadingElement: ReactLibraryRouterBasicDemoDefaultGuardLoading,
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
					type: RouterSegment.WithChildren,
					segment: RouterBasicDemoSegmentId.Segment_2_1,
					element: ReactLibraryRouterBasicDemoElementWithChildren,
					children: {
						[RouterBasicDemoSegmentId.Segment_2_1_1]: {
							type: RouterSegment.WithChildren,
							segment: RouterBasicDemoSegmentId.Segment_2_1_1,
							element: ReactLibraryRouterBasicDemoElementWithChildren,
							children: {
								[RouterBasicDemoSegmentId.Segment_2_1_1_1]: {
									type: RouterSegment.Child,
									segment: RouterBasicDemoSegmentId.Segment_2_1_1_1,
									element: ReactLibraryRouterBasicDemoElement
								}
							}
						}
					}
				}
			}
		},
		[RouterBasicDemoSegmentId.Segment_3]: {
			type: RouterSegment.WithChildren,
			segment: RouterBasicDemoSegmentId.Segment_3,
			element: ReactLibraryRouterBasicDemoElementWithChildren,
			children: {
				[RouterBasicDemoSegmentId.Segment_3_1]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_3_1,
					element: ReactLibraryRouterBasicDemoElement,
					guard: {
						hooks: [
							ReactLibraryRouterBasicDemoGuardSuccess
						]
					}
				},
				[RouterBasicDemoSegmentId.Segment_3_2]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_3_2,
					element: ReactLibraryRouterBasicDemoElement,
					guard: {
						hooks: [
							ReactLibraryRouterBasicDemoGuardSuccess,
							ReactLibraryRouterBasicDemoGuardFailure
						]
					}
				},
				[RouterBasicDemoSegmentId.Segment_3_3]: {
					type: RouterSegment.WithChildren,
					segment: RouterBasicDemoSegmentId.Segment_3_3,
					element: ReactLibraryRouterBasicDemoElementWithChildren,
					guard: {
						element: ReactLibraryRouterBasicDemoCustomGuard,
						hooks: [
							ReactLibraryRouterBasicDemoGuardOnInterval
						],
						loadingElement: ReactLibraryRouterBasicDemoCustomGuardLoading
					},
					children: {
						[RouterBasicDemoSegmentId.Segment_3_3_1]: {
							type: RouterSegment.Child,
							segment: RouterBasicDemoSegmentId.Segment_3_3_1,
							element: ReactLibraryRouterBasicDemoElement
						}
					}
				}
			}
		}
	}
}
