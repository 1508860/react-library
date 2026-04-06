import type { IActions, IHeaderText, IStyle, IText } from "@react-library/common";

import type { TooltipRichStyle } from "../enums/tooltip-rich-style-type.type";

import type { TooltipRichContentActions } from "./tooltip-rich-content-action.type";
import type { TooltipRichContentBodyText } from "./tooltip-rich-content-body-text.type";

type TooltipRichContentHeaderProps = IHeaderText<string>;

type TooltipRichContentBodyProps = IText<TooltipRichContentBodyText>;

type TooltipRichContentActionProps = IActions<TooltipRichContentActions>;

type TooltipRichContentBase<TTooltipRichStyle extends TooltipRichStyle> = (
	IStyle<TTooltipRichStyle>
);

/**
 * Type for tooltip rich content with all content
 */
export type TooltipRichContentAll = (
	TooltipRichContentBase<typeof TooltipRichStyle.All> &
	TooltipRichContentActionProps &
	TooltipRichContentBodyProps &
	TooltipRichContentHeaderProps
);

/**
 * Type for tooltip rich content with body and action content
 */
export type TooltipRichContentBodyAndAction = (
	TooltipRichContentBase<typeof TooltipRichStyle.BodyAndAction> &
	TooltipRichContentActionProps &
	TooltipRichContentBodyProps
);

/**
 * Type for tooltip rich content with header and body content
 */
export type TooltipRichContentHeaderAndBody = (
	TooltipRichContentBase<typeof TooltipRichStyle.HeaderAndBody> &
	TooltipRichContentBodyProps &
	TooltipRichContentHeaderProps
);

/**
 * Type for tooltip rich content
 */
export type TooltipRichContent = (
	TooltipRichContentAll |
	TooltipRichContentBodyAndAction |
	TooltipRichContentHeaderAndBody |
	null |
	undefined
);
