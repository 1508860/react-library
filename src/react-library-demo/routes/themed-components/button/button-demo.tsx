import { ColourSchemeStyle, Orientation } from "@react-library/common";
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
	ButtonStyle
} from "@react-library/themed-components";

import {
	DemoContent,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsButtonDemo() {
	return (
		<>
			<DemoSection
				key="button-content"
				title="Button Content"
			>
				<ButtonClick
					content={ButtonContent.Icon}
					iconName={MaterialIconName.Add}
					iconStyle={MaterialIconStyle.Default}
					iconWidth={ButtonIconWidth.Default}
					key={1}
					onClick={() => { }}
					shape={ButtonShape.Round}
					size={ButtonSize.Medium}
					style={ButtonStyle.Elevated}
				/>
				<ButtonClick
					content={ButtonContent.IconLabel}
					iconName={MaterialIconName.Add}
					iconStyle={MaterialIconStyle.Default}
					label={ButtonContent.IconLabel}
					key={2}
					onClick={() => { }}
					shape={ButtonShape.Round}
					size={ButtonSize.Medium}
					style={ButtonStyle.Elevated}
				/>
				<ButtonClick
					content={ButtonContent.Label}
					label={ButtonContent.Label}
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
				{Object.values(ButtonShape).map((buttonShape, i) =>
					<ButtonClick
						content={ButtonContent.IconLabel}
						iconName={MaterialIconName.Add}
						iconStyle={MaterialIconStyle.Default}
						label={buttonShape}
						key={i}
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
				{Object.values(ButtonSize).map((buttonSize, i) =>
					<ButtonClick
						content={ButtonContent.IconLabel}
						iconName={MaterialIconName.Add}
						iconStyle={MaterialIconStyle.Default}
						label={buttonSize}
						key={i}
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
				{Object.values(ButtonStyle).map((buttonStyle, i) => [false, true].map((isDisabled, j) =>
					<ButtonClick
						content={ButtonContent.IconLabel}
						iconName={MaterialIconName.Add}
						iconStyle={MaterialIconStyle.Default}
						isDisabled={isDisabled}
						label={`${buttonStyle}${isDisabled ? " disabled" : ""}`}
						key={((i * j) + j)}
						onClick={() => { }}
						shape={ButtonShape.Round}
						size={ButtonSize.Medium}
						style={ButtonStyle.Elevated}
					/>
				))}
			</DemoSection>
			<DemoSection
				key="button-icon-width"
				title="Button Icon Width"
			>
				{Object.values(ButtonIconWidth).map((buttonIconWidth, i) =>
					<ButtonClick
						content={ButtonContent.Icon}
						iconName={MaterialIconName.Add}
						iconStyle={MaterialIconStyle.Default}
						iconWidth={buttonIconWidth}
						key={i}
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
				{[false, true].map((isSelected, i) => [false, true].map((isDisabled, j) =>
					<ButtonSelection
						content={ButtonContent.IconLabel}
						iconName={MaterialIconName.Add}
						iconStyle={MaterialIconStyle.Default}
						isDisabled={isDisabled}
						isSelected={isSelected}
						label={`${isSelected ? "selected" : "unselected"}${isDisabled ? " disabled" : ""}`}
						key={((i * j) + j)}
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
				{Object.values(ColourSchemeStyle).map((colourSchemeStyle, i) => [false, true].map((isDisabled, j) =>
					<ButtonFloating
						colourSchemeStyle={colourSchemeStyle}
						content={ButtonContent.IconLabel}
						iconName={MaterialIconName.Add}
						iconStyle={MaterialIconStyle.Default}
						isDisabled={isDisabled}
						key={((i * j) + j)}
						label={`${colourSchemeStyle}${isDisabled ? " disabled" : ""}`}
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
				{[false, true].map((isDisabled, i) =>
					<ButtonSplit
						content={ButtonContent.IconLabel}
						iconName={MaterialIconName.Add}
						iconStyle={MaterialIconStyle.Default}
						isDisabled={isDisabled}
						menuElement={ButtonSplitMenuElement}
						key={i}
						label={`Split button${isDisabled ? " disabled" : ""}`}
						onClick={() => { }}
						style={ButtonStyle.Elevated}
						size={ButtonSize.Medium}
					/>
				)}
			</DemoSection>
		</>
	);
}

function ButtonSplitMenuElement() {
	return (
		<DemoContent
			childrenType={DemoContentChildren.Text}
			colourScheme={DemoContentColourScheme.Primary}
			height={200}
			includeRenderCounter={true}
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			text="Button split menu element"
			width={200}
		/>
	)
}
