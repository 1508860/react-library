import { useCallback, useState } from "react";

import {
	TooltipInteraction,
	useTooltipChildPropsContext,
	useTooltipShowContext,
	type TransitionPulseInsetData
} from "@react-library/components";
import { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import { ButtonContainer } from "../../../shared/components/button-container";
import { ButtonContentResolver } from "../../../shared/components/button-content-resolver";
import { ButtonDisabledLayer } from "../../../shared/components/button-disabled-layer";
import { ButtonHoveredLayer } from "../../../shared/components/button-hovered-layer";
import { ButtonPulseLayer } from "../../../shared/components/button-pulse-layer";
import { ButtonContent } from "../../../shared/enums/button-content.type";
import { resolveButtonClickedInset } from "../../../shared/functions/resolve-button-clicked-inset.function";
import type { ButtonClickTarget } from "../../../shared/types/button-click-target.type";

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

	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const [isPressed, setIsPressed] = useState<boolean>(() => false);
	const [clickedInset, setClickedInset] = useState<TransitionPulseInsetData | undefined>(() => undefined);

	const [buttonColourState] = useButtonSplitColourState(props, isHovered, isPressed);

	const handleOnClick = useCallback(
		(event: React.MouseEvent<ButtonClickTarget>) => {
			setClickedInset(resolveButtonClickedInset(event));
			if (tooltipChildProps.tooltipInteractionType !== TooltipInteraction.Click) return;
			tooltipChildProps.childProps.onClick(event);
		},
		[tooltipChildProps.childProps, tooltipChildProps.tooltipInteractionType]
	);

	return (
		<ButtonContainer
			isDisabled={!!props.isDisabled}
			onClick={handleOnClick}
			onHover={setIsHovered}
			onPress={setIsPressed}
			ref={tooltipChildProps.childProps.ref}
			style={{
				alignItems: "center",
				backgroundColor: buttonColourState.backgroundColour?.toColourString(),
				borderBottomLeftRadius: (
					tooltipShow ?
						BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.borderRadius.inside.expanded :
						BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.borderRadius.inside.collapsed
				),
				borderBottomRightRadius: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.borderRadius.outside,
				borderColor: buttonColourState.borderColour?.toColourString(),
				borderStyle: BUTTON_SPLIT_PROPERTY_MAP.style[props.style].borderStyle,
				borderTopLeftRadius: (
					tooltipShow ?
						BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.borderRadius.inside.expanded :
						BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.borderRadius.inside.collapsed
				),
				borderTopRightRadius: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.borderRadius.outside,
				borderWidth: BUTTON_SPLIT_PROPERTY_MAP.style[props.style].borderWidth,
				boxShadow: buttonColourState.boxShadow,
				boxSizing: "border-box",
				display: "inline-flex",
				flexDirection: "row",
				flexShrink: 0,
				height: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].height,
				justifyContent: "center",
				overflow: "hidden",
				position: "relative",
				transitionDuration: `${BUTTON_SPLIT_PROPERTY_MAP.transition.borderRadius.durationMs}ms`,
				transitionProperty: "border-radius",
				width: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.width
			}}
		>
			<ButtonContentResolver
				colour={buttonColourState.onColour}
				content={{
					content: ButtonContent.Icon,
					iconName: tooltipShow ? MaterialIconName.KeyboardArrowUp : MaterialIconName.KeyboardArrowDown,
					iconStyle: (
						(props.content === ButtonContent.Icon || props.content === ButtonContent.IconLabel) ?
							props.iconStyle :
							MaterialIconStyle.Default
					)
				}}
				iconSize={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].menu.iconSize}
				key="button-content-resolver"
			/>
			<ButtonDisabledLayer
				colour={buttonColourState.disabledColour}
				key="button-disabled-layer"
				show={!!props.isDisabled}
			/>
			<ButtonPulseLayer
				colour={buttonColourState.pulseColour}
				inset={clickedInset}
				key="button-pulse-layer"
				onComplete={() => setClickedInset(undefined)}
			/>
			<ButtonHoveredLayer
				colour={buttonColourState.hoverColour}
				key="button-hovered-layer"
				show={!props.isDisabled && isHovered}
			/>
		</ButtonContainer>
	);
}
