
import type { ISize } from "@react-library/common";

import type { ButtonSize } from "../../button";

import type { ButtonGroupActionAll } from "./button-group-action.type";
import type { ButtonGroupOrientationAll } from "./button-group-orientation.type";

/**
 * Props for button group
 */
export type ButtonGroupProps = (
	ButtonGroupActionAll &
	ButtonGroupOrientationAll &
	ISize<ButtonSize>
);
