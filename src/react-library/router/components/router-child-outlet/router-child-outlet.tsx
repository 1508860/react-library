import { Fragment, type ReactElement } from "react";

import { RouterSegment } from "../../enums/router-segment.type";
import { useRouterContext } from "../../hooks/router-context.hook";
import { RouterGuardOutlet } from "../router-guard-outlet";

import { useRouterActiveRouteState } from "./hooks/use-router-active-route-state.hook";
import type { RouterChildOutletProps } from "./types/router-child-outlet-props.type";

export function RouterChildOutlet(props: RouterChildOutletProps): ReactElement {

	const router = useRouterContext();
	const [state] = useRouterActiveRouteState(props.segmentId);


	return (
		!state ?
			<Fragment key="no-child" /> :
			(
				state.route.guards ?
					<RouterGuardOutlet
						guardElement={state.route.guardElement ?? router.defaultGuardElement}
						guardIndex={0}
						guards={state.route.guards}
						key={`router-guard-${state.segmentId}-${0}`}
						segmentId={state.segmentId}
					>
						{
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
						}
					</RouterGuardOutlet> :
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
			)
	);
}
