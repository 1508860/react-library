import { InvalidRouteError } from "../classes/invalid-route.error";
import { RouterSegment } from "../enums/router-segment.type";
import type { RouteAll, RouteAllSegment, RouteAllWithChildren, RouteRoot } from "../types/route.type";
import type { RouterSegmentId } from "../types/router-segment-id.type";

export function resolveRouteFromActiveSegmentIds(
	router: RouteRoot,
	segmentIds: Array<RouterSegmentId>
): RouteAll {

	// Catch if the first segment id doesn't match the root id
	if (segmentIds.length < 1 || segmentIds[0] !== router.segmentId) throw new InvalidRouteError();

	const segmentIdLastIndex: number = segmentIds.length - 1;
	let currentSegmentWithChildren: RouteAllWithChildren = router;

	// Skip root segment
	for (let index = 1; index <= segmentIdLastIndex; index++) {
		const currentSegmentId = segmentIds[index];
		const currentSegment: RouteAllSegment = currentSegmentWithChildren.children[currentSegmentId];

		// Catch if new segment isn't set
		if (!currentSegment) throw new InvalidRouteError();

		if (currentSegment.type === RouterSegment.Child) {
			// Catch if there are no more children in hierarchy but more segments to resolve
			if (index !== segmentIdLastIndex) throw new InvalidRouteError();
			return currentSegment;
		} else {
			currentSegmentWithChildren = currentSegment;
		}
	}

	return currentSegmentWithChildren;
}
