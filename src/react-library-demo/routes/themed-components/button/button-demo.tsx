import { useState } from "react";

import { ColourSchemeStyle, Orientation, type ArrayFixedLength2 } from "@react-library/common";
import { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";
import {
	ButtonClick,
	type ButtonClickStyle,
	ButtonContent,
	ButtonFloating,
	ButtonIconWidth,
	ButtonSelection,
	ButtonShape,
	ButtonSize,
	ButtonSplit,
	ButtonStyle,
	ButtonText,
	type ButtonTextStyle,
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

export function ReactLibraryThemedComponentsButtonDemo() {

	const [isDisabledStates] = useState<ArrayFixedLength2<boolean>>(() => [false, true]);
	const [isSelectedStates] = useState<ArrayFixedLength2<boolean>>(() => [false, true]);
	const [buttonClickStyles] = useState<Array<ButtonClickStyle>>(
		() => Object.values(ButtonStyle)
			.filter(buttonStyle => (
				buttonStyle !== ButtonStyle.Text
			))
	);

	const [buttonTextStyles] = useState<Array<ButtonTextStyle>>(
		() => Object.values(ButtonStyle)
			.filter(buttonStyle => (
				buttonStyle !== ButtonStyle.Elevated &&
				buttonStyle !== ButtonStyle.Filled &&
				buttonStyle !== ButtonStyle.Outline
			))
	);

	return (
		<>
			<DemoSection
				key="button-content"
				title="Button Content"
			>
				<ButtonClick
					content={{
						content: ButtonContent.Icon,
						iconName: MaterialIconName.Add,
						iconStyle: MaterialIconStyle.Default,
						iconWidth: ButtonIconWidth.Default
					}}
					key={1}
					onClick={() => { }}
					shape={ButtonShape.Round}
					size={ButtonSize.Medium}
					style={ButtonStyle.Elevated}
				/>
				<ButtonClick
					content={{
						content: ButtonContent.IconLabel,
						iconName: MaterialIconName.Add,
						iconStyle: MaterialIconStyle.Default,
						label: ButtonContent.IconLabel
					}}
					key={2}
					onClick={() => { }}
					shape={ButtonShape.Round}
					size={ButtonSize.Medium}
					style={ButtonStyle.Elevated}
				/>
				<ButtonClick
					content={{
						content: ButtonContent.Label,
						label: ButtonContent.Label
					}}
					key={3}
					onClick={() => { }}
					shape={ButtonShape.Round}
					size={ButtonSize.Medium}
					style={ButtonStyle.Elevated}
				/>
			</DemoSection>
			<DemoSection
				key="button-shape"
				title="Button Shape"
			>
				{Object.values(ButtonShape).map(buttonShape =>
					<ButtonClick
						content={{
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: buttonShape
						}}
						key={buttonShape}
						onClick={() => { }}
						shape={buttonShape}
						size={ButtonSize.Medium}
						style={ButtonStyle.Elevated}
					/>
				)}
			</DemoSection>
			<DemoSection
				key="button-size"
				title="Button Size"
			>
				{Object.values(ButtonSize).map(buttonSize =>
					<ButtonClick
						content={{
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: buttonSize
						}}
						key={buttonSize}
						onClick={() => { }}
						shape={ButtonShape.Round}
						size={buttonSize}
						style={ButtonStyle.Elevated}
					/>
				)}
			</DemoSection>
			<DemoSection
				key="button-style"
				title="Button Style"
			>
				{buttonClickStyles.map(buttonStyle => isDisabledStates.map(isDisabled =>
					<ButtonClick
						content={{
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: `${buttonStyle}${isDisabled ? " disabled" : ""}`
						}}
						isDisabled={isDisabled}
						key={`${buttonStyle}-${isDisabled}`}
						onClick={() => { }}
						shape={ButtonShape.Round}
						size={ButtonSize.Medium}
						style={buttonStyle}
					/>
				))}
			</DemoSection>
			<DemoSection
				key="button-icon-width"
				title="Button Icon Width"
			>
				{Object.values(ButtonIconWidth).map(buttonIconWidth =>
					<ButtonClick
						content={{
							content: ButtonContent.Icon,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							iconWidth: buttonIconWidth
						}}
						key={buttonIconWidth}
						onClick={() => { }}
						shape={ButtonShape.Round}
						size={ButtonSize.Medium}
						style={ButtonStyle.Elevated}
					/>
				)}
			</DemoSection>
			<DemoSection
				key="button-selection"
				title="Selection Button"
			>
				{isSelectedStates.map(isSelected => isDisabledStates.map(isDisabled =>
					<ButtonSelection
						content={{
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: `${isSelected ? "selected" : "unselected"}${isDisabled ? " disabled" : ""}`
						}}
						isDisabled={isDisabled}
						isSelected={isSelected}
						key={`${isSelected}-${isDisabled}`}
						onClick={() => { }}
						size={ButtonSize.Medium}
						style={ButtonStyle.Elevated}
					/>
				))}
			</DemoSection>
			<DemoSection
				key="button-floating"
				title="Floating Button"
			>
				{Object.values(ColourSchemeStyle).map(colourSchemeStyle => isDisabledStates.map(isDisabled =>
					<ButtonFloating
						colourSchemeStyle={colourSchemeStyle}
						content={{
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: `${colourSchemeStyle}${isDisabled ? " disabled" : ""}`
						}}
						isDisabled={isDisabled}
						key={`${colourSchemeStyle}-${isDisabled}`}
						onClick={() => { }}
						shape={ButtonShape.Round}
						size={ButtonSize.Medium}
					/>
				))}
			</DemoSection>
			<DemoSection
				key="button-split"
				title="Split Button"
			>
				{isDisabledStates.map(isDisabled =>
					<ButtonSplit
						content={{
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: `Split button${isDisabled ? " disabled" : ""}`
						}}
						isDisabled={isDisabled}
						menuElement={ButtonSplitMenuElement}
						key={`${isDisabled}`}
						onClick={() => { }}
						style={ButtonStyle.Elevated}
						size={ButtonSize.Medium}
					/>
				)}
			</DemoSection>
			<DemoSection
				key="button-text"
				title="Text Button"
			>
				{buttonTextStyles.map(buttonStyle => isDisabledStates.map(isDisabled =>
					<ButtonText
						content={{
							content: ButtonContent.IconLabel,
							iconName: MaterialIconName.Add,
							iconStyle: MaterialIconStyle.Default,
							label: `${buttonStyle}${isDisabled ? " disabled" : ""}`
						}}
						isDisabled={isDisabled}
						key={`${buttonStyle}-${isDisabled}`}
						onClick={() => { }}
						size={ButtonSize.Medium}
						style={buttonStyle}
					/>
				))}
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
			text="Button split menu element"
			width={200}
		/>
	)
}
