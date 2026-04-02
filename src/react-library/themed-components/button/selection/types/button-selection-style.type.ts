import type { Extends } from "@react-library/common";

import type { ButtonStyle } from "../../shared/enums/button-style.type";

/**
 * Button selection style
 */
export type ButtonSelectionStyle = Extends<
	ButtonStyle,
	(
		typeof ButtonStyle.Elevated |
		typeof ButtonStyle.Filled |
		typeof ButtonStyle.Outline
	)
>;
