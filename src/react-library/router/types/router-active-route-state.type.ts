import type { IRoute, ISegmentId } from "@react-library/common";

import type { RouteAllSegment } from "./route.type";
import type { RouterSegmentId } from "./router-segment-id.type";

export type RouterActiveRouteState = (
	IRoute<RouteAllSegment> &
	ISegmentId<RouterSegmentId>
);
