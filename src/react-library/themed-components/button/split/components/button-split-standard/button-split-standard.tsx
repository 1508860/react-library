import { useCallback, useState } from "react";

import type { TransitionPulseInsetData } from "@react-library/components";

import { ButtonContainer } from "../../../shared/components/button-container";
import { ButtonContentResolver } from "../../../shared/components/button-content-resolver";
import { ButtonDisabledLayer } from "../../../shared/components/button-disabled-layer";
import { ButtonHoveredLayer } from "../../../shared/components/button-hovered-layer";
import { ButtonPulseLayer } from "../../../shared/components/button-pulse-layer";
import { resolveButtonClickedInset } from "../../../shared/functions/resolve-button-clicked-inset.function";
import type { ButtonClickTarget } from "../../../shared/types/button-click-target.type";

import { BUTTON_SPLIT_PROPERTY_MAP } from "../../constants/button-split-property-map.const";
import { useButtonSplitColourState } from "../../hooks/use-button-split-colour-state.hook";
import type { ButtonSplitProps } from "../../types/button-split-props.type";

/**
 * Component to handle the button split standard button
 * @param props
 */
export function ButtonSplitStandard(props: ButtonSplitProps) {

	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const [isPressed, setIsPressed] = useState<boolean>(() => false);
	const [clickedInset, setClickedInset] = useState<TransitionPulseInsetData | undefined>(() => undefined);

	const [buttonColourState] = useButtonSplitColourState(props, isHovered, isPressed);

	const handleOnClick = useCallback(
		(event: React.MouseEvent<ButtonClickTarget>) => {
			setClickedInset(resolveButtonClickedInset(event));
			props.onClick(event);
		},
		[props]
	);

	return (
		<ButtonContainer
			isDisabled={!!props.isDisabled}
			onClick={handleOnClick}
			onHover={setIsHovered}
			onPress={setIsPressed}
			style={{
				alignItems: "center",
				backgroundColor: buttonColourState.backgroundColour?.toColourString(),
				borderBottomLeftRadius: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.borderRadius.outside,
				borderBottomRightRadius: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.borderRadius.inside,
				borderColor: buttonColourState.borderColour?.toColourString(),
				borderStyle: BUTTON_SPLIT_PROPERTY_MAP.style[props.style].borderStyle,
				borderTopLeftRadius: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.borderRadius.outside,
				borderTopRightRadius: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.borderRadius.inside,
				borderWidth: BUTTON_SPLIT_PROPERTY_MAP.style[props.style].borderWidth,
				boxShadow: buttonColourState.boxShadow,
				boxSizing: "border-box",
				columnGap: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.gap,
				display: "inline-flex",
				flexDirection: "row",
				flexShrink: 0,
				fontSize: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.fontSize,
				height: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].height,
				justifyContent: "center",
				overflow: "hidden",
				paddingLeft: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.content[props.content.content].paddingHorizontal,
				paddingRight: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.content[props.content.content].paddingHorizontal,
				position: "relative",
				width: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.content[props.content.content].width
			}}
		>
			<ButtonContentResolver
				colour={buttonColourState.onColour}
				content={props.content}
				iconSize={BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.iconSize}
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
