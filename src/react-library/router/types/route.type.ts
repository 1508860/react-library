import type {
	IChild,
	IDefaultChildSegmentId,
	IDefaultGuardElement,
	IDefaultGuardLoadingElement,
	IElement,
	IGuard,
	IRedirectTo,
	ISegment,
	ISegmentId,
	IType
} from "@react-library/common";

import type { RouterSegment } from "../enums/router-segment.type";
import type { RouterElementWithChildren } from "./router-element-with-children.type";
import type { RouterElement } from "./router-element.type";
import type { RouterGuardElement } from "./router-guard-element.type";
import type { RouterGuard } from "./router-guard.type";
import type { RouterSegmentId } from "./router-segment-id.type";
import type { RouterSegmentPath } from "./router-segment-path.type";

type RouteBase<TType extends RouterSegment, TElement> = (
	IElement<TElement> &
	Partial<IRedirectTo<RouterSegmentId>> &
	IType<TType>
);

export type RouteChild = (
	Partial<IGuard<RouterGuard>> &
	RouteBase<typeof RouterSegment.Child, RouterElement> &
	ISegment<RouterSegmentPath>
);

export type RouteRoot = (
	IChild<RouterSegmentRecord> &
	Partial<IDefaultChildSegmentId<RouterSegmentId>> &
	IDefaultGuardElement<RouterGuardElement> &
	IDefaultGuardLoadingElement<RouterGuardElement> &
	RouteBase<typeof RouterSegment.Root, RouterElementWithChildren> &
	ISegmentId<RouterSegmentId>
);

export type RouteWithChildren = (
	IChild<RouterSegmentRecord> &
	Partial<IDefaultChildSegmentId<RouterSegmentId>> &
	Partial<IGuard<RouterGuard>> &
	RouteBase<typeof RouterSegment.WithChildren, RouterElementWithChildren> &
	ISegment<RouterSegmentPath>
);

export type RouteAll = (
	RouteChild |
	RouteRoot |
	RouteWithChildren
);

export type RouteAllWithChildren = (
	RouteWithChildren |
	RouteRoot
);

export type RouteAllSegment = (
	RouteChild |
	RouteWithChildren
);

export type RouterSegmentRecord = Record<RouterSegmentId, RouteAllSegment>;
