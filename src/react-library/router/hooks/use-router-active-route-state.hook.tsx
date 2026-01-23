import { useCallback, useEffect, useRef, useState } from "react";

import { generateGuid, type IObserver } from "@react-library/common";

import { RouterSegment } from "../enums/router-segment.type";
import type { RouterActiveRouteState } from "../types/router-active-route-state.type";
import type { RouterActiveRoutes } from "../types/router-active-routes.type";
import type { RouterSegmentId } from "../types/router-segment-id.type";

import { useRouterContext } from "./router-context.hook";
import { useRouterSubjectContext } from "./router-subject-context.hook";
import type { RouterSegmentRecord } from "../types/route.type";

export function useRouterActiveRouteState(segmentId: RouterSegmentId): [RouterActiveRouteState | null] {

	const [state, setState] = useState<RouterActiveRouteState | null>(null);
	const currentChildIdRef = useRef<RouterSegmentId | null>(null);

	const router = useRouterContext()
	const routerSubject = useRouterSubjectContext();

	const setValidState = useCallback(
		(children: RouterSegmentRecord, activeChildRouteState?: RouterActiveRouteState) => {

			const childSegmentIds: Array<RouterSegmentId> = Object.keys(children);

			// Terminate if active child doesn't exist as part of the parent route's children
			if (!activeChildRouteState || !childSegmentIds.includes(activeChildRouteState.segmentId)) {
				// Terminate if no active child of this segment exists
				currentChildIdRef.current = null;
				setState(null);
				return;
			}

			// Terminate if we've already set this child element
			if (currentChildIdRef.current === activeChildRouteState.segmentId) return;

			currentChildIdRef.current = activeChildRouteState.segmentId;
			setState(activeChildRouteState);
		},
		[]
	);

	const handleChildElement = useCallback(
		(activeRoutes: RouterActiveRoutes) => {

			// Handle immediate children of the root
			if (segmentId === router.segmentId) {
				setValidState(router.children, activeRoutes[0]);
				return;
			}

			const index: number = activeRoutes.findIndex(x => x.segmentId === segmentId);
			const lastIndex: number = activeRoutes.length - 1;
			const activeRouteState: RouterActiveRouteState = activeRoutes[index];

			// Terminate if no active child of this segment exists
			if (index < 0 || lastIndex < 0 || index >= lastIndex || activeRouteState.route.type !== RouterSegment.WithChildren) {
				currentChildIdRef.current = null;
				setState(null);
				return;
			}

			const activeChildRouteState: RouterActiveRouteState = activeRoutes[index + 1];

			setValidState(activeRouteState.route.children, activeChildRouteState);
		},
		[segmentId, router.children, router.segmentId, setValidState]
	)

	const [observer] = useState<IObserver<RouterActiveRoutes>>(() => ({
		id: generateGuid(),
		update: handleChildElement
	}));

	useEffect(
		() => {
			routerSubject.subscribe(observer);
			return () => routerSubject.unsubscribe(observer);
		},
		[routerSubject, observer]
	);

	return [state];
}
