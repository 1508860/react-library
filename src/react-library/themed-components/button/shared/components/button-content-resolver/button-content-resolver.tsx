import { Fragment } from "react";

import { useFontContext } from "@react-library/common";
import { MaterialIconName, MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import { ButtonContent } from "../../enums/button-content.type";

import { buttonContentResolverLabelStyle } from "./styles/button-content-resolver-label-style.function";
import type { ButtonContentResolverProps } from "./types/button-content-resolver-props.type";

/**
 * Button content resolver component
 * Resolves if an icon and/or label should be displayed
 * @param props
 */
export function ButtonContentResolver<TMaterialIconName extends MaterialIconName, TMaterialIconStyle extends MaterialIconStyle>(
	props: ButtonContentResolverProps<TMaterialIconName, TMaterialIconStyle>
) {

	const font = useFontContext();

	return (
		<>
			{
				(props.content.content === ButtonContent.Icon || props.content.content === ButtonContent.IconLabel) ?
					<MaterialIconSvg
						colour={props.colour}
						key="button-icon"
						name={props.content.iconName}
						size={props.iconSize}
						style={props.content.iconStyle}
					/> :
					<Fragment key="no-button-icon" />
			}
			{
				(props.content.content === ButtonContent.IconLabel || props.content.content === ButtonContent.Label) ?
					<span
						key="button-label"
						style={buttonContentResolverLabelStyle(props.colour, font)}
					>
						{props.content.label}
					</span> :
					<Fragment key="no-button-label" />
			}
		</>
	);
}
