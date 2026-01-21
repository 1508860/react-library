import type { IRoute } from "@react-library/common";

import type { RouteAll } from "./route.type";
import type { RouterSegmentIdProps } from "./router-segment-id-props.type";

export type RouterChildRouteState = (
	IRoute<RouteAll> &
	RouterSegmentIdProps
);
