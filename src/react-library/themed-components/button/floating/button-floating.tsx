import { useCallback, useState } from "react";

import type { TransitionPulseInsetData } from "@react-library/components";

import { ButtonContainer } from "../shared/components/button-container";
import { ButtonContentResolver } from "../shared/components/button-content-resolver";
import { ButtonDisabledLayer } from "../shared/components/button-disabled-layer";
import { ButtonHoveredLayer } from "../shared/components/button-hovered-layer";
import { ButtonPulseLayer } from "../shared/components/button-pulse-layer";
import { resolveButtonClickedInset } from "../shared/functions/resolve-button-clicked-inset.function";
import type { ButtonClickTarget } from "../shared/types/button-click-target.type";

import { BUTTON_FLOATING_PROPERTY_MAP } from "./constants/button-floating-property-map.const";
import { useButtonFloatingColourState } from "./hooks/use-button-floating-colour-state.hook";
import type { ButtonFloatingProps } from "./types/button-floating-props.type";

/**
 * Component to handle standard floating buttons
 * @param props
 */
export function ButtonFloating(props: ButtonFloatingProps) {

	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const [isPressed, setIsPressed] = useState<boolean>(() => false);
	const [clickedInset, setClickedInset] = useState<TransitionPulseInsetData | undefined>(() => undefined);

	const [buttonColourState] = useButtonFloatingColourState(props, isHovered, isPressed);

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
				borderRadius: BUTTON_FLOATING_PROPERTY_MAP.size[props.size].shape[props.shape].borderRadius,
				boxShadow: buttonColourState.boxShadow,
				boxSizing: "border-box",
				columnGap: BUTTON_FLOATING_PROPERTY_MAP.size[props.size].gap,
				display: "inline-flex",
				flexDirection: "row",
				fontSize: BUTTON_FLOATING_PROPERTY_MAP.size[props.size].fontSize,
				height: BUTTON_FLOATING_PROPERTY_MAP.size[props.size].height,
				justifyContent: "center",
				overflow: "hidden",
				paddingLeft: BUTTON_FLOATING_PROPERTY_MAP.size[props.size].content[props.content.content].paddingHorizontal,
				paddingRight: BUTTON_FLOATING_PROPERTY_MAP.size[props.size].content[props.content.content].paddingHorizontal,
				position: "relative",
				width: BUTTON_FLOATING_PROPERTY_MAP.size[props.size].content[props.content.content].iconWidth
			}}
		>
			<ButtonContentResolver
				colour={buttonColourState.onColour}
				content={props.content}
				iconSize={BUTTON_FLOATING_PROPERTY_MAP.size[props.size].iconSize}
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
