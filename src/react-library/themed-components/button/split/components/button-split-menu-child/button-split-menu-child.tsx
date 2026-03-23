import { useCallback } from "react";

import {
	TooltipInteraction,
	useTooltipChildPropsContext,
	useTooltipShowContext
} from "@react-library/components";
import { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import { ButtonContainer } from "../../../shared/components/button-container";
import { ButtonContentResolver } from "../../../shared/components/button-content-resolver";
import { ButtonDisabledLayer } from "../../../shared/components/button-disabled-layer";
import { ButtonHoveredLayer } from "../../../shared/components/button-hovered-layer";
import { ButtonPulseLayer } from "../../../shared/components/button-pulse-layer";
import { ButtonContent } from "../../../shared/enums/button-content.type";
import type { ButtonClickTarget } from "../../../shared/types/button-click-target.type";

import { BUTTON_SPLIT_PROPERTY_MAP } from "../../constants/button-split-property-map.const";
import { useButtonSplitColourState } from "../../hooks/use-button-split-colour-state.hook";
import type { ButtonSplitProps } from "../../types/button-split-props.type";

import { useButtonSplitMenuChildStyleState } from "./hooks/use-button-split-menu-child-style-state.hook";

/**
 * Component to handle the button split menu child (button)
 * @param props
 */
export function ButtonSplitMenuChild(props: ButtonSplitProps) {

	const tooltipChildProps = useTooltipChildPropsContext();
	const tooltipShow = useTooltipShowContext();

	const handleOnClick = useCallback(
		(event: React.MouseEvent<ButtonClickTarget>) => {
			if (tooltipChildProps.tooltipInteractionType !== TooltipInteraction.Click) return;
			tooltipChildProps.childProps.onClick(event);
		},
		[tooltipChildProps.childProps, tooltipChildProps.tooltipInteractionType]
	);

	return (
		<ButtonContainer<ButtonSplitProps, ButtonSplitProps>
			colourStateConfig={props}
			isDisabled={!!props.isDisabled}
			onClick={handleOnClick}
			ref={tooltipChildProps.childProps.ref}
			styleConfig={props}
			useColourState={useButtonSplitColourState}
			useStyleState={useButtonSplitMenuChildStyleState}
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
		</ButtonContainer>
	);
}
