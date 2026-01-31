import { RouterGuardState } from "../../enums/router-guard-state.type";
import type { RouterGuardOutletProps } from "./types/router-guard-outlet-props.type";

export function RouterGuardOutlet(props: RouterGuardOutletProps) {

	const state = props.hooks[props.hookIndex]({ segmentId: props.segmentId });

	return (
		state === RouterGuardState.Failure ?
			<props.element
				key={`guard-element-${props.segmentId}`}
				segmentId={props.segmentId}
			/> :
			(
				state === RouterGuardState.Loading ?
					<props.loadingElement
						key={`guard-loading-element-${props.segmentId}`}
						segmentId={props.segmentId}
					/> :
					(
						(props.hooks.length - 1 <= props.hookIndex) ?
							props.children :
							<RouterGuardOutlet
								element={props.element}
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
