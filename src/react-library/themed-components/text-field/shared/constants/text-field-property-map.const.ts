import { TextFieldStyle } from "../enums/text-field-style.type";
import type { TextFieldPropertyMap } from "../types/text-field-property-map.type";

import { TEXT_FIELD_PROPERTY_MAP_STYLE_FILLED } from "./text-field-property-map-style-filled.const";
import { TEXT_FIELD_PROPERTY_MAP_STYLE_OUTLINED } from "./text-field-property-map-style-outlined.const";

/**
 * Defines values for text field style sizes for a text field
 */
export const TEXT_FIELD_PROPERTY_MAP: TextFieldPropertyMap = {
	style: {
		[TextFieldStyle.Filled]: TEXT_FIELD_PROPERTY_MAP_STYLE_FILLED,
		[TextFieldStyle.Outlined]: TEXT_FIELD_PROPERTY_MAP_STYLE_OUTLINED
	}
}
