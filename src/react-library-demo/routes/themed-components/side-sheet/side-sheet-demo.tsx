import { useCallback, useState, type ReactElement } from "react";

import {
	Orientation,
	useCounterState,
	type Callback,
	type ICount,
	type IOnOpen
} from "@react-library/common";
import {
	SIDE_SHEET_PANEL_MAX_WIDTH_PX,
	SideSheet,
	SideSheetPosition,
	SideSheetStyle
} from "@react-library/themed-components";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentChildrenItem,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsSideSheetDemo() {

	const [show, setShow] = useState<boolean>(() => false);
	const handleClose = useCallback(() => setShow(false), []);
	const handleOpen = useCallback(() => setShow(true), []);

	const { state: backCounter, increment: incrementBackCounter } = useCounterState(0);

	return (
		<>
			<DemoSection
				key="standard"
				title="Side Sheet - Standard"
				contentHeight={400}
			>
				<SideSheet
					style={SideSheetStyle.Standard}
					body={SideSheetBody}
					includeDivider={true}
					onBack={incrementBackCounter}
					onClose={handleClose}
					position={SideSheetPosition.End}
					show={show}
					title="Side Sheet Title"
					width={SIDE_SHEET_PANEL_MAX_WIDTH_PX}
				>
					<SideSheetChild
						count={backCounter}
						onOpen={handleOpen}
					/>
				</SideSheet>
			</DemoSection>
			<DemoSection
				key="modal"
				title="Side Sheet - Modal"
				contentHeight={400}
			>
				<SideSheet
					style={SideSheetStyle.Modal}
					body={SideSheetBody}
					detach={true}
					footer={SideSheetFooter}
					includeBodyPaddingBottom={true}
					includeBodyPaddingHorizontal={true}
					onBack={incrementBackCounter}
					onClose={handleClose}
					position={SideSheetPosition.Start}
					show={show}
					showFooterDivider={true}
					title="Side Sheet Title"
					width={SIDE_SHEET_PANEL_MAX_WIDTH_PX}
				>
					<SideSheetChild
						count={backCounter}
						onOpen={handleOpen}
					/>
				</SideSheet>
			</DemoSection>
		</>
	);
}

function SideSheetChild(props: (ICount<number> & IOnOpen<Callback<void>>)): ReactElement {
	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Items}
			colourScheme={DemoContentColourScheme.Primary}
			height="100%"
			includeRenderCounter={true}
			items={[
				{ id: 1, type: DemoContentChildrenItem.Text, text: `Content - Back Count: ${props.count}` },
				{ id: 2, type: DemoContentChildrenItem.Button, action: props.onOpen, text: "Open side sheet" }
			]}
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Auto}
			width="100%"
		/>
	);
}

function SideSheetBody(): ReactElement {
	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Text}
			colourScheme={DemoContentColourScheme.Primary}
			height={400}
			includeRenderCounter={true}
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Auto}
			text="Panel content"
			width="100%"
		/>
	);
}

function SideSheetFooter(): ReactElement {
	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Text}
			colourScheme={DemoContentColourScheme.Primary}
			height={80}
			includeRenderCounter={true}
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Auto}
			text="Panel footer"
			width="100%"
		/>
	);
}
