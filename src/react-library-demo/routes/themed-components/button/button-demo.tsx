import { useCallback, type ReactElement } from "react";

import { ColourSchemeStyle } from "@react-library/common";
import { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";
import {
	ButtonClick,
	ButtonContent,
	ButtonFloating,
	ButtonIconWidth,
	ButtonSelection,
	ButtonShape,
	ButtonSize,
	ButtonSplit,
	ButtonStyle,
	type ButtonClickProps,
	type ButtonFloatingProps,
	type ButtonSelectionProps,
	type ButtonSplitProps
} from "@react-library/themed-components";

import { DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsButtonDemo() {

	const handleButtonClick = useCallback((props: ButtonClickProps, key: number): ReactElement => <ButtonClick {...props} key={key} />, []);
	const handleButtonFloating = useCallback((props: ButtonFloatingProps, key: number): ReactElement => <ButtonFloating {...props} key={key} />, []);
	const handleButtonSelection = useCallback((props: ButtonSelectionProps, key: number): ReactElement => <ButtonSelection {...props} key={key} />, []);
	const handleButtonSplit = useCallback((props: ButtonSplitProps, key: number): ReactElement => <ButtonSplit {...props} key={key} />, []);

	return (
		<>
			<DemoSection
				key="button-content"
				title="Button Content"
			>
				{handleButtonClick({
					content: ButtonContent.Icon,
					iconName: MaterialIconName.Add,
					iconStyle: MaterialIconStyle.Default,
					iconWidth: ButtonIconWidth.Default,
					onClick: () => { },
					shape: ButtonShape.Round,
					size: ButtonSize.Medium,
					style: ButtonStyle.Elevated
				}, 1)}
				{handleButtonClick({
					content: ButtonContent.IconLabel,
					iconName: MaterialIconName.Add,
					iconStyle: MaterialIconStyle.Default,
					label: ButtonContent.IconLabel,
					onClick: () => { },
					shape: ButtonShape.Round,
					size: ButtonSize.Medium,
					style: ButtonStyle.Elevated
				}, 2)}
				{handleButtonClick({
					content: ButtonContent.Label,
					label: ButtonContent.Label,
					onClick: () => { },
					shape: ButtonShape.Round,
					size: ButtonSize.Medium,
					style: ButtonStyle.Elevated
				}, 3)}
			</DemoSection>
			<DemoSection
				key="button-shape"
				title="Button Shape"
			>
				{Object.values(ButtonShape).map((buttonShape, i) => handleButtonClick({
					content: ButtonContent.IconLabel,
					iconName: MaterialIconName.Add,
					iconStyle: MaterialIconStyle.Default,
					label: buttonShape,
					onClick: () => { },
					shape: buttonShape,
					size: ButtonSize.Medium,
					style: ButtonStyle.Elevated
				}, i))}
			</DemoSection>
			<DemoSection
				key="button-size"
				title="Button Size"
			>
				{Object.values(ButtonSize).map((buttonSize, i) => handleButtonClick({
					content: ButtonContent.IconLabel,
					iconName: MaterialIconName.Add,
					iconStyle: MaterialIconStyle.Default,
					label: buttonSize,
					onClick: () => { },
					shape: ButtonShape.Round,
					size: buttonSize,
					style: ButtonStyle.Elevated
				}, i))}
			</DemoSection>
			<DemoSection
				key="button-style"
				title="Button Style"
			>
				{Object.values(ButtonStyle).map((buttonStyle, i) => [false, true].map((isDisabled, j) => handleButtonClick({
					content: ButtonContent.IconLabel,
					iconName: MaterialIconName.Add,
					iconStyle: MaterialIconStyle.Default,
					isDisabled: isDisabled,
					label: `${buttonStyle}${isDisabled ? " disabled" : ""}`,
					onClick: () => { },
					shape: ButtonShape.Round,
					size: ButtonSize.Medium,
					style: buttonStyle
				}, ((i * j) + j))))}
			</DemoSection>
			<DemoSection
				key="button-icon-width"
				title="Button Icon Width"
			>
				{Object.values(ButtonIconWidth).map((buttonIconWidth, i) => handleButtonClick({
					content: ButtonContent.Icon,
					iconName: MaterialIconName.Add,
					iconStyle: MaterialIconStyle.Default,
					iconWidth: buttonIconWidth,
					onClick: () => { },
					shape: ButtonShape.Round,
					size: ButtonSize.Medium,
					style: ButtonStyle.Elevated
				}, i))}
			</DemoSection>
			<DemoSection
				key="button-selection"
				title="Selection Button"
			>
				{[false, true].map((isSelected, i) => [false, true].map((isDisabled, j) => handleButtonSelection({
					content: ButtonContent.IconLabel,
					iconName: MaterialIconName.Add,
					iconStyle: MaterialIconStyle.Default,
					isDisabled: isDisabled,
					isSelected: isSelected,
					label: `${isSelected ? "selected" : "unselected"}${isDisabled ? " disabled" : ""}`,
					onClick: () => { },
					size: ButtonSize.Medium,
					style: ButtonStyle.Elevated
				}, ((i * j) + j))))}
			</DemoSection>
			<DemoSection
				key="button-floating"
				title="Floating Button"
			>
				{Object.values(ColourSchemeStyle).map((colourSchemeStyle, i) => [false, true].map((isDisabled, j) => handleButtonFloating({
					content: ButtonContent.IconLabel,
					iconName: MaterialIconName.Add,
					iconStyle: MaterialIconStyle.Default,
					isDisabled: isDisabled,
					label: `${colourSchemeStyle}${isDisabled ? " disabled" : ""}`,
					onClick: () => { },
					shape: ButtonShape.Round,
					size: ButtonSize.Medium,
					colourSchemeStyle: colourSchemeStyle
				}, ((i * j) + j))))}
			</DemoSection>
			<DemoSection
				key="button-split"
				title="Split Button"
			>
				{[false, true].map((isDisabled, i) => handleButtonSplit({
					content: ButtonContent.IconLabel,
					iconName: MaterialIconName.Add,
					iconStyle: MaterialIconStyle.Default,
					isDisabled: isDisabled,
					menuElement: ButtonSplitMenuElement,
					style: ButtonStyle.Elevated,
					label: `Split button${isDisabled ? " disabled" : ""}`,
					onClick: () => { },
					size: ButtonSize.Medium
				}, i))}
			</DemoSection>
		</>
	);
}

function ButtonSplitMenuElement() {
	return (
		<div
			style={{
				backgroundColor: "black",
				height: 200,
				width: 200
			}}
		>

		</div>
	)
}
