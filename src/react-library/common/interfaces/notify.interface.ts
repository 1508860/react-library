/**
 * Describes a component that can notify
 */
export interface INotify<TNotify> {
	notify: (notification: TNotify) => void;
}
