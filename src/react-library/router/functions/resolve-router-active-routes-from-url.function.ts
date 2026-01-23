import { urlPathNameToArray } from "@react-library/common";

import { InvalidRouteError } from "../classes/invalid-route.error";
import { RouterSegment } from "../enums/router-segment.type";
import type { RouteAllSegment, RouteRoot, RouterSegmentRecord } from "../types/route.type";
import type { RouterSegmentId } from "../types/router-segment-id.type";
import type { RouterActiveRoutes } from "../types/router-active-routes.type";

/**
 * Returns ordered collection of {@link RouterActiveRoutes} constrained to {@link RouterActiveRoutes} to define current active route from a URL
 * @param router
 * @param url
 */
export function resolveRouterActiveRoutesFromUrl(router: RouteRoot, url: URL): RouterActiveRoutes {

	const childSegmentIds: RouterActiveRoutes = [];
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

			childSegmentIds.push({
				route: activeChild,
				segmentId: activeChildSegmentId
			});
			currentRouteSegmentChildren = activeChild.type === RouterSegment.WithChildren ? activeChild.children : {};
		});
	}

	return childSegmentIds;
}
