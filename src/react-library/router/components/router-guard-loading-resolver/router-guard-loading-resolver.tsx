import type { RouterGuardLoadingResolverProps } from "./types/router-guard-loading-resolver-props.type";

export function RouterGuardLoadingResolver(props: RouterGuardLoadingResolverProps) {

	if (props.loadingElement) return (
		<props.loadingElement
			key="loading-element"
			segmentId={props.segmentId}
		/>
	);

	return (
		<props.defaultLoadingElement
			key="default-loading-element"
			segmentId={props.segmentId}
		/>
	);
}
