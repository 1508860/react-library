import { useCallback, useEffect, useRef, useState } from "react";

import { useObserverRef } from "@react-library/common";

import { RouterSegment } from "../../../enums/router-segment.type";
import { useRouterContext } from "../../../hooks/router-context.hook";
import { useRouterNotifierContext } from "../../../hooks/router-notifier-context.hook";
import { useRouterSubjectContext } from "../../../hooks/router-subject-context.hook";
import type { RouterSegmentRecord } from "../../../types/route.type";
import type { RouterActiveRouteState } from "../../../types/router-active-route-state.type";
import type { RouterSegmentId } from "../../../types/router-segment-id.type";
import type { RouterSubjectNotify } from "react-library/router/types/router-subject-notify.type";


export function useRouterActiveRouteState(segmentId: RouterSegmentId): [RouterActiveRouteState | null] {

	const routerNotificationCount = useRef<number>(0);

	const [state, setState] = useState<RouterActiveRouteState | null>(null);
	const currentChildIdRef = useRef<RouterSegmentId | null>(null);

	const router = useRouterContext();
	const routerNotifier = useRouterNotifierContext();
	const routerSubject = useRouterSubjectContext();

	const setValidState = useCallback(
		(children?: RouterSegmentRecord, activeChildRouteState?: RouterActiveRouteState) => {

			const childSegmentIds: Array<RouterSegmentId> = children ? Object.keys(children) : [];

			// Terminate if active child doesn't exist as part of the parent route's children
			if (!activeChildRouteState || !childSegmentIds.includes(activeChildRouteState.segmentId)) {
				// Terminate if no active child of this segment exists
				currentChildIdRef.current = null;
				setState(null);
				return;
			}

			// Handle redirect if active child route segment is the final segment of the tree
			if (activeChildRouteState.route.type === RouterSegment.Child && activeChildRouteState.route.redirectTo !== undefined) {
				routerNotifier.notify(activeChildRouteState.route.redirectTo);
				return;
			}

			// Terminate if we've already set this child element
			if (currentChildIdRef.current === activeChildRouteState.segmentId) return;

			currentChildIdRef.current = activeChildRouteState.segmentId;
			setState(activeChildRouteState);
		},
		[routerNotifier]
	);

	const handleChildElement = useCallback(
		(notification: RouterSubjectNotify) => {

			// Ensure we areonly processing router notifications after what we currently know
			if (notification.routerNotificationCount <= routerNotificationCount.current) return;

			routerNotificationCount.current = notification.routerNotificationCount;
			const activeRoutes = notification.routes;

			// Handle immediate children of the root
			if (segmentId === router.segmentId) {
				if (activeRoutes.length > 0) setValidState(router.children, activeRoutes[0]);
				else {
					// Handle redirect if exists
					if (router.redirectTo !== undefined) routerNotifier.notify(router.redirectTo);
					else setValidState(undefined, undefined);
				}
				return;
			}

			const index: number = activeRoutes.findIndex(x => x.segmentId === segmentId);
			const lastIndex: number = activeRoutes.length - 1;
			const activeRouteState: RouterActiveRouteState | undefined = ((activeRoutes.length - 1) >= index) ? activeRoutes[index] : undefined;

			// Terminate if no active child of this segment exists
			if (!activeRouteState || activeRouteState.route.type !== RouterSegment.WithChildren) {
				setValidState(undefined, undefined);
				return;
			}

			// Handle redirect if this route segment is the last active route segment in array
			if (index >= lastIndex) {
				if (activeRouteState.route.redirectTo !== undefined) routerNotifier.notify(activeRouteState.route.redirectTo);
				else setValidState(undefined, undefined);
				return;
			}

			const activeChildRouteState: RouterActiveRouteState = activeRoutes[index + 1];

			setValidState(activeRouteState.route.children, activeChildRouteState);
		},
		[segmentId, router, routerNotifier, setValidState]
	)

	const observer = useObserverRef<RouterSubjectNotify>(handleChildElement);

	useEffect(
		() => {
			const currentObserver = observer.current;
			routerSubject.subscribe(currentObserver);
			return () => routerSubject.unsubscribe(currentObserver);
		},
		[routerSubject, observer]
	);

	return [state];
}
