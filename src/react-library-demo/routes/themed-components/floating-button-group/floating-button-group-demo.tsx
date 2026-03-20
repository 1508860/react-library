import type { ReactElement } from "react";

import { ColourSchemeStyle, Orientation, PositionStrategyInternal } from "@react-library/common";
import { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";
import {
	ButtonContent,
	ButtonSize,
	FloatingButtonGroup,
	FloatingButtonGroupButton
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

export function ReactLibraryFloatingButtonGroupDemo() {
	return (
		<>
			<DemoSection
				key="default"
				title="Floating Button Group - Default"
			>
				<FloatingButtonGroup
					type={FloatingButtonGroupButton.Default}
					colourSchemeStyle={ColourSchemeStyle.Primary}
					content={{
						content: ButtonContent.IconLabel,
						iconName: MaterialIconName.Add,
						iconStyle: MaterialIconStyle.Default,
						label: "Label"
					}}
					isDisabled={false}
					onClick={() => { }}
					positionStrategy={PositionStrategyInternal.BottomRight}
					size={ButtonSize.Medium}
				>
					<FloatingButtonGroupChild />
				</FloatingButtonGroup>
			</DemoSection>
			<DemoSection
				key="menu"
				title="Floating Button Group - Menu"
			>
				<FloatingButtonGroup
					type={FloatingButtonGroupButton.Menu}
					colourSchemeStyle={ColourSchemeStyle.Primary}
					iconName={MaterialIconName.Add}
					iconStyle={MaterialIconStyle.Default}
					isDisabled={false}
					items={[
						{
							content: {
								content: ButtonContent.IconLabel,
								iconName: MaterialIconName.Add,
								iconStyle: MaterialIconStyle.Default,
								label: "Label 1"
							},
							isDisabled: false,
							key: 1,
							onClick: () => { }
						},
						{
							content: {
								content: ButtonContent.IconLabel,
								iconName: MaterialIconName.Favorite,
								iconStyle: MaterialIconStyle.Default,
								label: "Label 2"
							},
							isDisabled: false,
							key: 2,
							onClick: () => { }
						},
						{
							content: {
								content: ButtonContent.IconLabel,
								iconName: MaterialIconName.Favorite,
								iconStyle: MaterialIconStyle.Default,
								label: "Label 3"
							},
							isDisabled: false,
							key: 3,
							onClick: () => { }
						},
						{
							content: {
								content: ButtonContent.IconLabel,
								iconName: MaterialIconName.Favorite,
								iconStyle: MaterialIconStyle.Default,
								label: "Label 4"
							},
							isDisabled: false,
							key: 4,
							onClick: () => { }
						},
						{
							content: {
								content: ButtonContent.IconLabel,
								iconName: MaterialIconName.Favorite,
								iconStyle: MaterialIconStyle.Default,
								label: "Label 5"
							},
							isDisabled: false,
							key: 5,
							onClick: () => { }
						},
						{
							content: {
								content: ButtonContent.IconLabel,
								iconName: MaterialIconName.Favorite,
								iconStyle: MaterialIconStyle.Default,
								label: "Label 6"
							},
							isDisabled: false,
							key: 6,
							onClick: () => { }
						}
					]}
					orientation={Orientation.Vertical}
					positionStrategy={PositionStrategyInternal.BottomRight}
					size={ButtonSize.Medium}
				>
					<FloatingButtonGroupChild />
				</FloatingButtonGroup>
			</DemoSection>
		</>
	);
}

function FloatingButtonGroupChild(): ReactElement {
	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Text}
			colourScheme={DemoContentColourScheme.Primary}
			height={500}
			includeRenderCounter={true}
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Auto}
			text="Button group content"
			width={500}
		/>
	)
}
