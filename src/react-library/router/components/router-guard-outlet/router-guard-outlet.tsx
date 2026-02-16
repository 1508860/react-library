import { RouterGuardState } from "../../enums/router-guard-state.type";
import { RouterGuardFailureResolver } from "../router-guard-failure-resolver";
import { RouterGuardLoadingResolver } from "../router-guard-loading-resolver";
import type { RouterGuardOutletProps } from "./types/router-guard-outlet-props.type";

export function RouterGuardOutlet(props: RouterGuardOutletProps) {

	const state = props.hooks[props.hookIndex].hook({ segmentId: props.segmentId });

	return (
		state === RouterGuardState.Failure ?
			<RouterGuardFailureResolver
				defaultFailureElement={props.failureElement}
				failureElement={props.hooks[props.hookIndex].failureElement}
				key={`guard-element-${props.segmentId}`}
				segmentId={props.segmentId}
			/> :
			(
				state === RouterGuardState.Loading ?
					<RouterGuardLoadingResolver
						defaultLoadingElement={props.loadingElement}
						loadingElement={props.hooks[props.hookIndex].loadingElement}
						key={`guard-element-${props.segmentId}`}
						segmentId={props.segmentId}
					/> :
					(
						(props.hooks.length - 1 <= props.hookIndex) ?
							props.children :
							<RouterGuardOutlet
								failureElement={props.failureElement}
								hookIndex={props.hookIndex + 1}
								hooks={props.hooks}
								key={`router-guard-${props.segmentId}-${props.hookIndex}`}
								loadingElement={props.loadingElement}
								segmentId={props.segmentId}
							>
								{props.children}
							</RouterGuardOutlet>
					)
			)
	);
}
