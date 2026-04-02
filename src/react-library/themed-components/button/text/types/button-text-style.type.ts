import type { Extends } from "@react-library/common";

import type { ButtonStyle } from "../../shared/enums/button-style.type";

/**
 * Button text style
 */
export type ButtonTextStyle = Extends<
	ButtonStyle,
	(
		typeof ButtonStyle.Text
	)
>;
