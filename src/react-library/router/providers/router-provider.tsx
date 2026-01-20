import { useCallback, useEffect, useRef, useState } from "react";

import { Notifier, Subject, urlReplaceState, type IObserver } from "@react-library/common";

import { RouterChildOutlet } from "../components/router-child-outlet";
import { ROUTER_CONTEXT } from "../constants/router-context.const";
import { ROUTER_NOTIFIER_CONTEXT } from "../constants/router-notifier-context.const";
import { ROUTER_SUBJECT_CONTEXT } from "../constants/router-subject-context.const";
import { resolveRouterSegmentIdsFromUrl } from "../functions/resolve-router-segment-ids-from-url.function";
import { resolveRouterUrlToChild } from "../functions/resolve-router-url-to-child.function";
import type { RouterActiveSegmentIds } from "../types/router-active-segment-ids.type";
import type { RouterNotifier } from "../types/router-notifier.type";
import type { RouterProps } from "../types/router-props.type";
import type { RouterSegmentId } from "../types/router-segment-id.type";
import type { RouterSubject } from "../types/router-subject.type";

/**
 * Component for providing routes as well as a notifier and observer for handling requests for route changes and notifying observers
 * Should be used once at the root of an app
 * @param props
 */
export function RouterProvider(props: RouterProps) {

	// Handle notifications and observers to communicate changes to routing
	const activeSegmentIdsRef = useRef<RouterActiveSegmentIds>(
		resolveRouterSegmentIdsFromUrl(props.routes, new URL(window.location.href))
	);

	const [routerSubject] = useState<RouterSubject>(() => new Subject<RouterActiveSegmentIds>({
		onSubscribe: (observer: IObserver<RouterActiveSegmentIds>) => observer.update(activeSegmentIdsRef.current),
	}));

	const handleRouterChange = useCallback(
		(toChildRoute: RouterSegmentId) => {
			const newUrl = resolveRouterUrlToChild(props.routes, toChildRoute);
			urlReplaceState(newUrl);
			const activeSegmentIds = resolveRouterSegmentIdsFromUrl(props.routes, newUrl);
			activeSegmentIdsRef.current = activeSegmentIds;
			routerSubject.notify(activeSegmentIds);
		},
		[props.routes, routerSubject]
	);

	const [routerNotifier] = useState<RouterNotifier>(() => new Notifier<RouterSegmentId>(handleRouterChange));

	// Handle set up of initial route and monitor prop changes
	useEffect(
		() => handleRouterChange(activeSegmentIdsRef.current[activeSegmentIdsRef.current.length - 1]),
		[handleRouterChange]
	);

	return (
		<ROUTER_CONTEXT.Provider value={props.routes}>
			<ROUTER_SUBJECT_CONTEXT.Provider value={routerSubject}>
				<ROUTER_NOTIFIER_CONTEXT.Provider value={routerNotifier}>
					<props.routes.element
						id={props.routes.segmentId}
						key={`child-${props.routes.type}-${props.routes.segmentId}`}
					>
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
 * - Add guard array to run sequentially (async or not async)
 * 
 * - Remove segment id from root
 * 
 * - Tidy up router package and comment everything
 */
