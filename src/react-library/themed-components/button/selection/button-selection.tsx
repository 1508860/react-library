import { ButtonContainer } from "../shared/components/button-container";
import { ButtonContentContainer } from "../shared/components/button-content-container";
import { ButtonDisabledLayer } from "../shared/components/button-disabled-layer";
import { ButtonHoveredLayer } from "../shared/components/button-hovered-layer";
import { ButtonPulseLayer } from "../shared/components/button-pulse-layer";
import { ButtonContent } from "../shared/enums/button-content.type";
import { ButtonShape } from "../shared/enums/button-shape.type";

import { ButtonSelectionContentResolver } from "./components/button-selection-content-resolver";
import { BUTTON_SELECTION_PROPERTY_MAP } from "./constants/button-selection-property-map.const";
import { useButtonSelectionColourState } from "./hooks/use-button-selection-colour-state.hook";
import type { ButtonSelectionProps } from "./types/button-selection-props.type";

/**
 * Component to handle standard selection buttons
 * @param props
 */
export function ButtonSelection(props: ButtonSelectionProps) {
	return (
		<ButtonContainer<ButtonSelectionProps>
			colourStateConfig={props}
			isDisabled={!!props.isDisabled}
			onClick={props.onClick}
			useColourState={useButtonSelectionColourState}
		>
			<ButtonContentContainer
				borderBottomLeftRadius={BUTTON_SELECTION_PROPERTY_MAP.size[props.size].shape[(props.isSelected ? ButtonShape.Round : ButtonShape.Soft)].borderRadius}
				borderBottomRightRadius={BUTTON_SELECTION_PROPERTY_MAP.size[props.size].shape[(props.isSelected ? ButtonShape.Round : ButtonShape.Soft)].borderRadius}
				borderTopLeftRadius={BUTTON_SELECTION_PROPERTY_MAP.size[props.size].shape[(props.isSelected ? ButtonShape.Round : ButtonShape.Soft)].borderRadius}
				borderTopRightRadius={BUTTON_SELECTION_PROPERTY_MAP.size[props.size].shape[(props.isSelected ? ButtonShape.Round : ButtonShape.Soft)].borderRadius}
				borderWidth={BUTTON_SELECTION_PROPERTY_MAP.style[props.style].borderWidth}
				columnGap={BUTTON_SELECTION_PROPERTY_MAP.size[props.size].gap}
				paddingHorizontal={BUTTON_SELECTION_PROPERTY_MAP.size[props.size].content[props.content.content].paddingHorizontal}
				fontSize={BUTTON_SELECTION_PROPERTY_MAP.size[props.size].fontSize}
				height={BUTTON_SELECTION_PROPERTY_MAP.size[props.size].height}
				width={(
					(props.content.content === ButtonContent.Icon) ?
						BUTTON_SELECTION_PROPERTY_MAP.size[props.size].content[props.content.content].iconWidth[props.content.iconWidth] :
						undefined
				)}
			>
				<ButtonSelectionContentResolver
					content={props.content}
					iconSize={BUTTON_SELECTION_PROPERTY_MAP.size[props.size].iconSize}
					isSelected={props.isSelected}
					key="button-content-resolver"
				/>
				<ButtonDisabledLayer
					isDisabled={!!props.isDisabled}
					key="button-disabled-layer"
				/>
				<ButtonPulseLayer key="button-pulse-layer" />
				<ButtonHoveredLayer
					isDisabled={!!props.isDisabled}
					key="button-hovered-layer"
				/>
			</ButtonContentContainer>
		</ButtonContainer>
	);
}
