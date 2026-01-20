import { urlPathNameToArray } from "@react-library/common";

import { InvalidRouteError } from "../classes/invalid-route.error";
import { RouterSegment } from "../enums/router-segment.type";
import type { RouterActiveSegmentIds } from "../types/router-active-segment-ids.type";
import type { RouteAllSegment, RouteRoot, RouterSegmentRecord } from "../types/route.type";
import type { RouterSegmentId } from "../types/router-segment-id.type";

/**
 * Returns ordered collection of {@link RouterSegmentId} constrained to {@link RouterActiveSegmentIds} to define current active route from a URL
 * @param router
 * @param url
 */
export function resolveRouterSegmentIdsFromUrl(router: RouteRoot, url: URL): RouterActiveSegmentIds {

	const childSegmentIds: Array<RouterSegmentId> = [];
	const urlSegments: Array<string> = urlPathNameToArray(url);
	const lastUrlSegmentIndex: number = urlSegments.length - 1;

	// Only resolve child routes if we have any URL segments
	if (lastUrlSegmentIndex >= 0) {
		let currentRouteSegmentChildren: RouterSegmentRecord = router.children;

		urlSegments.forEach((urlSegment) => {
			const currentRouteSegmentChildrenKeys: Array<RouterSegmentId> = Object.keys(currentRouteSegmentChildren);

			// Catch if there aren't any child segments to search
			if (currentRouteSegmentChildrenKeys.length === 0) throw new InvalidRouteError();

			let activeChildSegmentId: RouterSegmentId | undefined = undefined;
			let activeChild: RouteAllSegment | undefined = undefined;

			childSegmentKeys: for (let childKeyIndex = 0; childKeyIndex < currentRouteSegmentChildrenKeys.length; childKeyIndex++) {
				const currentRouteSegmentId: RouterSegmentId = currentRouteSegmentChildrenKeys[childKeyIndex];
				const currentChildSegment = currentRouteSegmentChildren[currentRouteSegmentId];
				if (currentChildSegment.segment === urlSegment) {
					activeChildSegmentId = currentRouteSegmentId;
					activeChild = currentChildSegment;
					break childSegmentKeys;
				}
			}

			// Catch if path doesn't map to child route
			if (activeChildSegmentId === undefined || !activeChild) throw new InvalidRouteError();

			childSegmentIds.push(activeChildSegmentId);
			currentRouteSegmentChildren = activeChild.type === RouterSegment.WithChildren ? activeChild.children : {};
		});
	}

	return [
		router.segmentId,
		...childSegmentIds
	];
}
