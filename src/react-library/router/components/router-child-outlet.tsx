import { Fragment, type ReactElement } from "react";

import { RouterSegment } from "../enums/router-segment.type";
import { useRouterChildRouteState } from "../hooks/use-router-child-route-state.hook";
import type { RouterChildOutletProps } from "../types/router-child-outlet-props.type";

export function RouterChildOutlet(props: RouterChildOutletProps): ReactElement {

	const [state] = useRouterChildRouteState(props.segmentId);

	return (
		!state ?
			<Fragment key="no-child" /> :
			(
				state.route.type === RouterSegment.Child ?
					<state.route.element
						key={`child-${state.route.type}-${state.segmentId}`}
						segmentId={state.segmentId}
					/> :
					<state.route.element
						key={`child-${state.route.type}-${state.segmentId}`}
						segmentId={state.segmentId}
					>
						<RouterChildOutlet segmentId={state.segmentId} />
					</ state.route.element>
			)
	);
}
