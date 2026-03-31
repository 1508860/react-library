import { useCallback } from "react";

import {
	useTooltipChildPropsContext,
	useTooltipShowCallbackContext,
	useTooltipShowContext
} from "@react-library/components";
import { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import { ButtonContainer } from "../../../shared/components/button-container";
import { ButtonContentContainer } from "../../../shared/components/button-content-container";
import { ButtonContentResolver } from "../../../shared/components/button-content-resolver";
import { ButtonDisabledLayer } from "../../../shared/components/button-disabled-layer";
import { ButtonHoveredLayer } from "../../../shared/components/button-hovered-layer";
import { ButtonPulseLayer } from "../../../shared/components/button-pulse-layer";
import { ButtonContent } from "../../../shared/enums/button-content.type";

import { BUTTON_SPLIT_PROPERTY_MAP } from "../../constants/button-split-property-map.const";
import { useButtonSplitColourState } from "../../hooks/use-button-split-colour-state.hook";
import type { ButtonSplitProps } from "../../types/button-split-props.type";

/**
 * Component to handle the button split menu child (button)
 * @param props
 */
export function ButtonSplitMenuChild(props: ButtonSplitProps) {

	const tooltipChildProps = useTooltipChildPropsContext();
	const tooltipShow = useTooltipShowContext();
	const tooltipShowCallback = useTooltipShowCallbackContext();

	const handleOnClick = useCallback(() => tooltipShowCallback(true), [tooltipShowCallback]);

	return (
		<ButtonContainer<ButtonSplitProps>
			colourStateConfig={props}
			isDisabled={!!props.isDisabled}
			onClick={handleOnClick}
			ref={tooltipChildProps.ref}
			useColourState={useButtonSplitColourState}
		>
			<ButtonContentContainer
				borderBottomLeftRadius={(
					tooltipShow ?
						BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.borderRadius.inside.expanded :
						BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.borderRadius.inside.collapsed
				)}
				borderBottomRightRadius={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.borderRadius.outside}
				borderTopLeftRadius={(
					tooltipShow ?
						BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.borderRadius.inside.expanded :
						BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.borderRadius.inside.collapsed
				)}
				borderTopRightRadius={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.borderRadius.outside}
				borderWidth={BUTTON_SPLIT_PROPERTY_MAP.style[props.style].borderWidth}
				height={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].height}
				width={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.width}
			>
				<ButtonContentResolver
					content={{
						content: ButtonContent.Icon,
						iconName: tooltipShow ? MaterialIconName.KeyboardArrowUp : MaterialIconName.KeyboardArrowDown,
						iconStyle: (
							(props.content.content === ButtonContent.Icon || props.content.content === ButtonContent.IconLabel) ?
								props.content.iconStyle :
								MaterialIconStyle.Default
						)
					}}
					iconSize={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.iconSize}
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
