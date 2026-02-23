import { useCallback, useState, type ReactNode } from "react";

import {
	HexRgb,
	HexRgba,
	Orientation,
	PositionStrategyExternal,
	PositionStrategyInternal,
	targetEvent
} from "@react-library/common";
import {
	isVirtualScrollRowStandard,
	Modal,
	Tooltip,
	TooltipInteraction,
	VirtualScrollAccordionParentView,
	type TooltipPositionStrategiesExternal
} from "@react-library/components";

import type { VirtualScrollTestParent, VirtualScrollTestStandard } from "./types";
import { resolveVirtualScrollDemoParentData } from "./functions";

export function ReactLibraryComponentsVirtualScrollDemo() {

	// virtual scroll
	const [defaultRowSize] = useState<number>(() => 30);
	const [vsData] = useState<Array<VirtualScrollTestParent>>(resolveVirtualScrollDemoParentData(1000, 10, defaultRowSize));

	// Modal
	const [showModal, setShowModal] = useState<VirtualScrollTestStandard | false>(false);
	const dismissModal = () => setShowModal(false);

	const handleSetShowModal = useCallback((event: React.MouseEvent, data: VirtualScrollTestParent | VirtualScrollTestStandard) => {
		targetEvent(event, () => isVirtualScrollRowStandard(data) ? setShowModal(data) : false)
	}, []);

	// Tooltip
	const [tooltipPositionStrategies] = useState<TooltipPositionStrategiesExternal>(() => [
		{ positionType: PositionStrategyExternal.BottomCenter, marginTop: 10 },
		{ positionType: PositionStrategyExternal.BottomEnd, marginTop: 10 },
		{ positionType: PositionStrategyExternal.BottomLeft, marginRight: 10, marginTop: 10 },
		{ positionType: PositionStrategyExternal.BottomRight, marginLeft: 10, marginTop: 10 },
		{ positionType: PositionStrategyExternal.BottomStart, marginTop: 10 },
		{ positionType: PositionStrategyExternal.LeftCenter, marginRight: 10 },
		{ positionType: PositionStrategyExternal.LeftEnd, marginRight: 10 },
		{ positionType: PositionStrategyExternal.LeftStart, marginRight: 10 },
		{ positionType: PositionStrategyExternal.RightCenter, marginLeft: 10 },
		{ positionType: PositionStrategyExternal.RightEnd, marginLeft: 10 },
		{ positionType: PositionStrategyExternal.RightStart, marginLeft: 10 },
		{ positionType: PositionStrategyExternal.TopCenter, marginBottom: 10 },
		{ positionType: PositionStrategyExternal.TopEnd, marginBottom: 10 },
		{ positionType: PositionStrategyExternal.TopLeft, marginRight: 10, marginBottom: 10 },
		{ positionType: PositionStrategyExternal.TopRight, marginLeft: 10, marginBottom: 10 },
		{ positionType: PositionStrategyExternal.TopStart, marginBottom: 10 }
	])

	return (<>
		<VirtualScrollAccordionParentView<
			VirtualScrollTestStandard,
			VirtualScrollTestParent
		> data={vsData} elementBufferCount={20} elementSize={defaultRowSize} orientation={Orientation.Vertical}>
			{
				(child) =>
					<div
						onClick={(event) => handleSetShowModal(event, child)}
						style={{
							backgroundColor: isVirtualScrollRowStandard(child) ? "white" : "lightblue",
							borderBottomWidth: 1,
							borderBottomStyle: "solid",
							boxSizing: "border-box",
							display: "flex",
							flexDirection: "row",
							height: "100%",
							paddingLeft: isVirtualScrollRowStandard(child) ? 200 : 0
						}}
					>
						<div key="id">Id = {child.id}</div>
						<Tooltip<TooltipInteraction, HTMLDivElement, ReactNode>
							content={() => <div style={{ backgroundColor: "lightcyan", maxWidth: 100 }}>Hello there - tooltip - {child.text}</div>}
							key="tooltip"
							overlayPortalMargin={20}
							positionStrategy={tooltipPositionStrategies}
							tooltipArrowContent={<div style={{ backgroundColor: "black", height: 20, width: 20 }}></div>}
							tooltipInteractionType={TooltipInteraction.Click}
						>
							{(tooltipChildProps) => {
								child.renderCount += 1;
								return <div {...tooltipChildProps.props} key="text">Text = {child.text} - {child.renderCount}</div>
							}}
						</Tooltip>
					</div>
			}
		</VirtualScrollAccordionParentView>
		{
			!showModal ? <></> :
				<Modal
					backgroundColour={new HexRgb("FF", "FF", "FF")}
					backdropProps={{
						backgroundColour: new HexRgba("00", "00", "00", "22"),
						onDismiss: dismissModal
					}}
					height={100}
					positionStrategy={{ positionType: PositionStrategyInternal.MiddleCenter }}
					width={100}
				>
					<Tooltip<TooltipInteraction, HTMLDivElement, ReactNode>
						content={() => <div>Hello There - modal - tooltip - {showModal.text}</div>}
						positionStrategy={tooltipPositionStrategies}
						tooltipInteractionType={TooltipInteraction.Click}
					>
						{(tooltipChildProps) => <div {...tooltipChildProps.props} >Hello There - modal - {showModal.text}</div>}
					</Tooltip>
				</Modal>
		}
	</>);
}
