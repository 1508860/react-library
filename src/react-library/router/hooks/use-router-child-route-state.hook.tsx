import { useCallback, useEffect, useRef, useState } from "react";

import { generateGuid, type IObserver } from "@react-library/common";

import { resolveRouteFromActiveSegmentIds } from "../functions/resolve-route-from-active-segment-ids.functions";
import type { RouterActiveSegmentIds } from "../types/router-active-segment-ids.type";
import type { RouterChildRouteState } from "../types/router-child-route-state.type";
import type { RouterSegmentId } from "../types/router-segment-id.type";
import { useRouterContext } from "./router-context.hook";
import { useRouterSubjectContext } from "./router-subject-context.hook";

export function useRouterChildRouteState(segmentId: RouterSegmentId): [RouterChildRouteState | null] {

	const [state, setState] = useState<RouterChildRouteState | null>(null);
	const currentChildIdRef = useRef<RouterSegmentId | null>(null);

	const router = useRouterContext();
	const routerSubject = useRouterSubjectContext();

	const handleChildElement = useCallback(
		(activeSegments: RouterActiveSegmentIds) => {
			const index: number = activeSegments.findIndex(x => x === segmentId);
			const lastIndex: number = activeSegments.length - 1;
			if (index < 0 || lastIndex < 0 || index >= lastIndex) {
				// Terminate if no active child of this segment exists
				currentChildIdRef.current = null;
				setState(null);
				return;
			}

			const childIndex: number = index + 1;
			const newChildSegmentId: RouterSegmentId = activeSegments[childIndex];
			// Terminate if we've already set this child element
			if (currentChildIdRef.current === newChildSegmentId) return;

			const newChildElement = resolveRouteFromActiveSegmentIds(router, activeSegments.slice(0, childIndex + 1));

			currentChildIdRef.current = newChildSegmentId;
			setState({
				route: newChildElement,
				segmentId: currentChildIdRef.current
			});
		},
		[segmentId, router]
	)

	const [observer] = useState<IObserver<RouterActiveSegmentIds>>(() => ({
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
