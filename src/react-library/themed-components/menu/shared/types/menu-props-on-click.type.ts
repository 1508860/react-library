import type { MouseEventHandler } from "react";

import type { IOnClick } from "@react-library/common";

/**
 * Describes props for a menu on click event
 */
export type MenuPropsOnClick = (
	IOnClick<MouseEventHandler<Element>>
);
