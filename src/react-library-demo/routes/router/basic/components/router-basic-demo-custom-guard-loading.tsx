import type { ReactElement } from "react";

import type { RouterGuardElementProps } from "@react-library/router";

/**
 * Example router custom guard loading component
 * @param props
 */
export function ReactLibraryRouterBasicDemoCustomGuardLoading(props: RouterGuardElementProps): ReactElement {
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
			<span>Custom Guard Loading - {props.segmentId}</span>
		</div>
	);
}
