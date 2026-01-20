import type { Property } from "csstype";

import type { Extends } from "@react-library/common";

/**
 * Describes floating button group position align items
 */
export type FloatingButtonGroupPositionAlignItems = (Extends<Property.AlignItems, ("start" | "end")> | undefined);

/**
 * Describes floating button group position flex direction
 */
export type FloatingButtonGroupPositionFlexDirection = (Extends<Property.FlexDirection, ("column" | "row")> | undefined);
