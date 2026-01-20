import { segmentsToUrlPathName } from "@react-library/common";

import { InvalidRouteError } from "../classes/invalid-route.error";
import { RouterSegment } from "../enums/router-segment.type";
import type { RouteRoot, RouterSegmentRecord } from "../types/route.type";
import type { RouterSegmentId } from "../types/router-segment-id.type";

/**
 * Returns {@link URL} to define current active route from a child {@link RouterSegmentId} to route to
 * @param router
 * @param routeToChildId
 */
export function resolveRouterUrlToChild(router: RouteRoot, routeToChildId: RouterSegmentId): URL {
	// Return origin if we're routing to the root
	if (routeToChildId === router.segmentId) return new URL(window.location.origin);

	let hasFoundChildRoute: boolean = false;

	const reversedUrlSegments: Array<string> = [];

	const resolveChildren = (childSegments: RouterSegmentRecord, routeToChildId: RouterSegmentId) => {
		const childrenSegmentKeys: Array<RouterSegmentId> = Object.keys(childSegments);
		for (let index = 0; index < childrenSegmentKeys.length; index++) {
			const segmentId: RouterSegmentId = childrenSegmentKeys[index];
			const childSegment = childSegments[segmentId];

			if (segmentId === routeToChildId) {
				reversedUrlSegments.push(childSegment.segment);
				hasFoundChildRoute = true;
				return true;
			} else if (childSegment.type === RouterSegment.WithChildren && resolveChildren(childSegment.children, routeToChildId)) {
				reversedUrlSegments.push(childSegment.segment);
				return true;
			}
		}

		return false;
	}

	resolveChildren(router.children, routeToChildId);

	if (!hasFoundChildRoute) throw new InvalidRouteError();

	return new URL(`${window.location.origin}${segmentsToUrlPathName(reversedUrlSegments.reverse())}`);
}
