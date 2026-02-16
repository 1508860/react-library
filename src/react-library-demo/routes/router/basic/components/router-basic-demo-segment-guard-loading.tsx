import type { ReactElement } from "react";

import type { RouterGuardLoadingProps } from "@react-library/router";

/**
 * Example router guard segment loading component
 * @param props
 */
export function ReactLibraryRouterBasicDemoSegmentGuardLoading(props: RouterGuardLoadingProps): ReactElement {
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
			<span>Segment Guard Loading - {props.segmentId}</span>
		</div>
	);
}
