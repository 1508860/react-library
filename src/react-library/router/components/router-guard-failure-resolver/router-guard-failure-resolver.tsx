import type { RouterGuardFailureResolverProps } from "./types/router-guard-failure-resolver-props.type";

export function RouterGuardFailureResolver(props: RouterGuardFailureResolverProps) {

	if (props.failureElement) return (
		<props.failureElement
			key="failure-element"
			segmentId={props.segmentId}
		/>
	);

	return (
		<props.defaultFailureElement
			key="default-failure-element"
			segmentId={props.segmentId}
		/>
	);
}
