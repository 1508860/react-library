import type { RouterGuardOutletProps } from "./types/router-guard-outlet-props.type";

export function RouterGuardOutlet(props: RouterGuardOutletProps) {

	const state = props.guards[props.guardIndex]({ segmentId: props.segmentId });

	return (
		state ?
			(
				(props.guards.length - 1 <= props.guardIndex) ?
					props.children :
					<RouterGuardOutlet
						guardElement={props.guardElement}
						guardIndex={props.guardIndex + 1}
						guards={props.guards}
						key={`router-guard-${props.segmentId}-${props.guardIndex}`}
						segmentId={props.segmentId}
					>
						{props.children}
					</RouterGuardOutlet>
			) :
			<props.guardElement
				key={`guard-element-${props.segmentId}`}
				segmentId={props.segmentId}
			/>
	);
}
