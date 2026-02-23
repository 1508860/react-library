import { useCallback, useState, type ReactElement } from "react";

import { useCounterState, type Callback, type ICount, type IOnOpen } from "@react-library/common";
import { SideSheet, SideSheetPosition, SideSheetStyle } from "@react-library/themed-components";

import { DemoSection } from "@react-library-demo/shared";

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
					width={400}
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
					width={400}
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
		<div
			style={{
				alignItems: "center",
				backgroundColor: "coral",
				display: "flex",
				flexDirection: "column",
				gap: 20,
				height: "100%",
				justifyContent: "center",
				width: "100%"
			}}
		>
			Content - Back Count: {props.count}
			<button onClick={props.onOpen}>
				Open Side sheet
			</button>
		</div>
	);
}

function SideSheetBody(): ReactElement {
	return (
		<div
			style={{
				alignItems: "center",
				backgroundColor: "coral",
				display: "flex",
				flexDirection: "column",
				height: 400,
				justifyContent: "center",
				width: "100%"
			}}
		>
			Panel content
		</div>
	);
}

function SideSheetFooter(): ReactElement {
	return (
		<div
			style={{
				alignItems: "center",
				backgroundColor: "coral",
				display: "flex",
				flexDirection: "column",
				height: 50,
				justifyContent: "center",
				width: "100%"
			}}
		>
			Panel footer
		</div>
	);
}
