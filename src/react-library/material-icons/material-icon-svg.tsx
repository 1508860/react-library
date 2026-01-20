import { SVG_NAMESPACE } from "@react-library/common";
import { IconSvg } from "@react-library/components";

import { MATERIAL_ICON_SVG_VIEW_BOX } from "./constants/material-icon-svg-view-box.const";
import { MaterialIconStyleMap } from "./enums/material-icon-style-map.type";
import type { MaterialIconSvgProps } from "./types/material-icon-svg-props.type";

/**
 * Component to handle material icons as SVGs
 * @param props
 */
export function MaterialIconSvg(props: MaterialIconSvgProps) {
	return (
		<IconSvg
			colour={props.colour}
			data={{
				namespace: SVG_NAMESPACE,
				paths: MaterialIconStyleMap[props.style][props.name],
				viewBox: MATERIAL_ICON_SVG_VIEW_BOX
			}}
			size={props.size}
		/>
	);
}
