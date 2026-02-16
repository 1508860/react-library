import type { ReactElement } from "react";

import type { RouterGuardFailureProps } from "@react-library/router";

/**
 * Example router guard default failure component
 * @param props
 */
export function ReactLibraryRouterBasicDemoDefaultGuardFailure(props: RouterGuardFailureProps): ReactElement {
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
			<span>Default Guard: failed to route to - {props.segmentId}</span>
		</div>
	);
}
