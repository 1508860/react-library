import type { ReactElement } from "react";

import { ColourSchemeStyle, Orientation, PositionStrategyInternal } from "@react-library/common";
import { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";
import {
	ButtonContent,
	ButtonSize,
	FloatingButtonGroup,
	FloatingButtonGroupButton
} from "@react-library/themed-components";

import { DemoSection } from "@react-library-demo/shared";

export function ReactLibraryFloatingButtonGroupDemo() {
	return (
		<>
			<DemoSection
				key="default"
				title="Floating Button Group - Default"
			>
				<FloatingButtonGroup
					button={{
						type: FloatingButtonGroupButton.Default,
						colourSchemeStyle: ColourSchemeStyle.Primary,
						content: ButtonContent.IconLabel,
						iconName: MaterialIconName.Add,
						iconStyle: MaterialIconStyle.Default,
						isDisabled: false,
						label: "Label",
						onClick: () => { }
					}}
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
					button={{
						type: FloatingButtonGroupButton.Menu,
						children: [
							{
								content: ButtonContent.IconLabel,
								iconName: MaterialIconName.Add,
								iconStyle: MaterialIconStyle.Default,
								isDisabled: false,
								key: 1,
								label: "Label 1",
								onClick: () => { }
							},
							{
								content: ButtonContent.IconLabel,
								iconName: MaterialIconName.Favorite,
								iconStyle: MaterialIconStyle.Default,
								isDisabled: false,
								key: 2,
								label: "Label 2",
								onClick: () => { }
							},
							{
								content: ButtonContent.IconLabel,
								iconName: MaterialIconName.Favorite,
								iconStyle: MaterialIconStyle.Default,
								isDisabled: false,
								key: 3,
								label: "Label 3",
								onClick: () => { }
							},
							{
								content: ButtonContent.IconLabel,
								iconName: MaterialIconName.Favorite,
								iconStyle: MaterialIconStyle.Default,
								isDisabled: false,
								key: 4,
								label: "Label 4",
								onClick: () => { }
							},
							{
								content: ButtonContent.IconLabel,
								iconName: MaterialIconName.Favorite,
								iconStyle: MaterialIconStyle.Default,
								isDisabled: false,
								key: 5,
								label: "Label 5",
								onClick: () => { }
							},
							{
								content: ButtonContent.IconLabel,
								iconName: MaterialIconName.Favorite,
								iconStyle: MaterialIconStyle.Default,
								isDisabled: false,
								key: 6,
								label: "Label 6",
								onClick: () => { }
							}
						],
						colourSchemeStyle: ColourSchemeStyle.Primary,
						iconName: MaterialIconName.Add,
						iconStyle: MaterialIconStyle.Default,
						isDisabled: false,
						orientation: Orientation.Vertical
					}}
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
	return <div style={{
		display: "flex",
		backgroundColor: "coral",
		height: 500,
		justifyContent: "center",
		alignItems: "center",
		width: 500
	}}>
		Button Group Content
	</div>
}
