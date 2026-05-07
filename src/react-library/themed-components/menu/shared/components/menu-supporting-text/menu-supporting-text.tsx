import { Fragment } from "react";

import { useFontContext } from "@react-library/common";

import { useMenuItemColourStateContext } from "../../hooks/menu-item-colour-state-context.hook";

import { menuSupportingTextStyle } from "./styles/menu-supporting-text-style.function";
import type { MenuSupportingTextProps } from "./types/menu-supporting-text-props.type";

/**
 * Menu text supporting component
 */
export function MenuSupportingText(props: MenuSupportingTextProps) {

	const font = useFontContext();

	const colourState = useMenuItemColourStateContext();

	if (!props.supportingText) return (
		<Fragment key="no-supporting-text" />
	);

	return (
		<div
			key="supporting-text"
			style={menuSupportingTextStyle(font, colourState)}
		>
			{props.supportingText}
		</div>
	);
}
