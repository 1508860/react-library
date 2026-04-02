import type { Extends } from "@react-library/common";

import type { ButtonStyle } from "../../shared/enums/button-style.type";

/**
 * Button split style
 */
export type ButtonSplitStyle = Extends<
	ButtonStyle,
	(
		typeof ButtonStyle.Elevated |
		typeof ButtonStyle.Filled |
		typeof ButtonStyle.Outline
	)
>;
