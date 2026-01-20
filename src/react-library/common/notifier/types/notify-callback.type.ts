/**
 * Describes callback function for when a notofication needs to be sent
 */
export type NotifyCallback<TNotify> = (notification: TNotify) => void;
