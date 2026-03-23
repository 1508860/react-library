import { useCallback, useState } from "react";

import { Orientation } from "@react-library/common";
import { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";
import {
	ButtonContent,
	ButtonGroup,
	ButtonGroupAction,
	ButtonGroupAlignItems,
	ButtonIconWidth,
	ButtonSize,
	ButtonStyle
} from "@react-library/themed-components";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow,
	DemoSection
} from "@react-library-demo/shared";

import { ButtonGroupDemoButtonId } from "./button-group-demo-button-id.type";

export function ReactLibraryThemedComponentsButtonGroupDemo() {

	const [buttonIdSingle, setButtonIdSingle] = useState<ButtonGroupDemoButtonId>(ButtonGroupDemoButtonId.First);
	const [buttonIdMulti, setButtonIdMulti] = useState<Array<ButtonGroupDemoButtonId>>([ButtonGroupDemoButtonId.First]);

	const setButtonIdMultiToggle = useCallback(
		(id: ButtonGroupDemoButtonId) => setButtonIdMulti((prev) => {
			const isDelete: boolean = !!prev.find(x => x === id);
			return isDelete ? [...prev].filter(x => x !== id) : [...prev, id]
		}),
		[]
	);

	return (
		<>
			<DemoSection
				key="button-group-click"
				title="Button Group - Click"
			>
				<ButtonGroup
					action={ButtonGroupAction.Click}
					orientation={Orientation.Horizontal}
					size={ButtonSize.Medium}
					style={ButtonStyle.Elevated}
				>
					{{
						content: {
							content: ButtonContent.Icon,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							iconWidth: ButtonIconWidth.Narrow
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.First,
						onClick: () => { }
					}}
					{{
						content: {
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: "Label"
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.Second,
						onClick: () => { }
					}}
					{{
						content: {
							content: ButtonContent.Icon,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							iconWidth: ButtonIconWidth.Default
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.Third,
						onClick: () => { }
					}}
					{{
						content: {
							content: ButtonContent.Label,
							label: "Label"
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.Fourth,
						onClick: () => { }
					}}
					{{
						content: {
							content: ButtonContent.Icon,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							iconWidth: ButtonIconWidth.Wide
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.Fifth,
						onClick: () => { }
					}}
				</ButtonGroup>
			</DemoSection>
			<DemoSection
				key="button-group-split"
				title="Button Group - Split"
			>
				<ButtonGroup
					action={ButtonGroupAction.Split}
					orientation={Orientation.Horizontal}
					size={ButtonSize.Medium}
					style={ButtonStyle.Elevated}
				>
					{{
						content: {
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: "Label"
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.First,
						menuElement: ButtonSplitMenuElement,
						onClick: () => { }
					}}
					{{
						content: {
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: "Label"
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.Second,
						menuElement: ButtonSplitMenuElement,
						onClick: () => { }
					}}
					{{
						content: {
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: "Label"
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.Third,
						menuElement: ButtonSplitMenuElement,
						onClick: () => { }
					}}
				</ButtonGroup>
			</DemoSection>
			<DemoSection
				key="button-group-click-or-split"
				title="Button Group - Click Or Split"
			>
				<ButtonGroup
					action={ButtonGroupAction.ClickOrSplit}
					orientation={Orientation.Horizontal}
					size={ButtonSize.Medium}
					style={ButtonStyle.Elevated}
				>
					{{
						action: ButtonGroupAction.Click,
						content: {
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: "Label"
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.First,
						onClick: () => { },
					}}
					{{
						action: ButtonGroupAction.Split,
						content: {
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: "Label"
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.Second,
						menuElement: ButtonSplitMenuElement,
						onClick: () => { }
					}}
					{{
						action: ButtonGroupAction.Click,
						content: {
							content: ButtonContent.Icon,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							iconWidth: ButtonIconWidth.Default
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.Third,
						onClick: () => { }
					}}
					{{
						action: ButtonGroupAction.Click,
						content: {
							content: ButtonContent.Label,
							label: "Label"
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.Fourth,
						onClick: () => { }
					}}
					{{
						action: ButtonGroupAction.Split,
						content: {
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: "Label"
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.Fifth,
						menuElement: ButtonSplitMenuElement,
						onClick: () => { }
					}}
				</ButtonGroup>
			</DemoSection>
			<DemoSection
				key="button-group-selection-single"
				title="Button Group - Selection - Single"
			>
				<ButtonGroup
					action={ButtonGroupAction.Selection}
					orientation={Orientation.Horizontal}
					size={ButtonSize.Medium}
					style={ButtonStyle.Elevated}
				>
					{{
						content: {
							content: ButtonContent.Icon,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							iconWidth: ButtonIconWidth.Narrow
						},
						isDisabled: false,
						isSelected: buttonIdSingle === ButtonGroupDemoButtonId.First,
						key: ButtonGroupDemoButtonId.First,
						onClick: () => setButtonIdSingle(ButtonGroupDemoButtonId.First)
					}}
					{{
						content: {
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: "Label"
						},
						isDisabled: false,
						isSelected: buttonIdSingle === ButtonGroupDemoButtonId.Second,
						key: ButtonGroupDemoButtonId.Second,
						onClick: () => setButtonIdSingle(ButtonGroupDemoButtonId.Second)
					}}
					{{
						content: {
							content: ButtonContent.Icon,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							iconWidth: ButtonIconWidth.Default
						},
						isDisabled: false,
						isSelected: buttonIdSingle === ButtonGroupDemoButtonId.Third,
						key: ButtonGroupDemoButtonId.Third,
						onClick: () => setButtonIdSingle(ButtonGroupDemoButtonId.Third)
					}}
					{{
						content: {
							content: ButtonContent.Label,
							label: "Label"
						},
						isDisabled: false,
						isSelected: buttonIdSingle === ButtonGroupDemoButtonId.Fourth,
						key: ButtonGroupDemoButtonId.Fourth,
						onClick: () => setButtonIdSingle(ButtonGroupDemoButtonId.Fourth)
					}}
					{{
						content: {
							content: ButtonContent.Icon,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							iconWidth: ButtonIconWidth.Wide
						},
						isDisabled: false,
						isSelected: buttonIdSingle === ButtonGroupDemoButtonId.Fifth,
						key: ButtonGroupDemoButtonId.Fifth,
						onClick: () => setButtonIdSingle(ButtonGroupDemoButtonId.Fifth)
					}}
				</ButtonGroup>
			</DemoSection>
			<DemoSection
				key="button-group-selection-multi"
				title="Button Group - Selection - Multi"
			>
				<ButtonGroup
					action={ButtonGroupAction.Selection}
					orientation={Orientation.Horizontal}
					size={ButtonSize.Medium}
					style={ButtonStyle.Elevated}
				>
					{{
						content: {
							content: ButtonContent.Icon,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							iconWidth: ButtonIconWidth.Narrow
						},
						isDisabled: false,
						isSelected: !!buttonIdMulti.find(x => x === ButtonGroupDemoButtonId.First),
						key: ButtonGroupDemoButtonId.First,
						onClick: () => setButtonIdMultiToggle(ButtonGroupDemoButtonId.First)
					}}
					{{
						content: {
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: "Label"
						},
						isDisabled: false,
						isSelected: !!buttonIdMulti.find(x => x === ButtonGroupDemoButtonId.Second),
						key: ButtonGroupDemoButtonId.Second,
						onClick: () => setButtonIdMultiToggle(ButtonGroupDemoButtonId.Second)
					}}
					{{
						content: {
							content: ButtonContent.Icon,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							iconWidth: ButtonIconWidth.Default
						},
						isDisabled: false,
						isSelected: !!buttonIdMulti.find(x => x === ButtonGroupDemoButtonId.Third),
						key: ButtonGroupDemoButtonId.Third,
						onClick: () => setButtonIdMultiToggle(ButtonGroupDemoButtonId.Third)
					}}
					{{
						content: {
							content: ButtonContent.Label,
							label: "Label"
						},
						isDisabled: false,
						isSelected: !!buttonIdMulti.find(x => x === ButtonGroupDemoButtonId.Fourth),
						key: ButtonGroupDemoButtonId.Fourth,
						onClick: () => setButtonIdMultiToggle(ButtonGroupDemoButtonId.Fourth)
					}}
					{{
						content: {
							content: ButtonContent.Icon,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							iconWidth: ButtonIconWidth.Wide
						},
						isDisabled: false,
						isSelected: !!buttonIdMulti.find(x => x === ButtonGroupDemoButtonId.Fifth),
						key: ButtonGroupDemoButtonId.Fifth,
						onClick: () => setButtonIdMultiToggle(ButtonGroupDemoButtonId.Fifth)
					}}
				</ButtonGroup>
			</DemoSection>
			<DemoSection
				key="button-group-click-vertical-end"
				title="Button Group - Click - Vertical End"
			>
				<ButtonGroup
					align={ButtonGroupAlignItems.End}
					action={ButtonGroupAction.Click}
					orientation={Orientation.Vertical}
					size={ButtonSize.Medium}
					style={ButtonStyle.Elevated}
				>
					{{
						content: {
							content: ButtonContent.Icon,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							iconWidth: ButtonIconWidth.Narrow
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.First,
						onClick: () => { }
					}}
					{{
						content: {
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: "Label"
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.Second,
						onClick: () => { }
					}}
					{{
						content: {
							content: ButtonContent.Icon,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							iconWidth: ButtonIconWidth.Default
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.Third,
						onClick: () => { }
					}}
					{{
						content: {
							content: ButtonContent.Label,
							label: "Label"
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.Fourth,
						onClick: () => { }
					}}
					{{
						content: {
							content: ButtonContent.Icon,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							iconWidth: ButtonIconWidth.Wide
						},
						isDisabled: false,
						key: ButtonGroupDemoButtonId.Fifth,
						onClick: () => { }
					}}
				</ButtonGroup>
			</DemoSection>
		</>
	);
}

function ButtonSplitMenuElement() {
	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Text}
			colourScheme={DemoContentColourScheme.Primary}
			height={200}
			includeRenderCounter={true}
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Auto}
			text="Button split menu content"
			width={200}
		/>
	)
}
