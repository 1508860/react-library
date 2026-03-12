import { Fragment, useCallback, useState, type ReactElement } from "react";
import { createPortal } from "react-dom";

import { Orientation, type IShow } from "@react-library/common";
import {
	OverlayPortal,
	useOverlayPortalContext,
	useOverlayPortalViewportPositionPxContext
} from "@react-library/components";

import {
	DemoColumn,
	DemoColumnContainer,
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentChildrenItem,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow,
	DemoPositionAbsolute,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryComponentsOverlayPortalDemo() {

	const [showPortalContent, setShowPortalContent] = useState<boolean>(() => false);
	const handleHidePortalContent = useCallback(() => setShowPortalContent(false), []);
	const handleShowPortalContent = useCallback(() => setShowPortalContent(true), []);

	return (
		<DemoSection
			contentHeight={500}
			title="Overlay Portal - Modal"
		>
			<DemoColumnContainer width="100%">
				<DemoColumn weight={1}>
					<DemoContent
						align={DemoContentAlign.Center}
						childrenType={DemoContentChildren.Items}
						colourScheme={DemoContentColourScheme.Secondary}
						height="100%"
						includeRenderCounter={true}
						items={[
							{ type: DemoContentChildrenItem.Button, action: handleShowPortalContent, id: 1, text: "Show portal content" },
							{ type: DemoContentChildrenItem.Button, action: handleHidePortalContent, id: 2, text: "Hide portal content" }
						]}
						justify={DemoContentJustify.Center}
						orientation={Orientation.Vertical}
						overflow={DemoContentOverflow.Auto}
						paddingBottom={20}
						paddingLeft={20}
						paddingRight={20}
						paddingTop={20}
						width="100%"
					/>
				</DemoColumn>
				<DemoColumn weight={1}>
					<OverlayPortal>
						<ReactLibraryComponentsOverlayPortalDemoModal show={showPortalContent} />
					</OverlayPortal>
				</DemoColumn>
			</DemoColumnContainer>
		</DemoSection>
	);
}

function ReactLibraryComponentsOverlayPortalDemoModal(props: IShow): ReactElement {

	const overlayPortal = useOverlayPortalContext();
	const overlayPortalViewportPositionPx = useOverlayPortalViewportPositionPxContext();

	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Any}
			colourScheme={DemoContentColourScheme.Primary}
			height="100%"
			includeRenderCounter={true}
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Auto}
			paddingBottom={20}
			paddingLeft={20}
			paddingRight={20}
			paddingTop={20}
			width="100%"
		>
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Text}
				colourScheme={DemoContentColourScheme.Primary}
				height="100%"
				includeRenderCounter={true}
				justify={DemoContentJustify.Center}
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				paddingBottom={20}
				paddingLeft={20}
				paddingRight={20}
				paddingTop={20}
				text="App content"
				width="100%"
			/>
			{
				props.show ?
					createPortal(
						<DemoPositionAbsolute
							top={0}
							left={0}
						>
							<DemoContent
								align={DemoContentAlign.Center}
								childrenType={DemoContentChildren.Items}
								colourScheme={DemoContentColourScheme.Tertiary}
								height={300}
								includeRenderCounter={true}
								items={[
									{
										type: DemoContentChildrenItem.Text,
										id: 1,
										text: "Portal Content"
									},
									{
										type: DemoContentChildrenItem.Text,
										id: 2,
										text: `Portal height: ${overlayPortalViewportPositionPx.height}`
									},
									{
										type: DemoContentChildrenItem.Text,
										id: 3,
										text: `Portal margin bottom: ${overlayPortalViewportPositionPx.marginBottom}`
									},
									{
										type: DemoContentChildrenItem.Text,
										id: 4,
										text: `Portal margin left: ${overlayPortalViewportPositionPx.marginLeft}`
									},
									{
										type: DemoContentChildrenItem.Text,
										id: 5,
										text: `Portal margin right: ${overlayPortalViewportPositionPx.marginRight}`
									},
									{
										type: DemoContentChildrenItem.Text,
										id: 6,
										text: `Portal margin top: ${overlayPortalViewportPositionPx.marginTop}`
									},
									{
										type: DemoContentChildrenItem.Text,
										id: 7,
										text: `Portal width: ${overlayPortalViewportPositionPx.width}`
									}
								]}
								justify={DemoContentJustify.Center}
								orientation={Orientation.Vertical}
								overflow={DemoContentOverflow.Auto}
								paddingBottom={20}
								paddingLeft={20}
								paddingRight={20}
								paddingTop={20}
								width={300}
							/>
						</DemoPositionAbsolute>,
						overlayPortal
					) :
					<Fragment key="no-portal" />
			}
		</DemoContent>
	);
}
