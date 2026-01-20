import type { IId, IRoute, PrefixKeys } from "@react-library/common";

import type { RouteAll } from "./route.type";
import type { RouterSegmentId } from "./router-segment-id.type";

export type RouterChildRouteState = (
	PrefixKeys<IId<RouterSegmentId>, "segment"> &
	IRoute<RouteAll>
);
