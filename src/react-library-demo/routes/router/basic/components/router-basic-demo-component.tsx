import type { ReactElement } from "react";

import type { RouterElementProps } from "@react-library/router";

/**
 * Example router segment component
 * @param props
 */
export function ReactLibraryRouterBasicDemoComponent(props: RouterElementProps): ReactElement {
	return (
		<div
			key="text"
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
			<span>Segment: {props.segmentId}</span>
		</div>
	);
}
