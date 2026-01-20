import type { ReactElement } from "react";

import type { IElement, PrefixKeys } from "@react-library/common";

/**
 * Type for props of menu element for the button split component
 */
export type ButtonSplitMenuElement = PrefixKeys<IElement<() => ReactElement>, "menu">;
