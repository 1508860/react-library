import { Fragment } from "react"

import { useColourSchemeContext, useFontContext } from "@react-library/common";
import { MaterialIconName, MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import { sideSheetPanelHeaderStyle } from "./styles/side-sheet-panel-header-style.function";
import type { SideSheetPanelHeaderProps } from "./types/side-sheet-panel-header-props.type";
import { sideSheetPanelHeaderTitleStyle } from "./styles/side-sheet-panel-header-title-style.function";

/**
 * Side sheet panel header component
 */
export function SideSheetPanelHeader(props: SideSheetPanelHeaderProps) {

	const colourScheme = useColourSchemeContext();
	const font = useFontContext();

	if (!props.show) return (
		<Fragment key="no-side-sheet-panel-header" />
	);

	return (
		<div
			key="side-sheet-panel-header"
			style={sideSheetPanelHeaderStyle(props.width)}
		>
			{
				props.onBack ?
					<div
						key="icon-arrow-back-container"
						onClick={props.onBack}
					>
						<MaterialIconSvg
							colour={colourScheme.surface.variant.onColour}
							name={MaterialIconName.ArrowBack}
							style={MaterialIconStyle.Default}
							size={22}
							key="icon-arrow-back"
						/>
					</div> :
					<Fragment key="no-icon-arrow-back-container" />
			}
			<div style={sideSheetPanelHeaderTitleStyle(colourScheme, font)}>
				{props.title}
			</div>
			<div
				key="icon-close-container"
				onClick={props.onClose}
			>
				<MaterialIconSvg
					colour={colourScheme.surface.variant.onColour}
					name={MaterialIconName.Close}
					style={MaterialIconStyle.Default}
					size={22}
					key="icon-close"
				/>
			</div>
		</div>
	);
}
