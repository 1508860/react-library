import type { ISize } from "@react-library/common";

import type { ButtonSize } from "../enums/button-size.type";

/**
 * Describes button size
 */
export type ButtonSizeProps<TButtonSize extends ButtonSize> = ISize<TButtonSize>
