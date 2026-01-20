import type { Extends } from "../../types";
import type { EventType } from "./event-type.type";

/**
 * Type group for {@link EventType} scroll events
 */
export type EventTypeGroupScroll = Extends<EventType, ("scroll" | "scrollend")>;
