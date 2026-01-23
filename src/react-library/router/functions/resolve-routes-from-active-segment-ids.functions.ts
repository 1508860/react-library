import { InvalidRouteError } from "../classes/invalid-route.error";
import { RouterSegment } from "../enums/router-segment.type";
import type { RouteAll, RouteAllSegment, RouteRoot } from "../types/route.type";
import type { RouterActiveRoutes } from "../types/router-active-routes.type";
import type { RouterSegmentId } from "../types/router-segment-id.type";

export function resolveRoutesFromActiveSegmentIds(
	router: RouteRoot,
	segmentIds: Array<RouterSegmentId>
): RouterActiveRoutes {

	const segmentIdLastIndex: number = segmentIds.length - 1;
	const result: RouterActiveRoutes = [];

	for (let index = 0; index <= segmentIdLastIndex; index++) {
		const currentSegmentId = segmentIds[index];
		const currentParentSegment: RouteAll = index === 0 ? router : result[index - 1].route;

		// Catch if parent segment doesn't have children
		if (currentParentSegment.type === RouterSegment.Child) throw new InvalidRouteError();

		const currentSegment: RouteAllSegment = currentParentSegment.children[currentSegmentId];

		// Catch if current segment isn't set
		if (!currentSegment) throw new InvalidRouteError();

		result.push({
			route: currentSegment,
			segmentId: currentSegmentId
		});
	}

	return result;
}
