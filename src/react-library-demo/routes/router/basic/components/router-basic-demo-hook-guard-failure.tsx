import type { ReactElement } from "react";

import type { RouterGuardFailureProps } from "@react-library/router";

/**
 * Example router guard hook failure component
 * @param props
 */
export function ReactLibraryRouterBasicDemoHookGuardFailure(props: RouterGuardFailureProps): ReactElement {
	return (
		<div
			style={{
				alignItems: "start",
				backgroundColor: "coral",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				minHeight: 20,
				paddingLeft: 20,
				paddingRight: 20,
				width: "100%"
			}}
		>
			<span>Hook Guard: failed to route to - {props.segmentId}</span>
		</div>
	);
}
