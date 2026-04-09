import { Fragment } from "react";

import {
	useColourSchemeContext,
	useFontContext
} from "@react-library/common";
import {
	MaterialIconStyle,
	MaterialIconSvg
} from "@react-library/material-icons";

import { TooltipTextOverflow } from "../../../../tooltips";

import { modalBasicHeaderStyle } from "./styles/modal-basic-header-style.function";
import { modalBasicHeaderTextStyle } from "./styles/modal-basic-header-text-style.function";
import { modalBasicHeaderTitleStyle } from "./styles/modal-basic-header-title-style.function";
import type { ModalBasicHeaderProps } from "./types/modal-basic-header-props.type";

/**
 * Modal basic header component
 * @param props
 */
export function ModalBasicHeader(props: ModalBasicHeaderProps) {

	const colourScheme = useColourSchemeContext();
	const font = useFontContext();

	return (
		<div style={modalBasicHeaderStyle(props.hasChildren, !!props.iconName)}>
			{
				props.iconName ?
					<MaterialIconSvg
						colour={colourScheme.secondary.default.colour}
						key="icon"
						name={props.iconName}
						size={24}
						style={MaterialIconStyle.Default}
					/> :
					<Fragment key="no-icon" />
			}
			{
				props.title ?
					<div
						key="title"
						style={modalBasicHeaderTitleStyle(colourScheme, font)}
					>
						<TooltipTextOverflow
							content={props.title}
							width="100%"
						/>
					</div> :
					<Fragment key="no-title" />
			}
			<div
				key="text"
				style={modalBasicHeaderTextStyle(props.textMaxWidth, colourScheme, font)}
			>
				{props.text}
			</div>
		</div>
	);
}
