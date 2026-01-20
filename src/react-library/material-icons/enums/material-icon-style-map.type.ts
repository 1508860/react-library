import type { ArrayMinLength1 } from "@react-library/common";

import type { MaterialIconName } from "./material-icon-name.type";
import { MaterialIconStyle } from "./material-icon-style.type";
import { MaterialIconSvgPathThick } from "./material-icon-svg-path-thick.type";
import { MaterialIconSvgPath } from "./material-icon-svg-path.type";

/**
 * Material icon style map to retiurn relevant set of icon SVG paths for {@link MaterialIconName} icons
 */
export const MaterialIconStyleMap = {
	[MaterialIconStyle.Default]: MaterialIconSvgPath,
	[MaterialIconStyle.Thick]: MaterialIconSvgPathThick
} as const satisfies Record<MaterialIconStyle, Record<MaterialIconName, ArrayMinLength1<string>>>;
