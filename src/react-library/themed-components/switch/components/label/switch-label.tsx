import { Fragment } from "react";

import { useFontContext } from "@react-library/common";

import { useSwitchColourStateContext } from "../../hooks/switch-colour-state-context.hook";
import { useSwitchIsHoveredContext } from "../../hooks/switch-is-hovered-context.hook";

import { switchLabelStyle } from "./styles/switch-label-style.function";
import type { SwitchLabelProps } from "./types/switch-label-props.type";

/**
 * Switch label
 */
export function SwitchLabel(props: SwitchLabelProps) {

	const font = useFontContext();

	const switchColourState = useSwitchColourStateContext();
	const switchIsHovered = useSwitchIsHoveredContext();

	if (props.label === undefined) return (
		<Fragment key="no-label" />
	);

	return (
		<label
			htmlFor={props.id}
			key="label"
			style={switchLabelStyle(props.isDisabled, font, switchColourState, switchIsHovered)}
		>
			{props.label}
		</label>
	);
}
