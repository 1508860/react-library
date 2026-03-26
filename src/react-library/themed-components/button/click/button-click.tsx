import { ButtonContainer } from "../shared/components/button-container";
import { ButtonContentContainer } from "../shared/components/button-content-container";
import { ButtonContentResolver } from "../shared/components/button-content-resolver";
import { ButtonDisabledLayer } from "../shared/components/button-disabled-layer";
import { ButtonHoveredLayer } from "../shared/components/button-hovered-layer";
import { ButtonPulseLayer } from "../shared/components/button-pulse-layer";
import { ButtonContent } from "../shared/enums/button-content.type";

import { BUTTON_CLICK_PROPERTY_MAP } from "./constants/button-click-property-map.const";
import { useButtonClickColourState } from "./hooks/use-button-click-colour-state.hook";
import type { ButtonClickProps } from "./types/button-click-props.type";

/**
 * Component to handle standard click buttons
 * @param props
 */
export function ButtonClick(props: ButtonClickProps) {
	return (
		<ButtonContainer<ButtonClickProps>
			colourStateConfig={props}
			isDisabled={!!props.isDisabled}
			onClick={props.onClick}
			useColourState={useButtonClickColourState}
		>
			<ButtonContentContainer
				borderBottomLeftRadius={BUTTON_CLICK_PROPERTY_MAP.size[props.size].shape[props.shape].borderRadius}
				borderBottomRightRadius={BUTTON_CLICK_PROPERTY_MAP.size[props.size].shape[props.shape].borderRadius}
				borderTopLeftRadius={BUTTON_CLICK_PROPERTY_MAP.size[props.size].shape[props.shape].borderRadius}
				borderTopRightRadius={BUTTON_CLICK_PROPERTY_MAP.size[props.size].shape[props.shape].borderRadius}
				borderWidth={BUTTON_CLICK_PROPERTY_MAP.style[props.style].borderWidth}
				columnGap={BUTTON_CLICK_PROPERTY_MAP.size[props.size].gap}
				fontSize={BUTTON_CLICK_PROPERTY_MAP.size[props.size].fontSize}
				height={BUTTON_CLICK_PROPERTY_MAP.size[props.size].height}
				paddingHorizontal={BUTTON_CLICK_PROPERTY_MAP.size[props.size].content[props.content.content].paddingHorizontal}
				width={(
					(props.content.content === ButtonContent.Icon) ?
						BUTTON_CLICK_PROPERTY_MAP.size[props.size].content[props.content.content].iconWidth[props.content.iconWidth] :
						undefined
				)}
			>
				<ButtonContentResolver
					content={props.content}
					iconSize={BUTTON_CLICK_PROPERTY_MAP.size[props.size].iconSize}
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
