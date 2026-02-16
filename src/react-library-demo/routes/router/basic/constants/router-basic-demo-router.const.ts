import { RouterSegment, type RouteRoot } from "@react-library/router";

import { ReactLibraryRouterBasicDemoDefaultGuardFailure } from "../components/router-basic-demo-default-guard-failure";
import { ReactLibraryRouterBasicDemoDefaultGuardLoading } from "../components/router-basic-demo-default-guard-loading";
import { ReactLibraryRouterBasicDemoElementRoot } from "../components/router-basic-demo-element-root";
import { ReactLibraryRouterBasicDemoElementWithChildren } from "../components/router-basic-demo-element-with-children";
import { ReactLibraryRouterBasicDemoElement } from "../components/router-basic-demo-element";
import { ReactLibraryRouterBasicDemoHookGuardFailure } from "../components/router-basic-demo-hook-guard-failure";
import { ReactLibraryRouterBasicDemoSegmentGuardFailure } from "../components/router-basic-demo-segment-guard-failure";
import { ReactLibraryRouterBasicDemoSegmentGuardLoading } from "../components/router-basic-demo-segment-guard-loading";
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
	defaultGuardFailureElement: ReactLibraryRouterBasicDemoDefaultGuardFailure,
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
			redirectTo: RouterBasicDemoSegmentId.Segment_2_1,
			children: {
				[RouterBasicDemoSegmentId.Segment_2_1]: {
					type: RouterSegment.WithChildren,
					segment: RouterBasicDemoSegmentId.Segment_2_1,
					element: ReactLibraryRouterBasicDemoElementWithChildren,
					redirectTo: RouterBasicDemoSegmentId.Segment_2_1_1,
					children: {
						[RouterBasicDemoSegmentId.Segment_2_1_1]: {
							type: RouterSegment.WithChildren,
							segment: RouterBasicDemoSegmentId.Segment_2_1_1,
							element: ReactLibraryRouterBasicDemoElementWithChildren,
							redirectTo: RouterBasicDemoSegmentId.Segment_2_1_1_1,
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
							{ hook: ReactLibraryRouterBasicDemoGuardSuccess }
						]
					}
				},
				[RouterBasicDemoSegmentId.Segment_3_2]: {
					type: RouterSegment.Child,
					segment: RouterBasicDemoSegmentId.Segment_3_2,
					element: ReactLibraryRouterBasicDemoElement,
					guard: {
						hooks: [
							{ hook: ReactLibraryRouterBasicDemoGuardSuccess },
							{ hook: ReactLibraryRouterBasicDemoGuardFailure }
						]
					}
				},
				[RouterBasicDemoSegmentId.Segment_3_3]: {
					type: RouterSegment.WithChildren,
					segment: RouterBasicDemoSegmentId.Segment_3_3,
					element: ReactLibraryRouterBasicDemoElementWithChildren,
					guard: {
						hooks: [
							{ hook: ReactLibraryRouterBasicDemoGuardOnInterval }
						],
						failureElement: ReactLibraryRouterBasicDemoSegmentGuardFailure,
						loadingElement: ReactLibraryRouterBasicDemoSegmentGuardLoading
					},
					children: {
						[RouterBasicDemoSegmentId.Segment_3_3_1]: {
							type: RouterSegment.Child,
							segment: RouterBasicDemoSegmentId.Segment_3_3_1,
							element: ReactLibraryRouterBasicDemoElement
						},
						[RouterBasicDemoSegmentId.Segment_3_3_2]: {
							type: RouterSegment.Child,
							segment: RouterBasicDemoSegmentId.Segment_3_3_2,
							element: ReactLibraryRouterBasicDemoElement,
							guard: {
								hooks: [
									{
										hook: ReactLibraryRouterBasicDemoGuardFailure,
										failureElement: ReactLibraryRouterBasicDemoHookGuardFailure,
									}
								]
							}
						}
					}
				}
			}
		}
	}
}
