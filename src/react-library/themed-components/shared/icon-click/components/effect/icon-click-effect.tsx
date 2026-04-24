import { useCallback, useEffect, useState } from "react";

import type { Callback } from "@react-library/common";
import { MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import type { IconClickProps } from "../../types/icon-click-props.type";
import { iconClickEffectStyle } from "./styles/icon-click-effect-style.function";

/**
 * Icon click effect component to handle UI interaction to afford clicking
 * @param props
 */
export function IconClickEffect(props: IconClickProps) {

	// Handle hovered state
	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const handlePointerEnter = useCallback<Callback<void>>(
		() => {
			if (props.isDisabled) return;
			setIsHovered(true);
		},
		[props.isDisabled]
	);
	const handlePointerLeave = useCallback<Callback<void>>(() => setIsHovered(false), []);

	// Resolve icon style
	const [iconStyle, setIconStyle] = useState<MaterialIconStyle>(() => MaterialIconStyle.Default);
	useEffect(
		() => {
			if (props.isDisabled) setIconStyle(MaterialIconStyle.Default)
			else if (isHovered) setIconStyle(MaterialIconStyle.DefaultFilled);
			else setIconStyle(MaterialIconStyle.Default);
		},
		[props.isDisabled, isHovered]
	);

	return (
		<div
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handlePointerLeave}
			style={iconClickEffectStyle(props.padding, isHovered)}
		>
			<MaterialIconSvg
				colour={props.colour}
				name={props.name}
				style={iconStyle}
				size={props.size}
			/>
		</div>
	);
}
