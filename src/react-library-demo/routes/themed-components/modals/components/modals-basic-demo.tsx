import { Fragment, useCallback, useState } from "react";

import {
	Orientation,
	useResolveState,
	type Callback,
	type IActionConfirm,
	type IChild,
	type IIconName,
	type IIsFullWidth,
	type ITextMaxWidth,
	type ITitle
} from "@react-library/common";
import { MaterialIconName } from "@react-library/material-icons";
import { ModalBasic, ModalBasicActionDismissText } from "@react-library/themed-components";

import {
	DEMO_LOREM_IPSUM,
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentChildrenItem,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow,
	DemoItem,
	DemoSection,
	type DemoItemConfigCollection
} from "@react-library-demo/shared";

import {
	MODALS_DEMO_BASIC_CHILDREN_OVERFLOW_HEIGHT_PX,
	MODALS_DEMO_BASIC_CHILDREN_HEIGHT_PX,
	MODALS_DEMO_BASIC_CHILDREN_TEXT_MAX_WIDTH_PX,
	MODALS_DEMO_SIZE_PX
} from "../constants";

export function ReactLibraryThemedComponentsModalsBasicDemo() {

	return (
		<DemoSection title="Modals - Basic">
			<ModalsBasicDemoItem />
			<ModalsBasicDemoItem
				actionConfirm={true}
			/>
			<ModalsBasicDemoItem
				title={true}
			/>
			<ModalsBasicDemoItem
				iconName={true}
			/>
			<ModalsBasicDemoItem
				iconName={true}
				title={true}
			/>
			<ModalsBasicDemoItem
				textMaxWidth={true}
				title={true}
			/>
			<ModalsBasicDemoItem
				iconName={true}
				textMaxWidth={true}
				title={true}
			/>
			<ModalsBasicDemoItem
				actionConfirm={true}
				children={true}
				title={true}
			/>
			<ModalsBasicDemoItem
				actionConfirm={true}
				children={true}
				isFullWidth={true}
				title={true}
			/>
			<ModalsBasicDemoItem
				actionConfirm={true}
				children={true}
				iconName={true}
				isFullWidth={true}
				title={true}
			/>
		</DemoSection>
	);
}

function ModalsBasicDemoItem(props: (
	Partial<IActionConfirm<boolean>> &
	Partial<IChild<boolean>> &
	Partial<IIconName<boolean>> &
	Partial<IIsFullWidth<boolean>> &
	Partial<ITextMaxWidth<boolean>> &
	Partial<ITitle<boolean>>
)) {

	const resolveDemoItemConfig = useCallback<Callback<DemoItemConfigCollection>>(
		() => {
			const result: DemoItemConfigCollection = [];
			if (props.actionConfirm) result.push({ key: "actionConfirm", value: props.actionConfirm })
			if (props.children) result.push({ key: "children", value: props.children })
			if (props.iconName) result.push({ key: "iconName", value: props.iconName })
			if (props.isFullWidth) result.push({ key: "isFullWidth", value: props.isFullWidth })
			if (props.textMaxWidth) result.push({ key: "textMaxWidth", value: props.textMaxWidth })
			if (props.title) result.push({ key: "title", value: props.title })
			return result;
		},
		[props]
	);
	const demoItemConfig = useResolveState<DemoItemConfigCollection>(resolveDemoItemConfig);

	const [showModal, setShowModal] = useState<boolean>(() => false);
	const handleHideModal = useCallback<Callback<void>>(() => setShowModal(false), []);
	const handleShowModal = useCallback<Callback<void>>(() => setShowModal(true), []);

	return (
		<>
			<DemoItem
				config={demoItemConfig}
				height={MODALS_DEMO_SIZE_PX}
				key="demo-content"
				label={demoItemConfig.length === 0 ? "Basic" : undefined}
				width={MODALS_DEMO_SIZE_PX}
			>
				<DemoContent
					align={DemoContentAlign.Center}
					childrenType={DemoContentChildren.Items}
					colourScheme={DemoContentColourScheme.Primary}
					height="100%"
					items={[
						{
							type: DemoContentChildrenItem.Button,
							action: handleShowModal,
							id: 1,
							text: "Open"
						}
					]}
					justify={DemoContentJustify.Center}
					orientation={Orientation.Vertical}
					overflow={DemoContentOverflow.Auto}
					width="100%"
				/>
			</DemoItem>
			{
				showModal ?
					<ModalBasic
						actionConfirm={props.actionConfirm ? { action: handleHideModal, text: "Confirm" } : undefined}
						actionDismiss={{ action: handleHideModal, text: ModalBasicActionDismissText.Close }}
						iconName={props.iconName ? MaterialIconName.Delete : undefined}
						isFullWidth={props.isFullWidth}
						key="modal-basic"
						text={DEMO_LOREM_IPSUM}
						textMaxWidth={props.textMaxWidth ? MODALS_DEMO_BASIC_CHILDREN_TEXT_MAX_WIDTH_PX : undefined}
						title={props.title ? "Title" : undefined}
					>
						{
							props.children ?
								<DemoContent
									align={DemoContentAlign.Center}
									childrenType={DemoContentChildren.Any}
									colourScheme={DemoContentColourScheme.Secondary}
									height={MODALS_DEMO_BASIC_CHILDREN_HEIGHT_PX}
									justify={DemoContentJustify.Center}
									orientation={Orientation.Vertical}
									overflow={DemoContentOverflow.Auto}
									width="100%"
								>
									<DemoContent
										align={DemoContentAlign.Center}
										childrenType={DemoContentChildren.Text}
										colourScheme={DemoContentColourScheme.Secondary}
										height={MODALS_DEMO_BASIC_CHILDREN_OVERFLOW_HEIGHT_PX}
										justify={DemoContentJustify.Center}
										orientation={Orientation.Vertical}
										overflow={DemoContentOverflow.Auto}
										text="Custom demo content"
										width="100%"
									/>
								</DemoContent> : undefined
						}
					</ModalBasic> :
					<Fragment key="no-modal-basic" />
			}
		</>
	);
}
