import { useCallback, useState } from "react";

import type { TransitionPulseInsetData } from "@react-library/components";

import { ButtonContainer } from "../shared/components/button-container";
import { ButtonContentResolver } from "../shared/components/button-content-resolver";
import { ButtonDisabledLayer } from "../shared/components/button-disabled-layer";
import { ButtonHoveredLayer } from "../shared/components/button-hovered-layer";
import { ButtonPulseLayer } from "../shared/components/button-pulse-layer";
import { ButtonContent } from "../shared/enums/button-content.type";
import { resolveButtonClickedInset } from "../shared/functions/resolve-button-clicked-inset.function";
import type { ButtonClickTarget } from "../shared/types/button-click-target.type";

import { BUTTON_CLICK_PROPERTY_MAP } from "./constants/button-click-property-map.const";
import { useButtonClickColourState } from "./hooks/use-button-click-colour-state.hook";
import type { ButtonClickProps } from "./types/button-click-props.type";

/**
 * Component to handle standard click buttons
 * @param props
 */
export function ButtonClick(props: ButtonClickProps) {

	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const [isPressed, setIsPressed] = useState<boolean>(() => false);
	const [clickedInset, setClickedInset] = useState<TransitionPulseInsetData | undefined>(() => undefined);

	const [buttonColourState] = useButtonClickColourState(props, isHovered, isPressed);

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
				borderColor: buttonColourState.borderColour?.toColourString(),
				borderRadius: BUTTON_CLICK_PROPERTY_MAP.size[props.size].shape[props.shape].borderRadius,
				borderStyle: BUTTON_CLICK_PROPERTY_MAP.style[props.style].borderStyle,
				borderWidth: BUTTON_CLICK_PROPERTY_MAP.style[props.style].borderWidth,
				boxShadow: buttonColourState.boxShadow,
				boxSizing: "border-box",
				columnGap: BUTTON_CLICK_PROPERTY_MAP.size[props.size].gap,
				display: "inline-flex",
				flexDirection: "row",
				fontSize: BUTTON_CLICK_PROPERTY_MAP.size[props.size].fontSize,
				height: BUTTON_CLICK_PROPERTY_MAP.size[props.size].height,
				justifyContent: "center",
				overflow: "hidden",
				paddingLeft: BUTTON_CLICK_PROPERTY_MAP.size[props.size].content[props.content].paddingHorizontal,
				paddingRight: BUTTON_CLICK_PROPERTY_MAP.size[props.size].content[props.content].paddingHorizontal,
				position: "relative",
				width: (
					(props.content === ButtonContent.Icon) ?
						BUTTON_CLICK_PROPERTY_MAP.size[props.size].content[props.content].iconWidth[props.iconWidth] :
						undefined
				)
			}}
		>
			<ButtonContentResolver
				colour={buttonColourState.onColour}
				content={props}
				iconSize={BUTTON_CLICK_PROPERTY_MAP.size[props.size].iconSize}
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
