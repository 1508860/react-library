import type { Property } from "csstype";

import type { IFontFamily } from "../interfaces";

/**
 * Describes font to be used by default across the app
 */
export type Font = IFontFamily<Property.FontFamily>
