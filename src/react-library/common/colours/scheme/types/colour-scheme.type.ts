import type {
	IBackdrop,
	IBoxShadow,
	IColour,
	IContainer,
	IDefault,
	IDisabled,
	IElevation,
	IError,
	IHovered,
	IInverse,
	IOpacity,
	IOutline,
	IOutlineVariant,
	IPressed,
	IPrimary,
	IPulse,
	ISecondary,
	ISuccess,
	ISurface,
	ITertiary,
	ITransition,
	IVariant,
	IWarning
} from "../../../interfaces";
import type { StyleOpacity } from "../../../style";
import type { Colour } from "../../types/colour.type";
import type { ColourSchemeContainerLevel } from "../enums/colour-scheme-container-level.type";
import type { ColourSchemeElevationLevel } from "../enums/colour-scheme-elevation-level.type";
import type { ColourSchemeStyleColour } from "./colour-scheme-style-colour.type";

/**
 * Describes colour scheme for an application.
 * Loosely based on material design 3 colour scheme
 */
export type ColourScheme = (
	IPrimary<ColourSchemeStandard> &
	ISecondary<ColourSchemeStandard> &
	ITertiary<ColourSchemeStandard> &
	ISuccess<ColourSchemeStandard> &
	IWarning<ColourSchemeStandard> &
	IError<ColourSchemeStandard> &
	ISurface<ColourSchemeSurface> &
	IOutline<ColourSchemeOutline> &
	IBackdrop<ColourSchemeBackdrop> &
	IDisabled<ColourSchemeDisabled> &
	IHovered<ColourSchemeHovered> &
	IPressed<ColourSchemePressed> &
	ITransition<ColourSchemeTransition> &
	IElevation<ColourSchemeElevation>
);

type ColourSchemeStandard = (
	IDefault<ColourSchemeStyleColour> &
	IContainer<ColourSchemeStyleColour>
);

type ColourSchemeSurface = (
	IDefault<ColourSchemeStyleColour> &
	IVariant<ColourSchemeStyleColour> &
	IContainer<Record<ColourSchemeContainerLevel, Colour>> &
	IInverse<ColourSchemeStyleColour>
);

type ColourSchemeOutline = (
	IOutline<Colour> &
	IOutlineVariant<Colour>
);

type ColourSchemeBackdrop = (
	IColour<Colour>
);

type ColourSchemeDisabled = (
	IOpacity<StyleOpacity>
);

type ColourSchemeHovered = (
	IOpacity<StyleOpacity>
);

type ColourSchemePressed = (
	IOpacity<StyleOpacity>
);

type ColourSchemeTransition = (
	IPulse<IOpacity<StyleOpacity>>
);

type ColourSchemeElevation = (
	IBoxShadow<Record<ColourSchemeElevationLevel, (string | undefined)>>
);
