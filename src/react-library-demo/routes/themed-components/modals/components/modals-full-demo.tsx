import { Fragment, useCallback, useState } from "react";

import {
	Orientation,
	useResolveState,
	type Callback,
	type IActionConfirm,
	type IIsFullWidth,
	type ITitle
} from "@react-library/common";
import { ModalFull, ModalFullActionConfirmText } from "@react-library/themed-components";

import {
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

import { MODALS_DEMO_FULL_CHILDREN_HEIGHT_PERCENT, MODALS_DEMO_SIZE_PX } from "../constants";

export function ReactLibraryThemedComponentsModalsFullDemo() {

	return (
		<DemoSection title="Modals - Full">
			<ModalsFullDemoItem
			/>
			<ModalsFullDemoItem
				actionConfirm={true}
			/>
			<ModalsFullDemoItem
				title={true}
			/>
			<ModalsFullDemoItem
				isFullWidth={true}
			/>
			<ModalsFullDemoItem
				actionConfirm={true}
				isFullWidth={true}
				title={true}
			/>
		</DemoSection>
	);
}

function ModalsFullDemoItem(props: (
	Partial<IActionConfirm<boolean>> &
	Partial<IIsFullWidth<boolean>> &
	Partial<ITitle<boolean>>
)) {

	const resolveDemoItemConfig = useCallback<Callback<DemoItemConfigCollection>>(
		() => {
			const result: DemoItemConfigCollection = [];
			if (props.actionConfirm) result.push({ key: "actionConfirm", value: props.actionConfirm });
			if (props.isFullWidth) result.push({ key: "isFullWidth", value: props.isFullWidth });
			if (props.title) result.push({ key: "title", value: props.title });
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
				label={demoItemConfig.length === 0 ? "Simple" : undefined}
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
					<ModalFull
						actionConfirm={props.actionConfirm ? { action: handleHideModal, text: ModalFullActionConfirmText.Save } : undefined}
						actionDismiss={{ action: handleHideModal }}
						isFullWidth={props.isFullWidth}
						key="modal-full"
						title={props.title ? "Title" : undefined}
					>
						<DemoContent
							align={DemoContentAlign.Center}
							childrenType={DemoContentChildren.Text}
							colourScheme={DemoContentColourScheme.Secondary}
							height={MODALS_DEMO_FULL_CHILDREN_HEIGHT_PERCENT}
							justify={DemoContentJustify.Center}
							orientation={Orientation.Vertical}
							overflow={DemoContentOverflow.Auto}
							text="Custom demo content"
							width="100%"
						/>
					</ModalFull> :
					<Fragment key="no-modal-full" />
			}
		</>
	);
}
