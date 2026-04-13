import type { PropsWithChildren } from "react";

import type {
	IColour,
	IDirection,
	IOrientation,
	ISize,
	Orientation
} from "@react-library/common";

import type { ScrollColour } from "../../shared/types/scroll-colour.type";

import type { ScrollBasicDirection } from "../enums/scroll-basic-direction.type";

import type { ScrollBasicSizeAll } from "./scroll-basic-size.type";

type ScrollBasicPropsBase<TScrollBasicDirection extends ScrollBasicDirection> = (
	IColour<ScrollColour> &
	IDirection<TScrollBasicDirection> &
	PropsWithChildren &
	ISize<ScrollBasicSizeAll>
);

/**
 * Props for the scroll basic component for direction both
 */
export type ScrollBasicPropsDirectionBoth = (
	ScrollBasicPropsBase<typeof ScrollBasicDirection.Both>
);

/**
 * Props for the scroll basic component for direction single
 */
export type ScrollBasicPropsDirectionSingle = (
	IOrientation<Orientation> &
	ScrollBasicPropsBase<typeof ScrollBasicDirection.Single>
);


/**
 * Props for the scroll basic component
 */
export type ScrollBasicProps = (
	ScrollBasicPropsDirectionBoth |
	ScrollBasicPropsDirectionSingle
);
