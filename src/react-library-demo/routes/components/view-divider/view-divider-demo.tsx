import { Orientation } from "@react-library/common";
import { ViewDivider } from "@react-library/components";

export function ReactLibraryComponentsViewDividerDemo() {
	return (
		<ViewDivider
			initialValue={40}
			minSizeEnd={200}
			minSizeStart={300}
			orientation={Orientation.Horizontal}
			separatorSize={100}
			staticView="start"
		>
			<div
				key="view-divider-view-1"
				style={{
					alignItems: "center",
					backgroundColor: "paleturquoise",
					display: "flex",
					height: "100%",
					justifyContent: "center",
					width: "100%"
				}}
			>
				This is view 1
			</div>
			<div
				key="view-divider-separator"
				style={{
					backgroundColor: "lightgrey",
					height: "100%",
					width: "100%"
				}}
			>
			</div>
			<div
				key="view-divider-view-2"
				style={{
					alignItems: "center",
					backgroundColor: "goldenrod",
					display: "flex",
					height: "100%",
					justifyContent: "center",
					width: "100%"
				}}
			>
				This is view 2
			</div>
		</ViewDivider>
	);
}
