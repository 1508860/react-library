import { useCallback, useEffect, useRef, useState } from "react";

import { Notifier, Subject, urlReplaceState, type IObserver } from "@react-library/common";

import { RouterChildOutlet } from "../components/router-child-outlet";
import { ROUTER_CONTEXT } from "../constants/router-context.const";
import { ROUTER_NOTIFIER_CONTEXT } from "../constants/router-notifier-context.const";
import { ROUTER_SUBJECT_CONTEXT } from "../constants/router-subject-context.const";
import { resolveRouterActiveRoutesFromUrl } from "../functions/resolve-router-active-routes-from-url.function";
import { resolveRouterUrlToChild } from "../functions/resolve-router-url-to-child.function";
import type { RouterActiveRoutes } from "../types/router-active-routes.type";
import type { RouterNotifier } from "../types/router-notifier.type";
import type { RouterProps } from "../types/router-props.type";
import type { RouterSegmentId } from "../types/router-segment-id.type";
import type { RouterSubjectNotify } from "../types/router-subject-notify.type";
import type { RouterSubject } from "../types/router-subject.type";

/**
 * Component for providing routes as well as a notifier and observer for handling requests for route changes and notifying observers
 * Should be used once at the root of an app
 * @param props
 */
export function RouterProvider(props: RouterProps) {

	const routerNotificationCount = useRef<number>(0);

	const resolveRouterSubjectNotify = useCallback<(activeRoutes: RouterActiveRoutes) => RouterSubjectNotify>(
		(activeRoutes: RouterActiveRoutes) => {
			routerNotificationCount.current += 1;
			return {
				routerNotificationCount: routerNotificationCount.current,
				routes: activeRoutes
			}
		},
		[]
	)

	// Handle notifications and observers to communicate changes to routing
	const routerSubjectNotifyRef = useRef<RouterSubjectNotify>(
		resolveRouterSubjectNotify(resolveRouterActiveRoutesFromUrl(props.routes, new URL(window.location.href)))
	);

	const [routerSubject] = useState<RouterSubject>(() => new Subject<RouterSubjectNotify>({
		onSubscribe: (observer: IObserver<RouterSubjectNotify>) => observer.update(routerSubjectNotifyRef.current),
	}));

	const handleRouterChange = useCallback(
		(toRoute: RouterSegmentId) => {
			const newUrl = resolveRouterUrlToChild(props.routes, toRoute);
			urlReplaceState(newUrl);
			const activeRoutes = resolveRouterActiveRoutesFromUrl(props.routes, newUrl);
			routerSubjectNotifyRef.current = resolveRouterSubjectNotify(activeRoutes);
			routerSubject.notify(routerSubjectNotifyRef.current);
		},
		[props.routes, resolveRouterSubjectNotify, routerSubject]
	);

	const [routerNotifier] = useState<RouterNotifier>(() => new Notifier<RouterSegmentId>(handleRouterChange));

	// Handle set up of initial route and monitor prop changes
	useEffect(
		() => handleRouterChange(
			routerSubjectNotifyRef.current.routes.length > 0 ?
				routerSubjectNotifyRef.current.routes[routerSubjectNotifyRef.current.routes.length - 1].segmentId :
				props.routes.segmentId
		),
		[handleRouterChange, props.routes.segmentId]
	);

	return (
		<ROUTER_CONTEXT.Provider value={props.routes}>
			<ROUTER_SUBJECT_CONTEXT.Provider value={routerSubject}>
				<ROUTER_NOTIFIER_CONTEXT.Provider value={routerNotifier}>
					<props.routes.element segmentId={props.routes.segmentId}>
						<RouterChildOutlet segmentId={props.routes.segmentId} />
					</ props.routes.element>
				</ROUTER_NOTIFIER_CONTEXT.Provider>
			</ROUTER_SUBJECT_CONTEXT.Provider>
		</ROUTER_CONTEXT.Provider>
	);
}

/**
 * TODO
 * - Add default child to root and with children routes (automatically root to these if no child is selected in the router outlet component?)
 * - Query / Route parameters?
 * 
 * - Remove segment id from root
 * 
 * - Tidy up router package and comment everything
 */
