import type { Property } from "csstype";

import type { Extends } from "@react-library/common";

/**
 * Describes floating button group position flex direction
 */
export type FloatingButtonGroupPositionFlexDirection = (Extends<Property.FlexDirection, ("column" | "row")> | undefined);
