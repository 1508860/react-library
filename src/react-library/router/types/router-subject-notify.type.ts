import type { IRouterNotificationCount, IRoutes } from "@react-library/common";

import type { RouterActiveRoutes } from "./router-active-routes.type";

export type RouterSubjectNotify = (
	IRouterNotificationCount<number> &
	IRoutes<RouterActiveRoutes>
);
