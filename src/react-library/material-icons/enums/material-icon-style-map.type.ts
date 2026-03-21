import type { ArrayMinLength1 } from "@react-library/common";

import type { MaterialIconName } from "./material-icon-name.type";
import { MaterialIconStyle } from "./material-icon-style.type";
import { MaterialIconSvgPathDefaultFilled } from "./material-icon-svg-path-default-filled.type";
import { MaterialIconSvgPathDefault } from "./material-icon-svg-path-default.type";
import { MaterialIconSvgPathThick } from "./material-icon-svg-path-thick.type";

/**
 * Material icon style map to retiurn relevant set of icon SVG paths for {@link MaterialIconName} icons
 */
export const MaterialIconStyleMap = {
	[MaterialIconStyle.Default]: MaterialIconSvgPathDefault,
	[MaterialIconStyle.DefaultFilled]: MaterialIconSvgPathDefaultFilled,
	[MaterialIconStyle.Thick]: MaterialIconSvgPathThick
} as const satisfies Record<MaterialIconStyle, Record<MaterialIconName, ArrayMinLength1<string>>>;
