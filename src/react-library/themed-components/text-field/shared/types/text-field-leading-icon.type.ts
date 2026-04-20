import type { MaterialIconName } from "@react-library/material-icons";

/**
 * Type for callback events for 
 */
export type TextFieldLeadingIcon = Exclude<
	MaterialIconName,
	(
		typeof MaterialIconName.Cancel |
		typeof MaterialIconName.Error
	)
>;
