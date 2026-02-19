import type { INotify } from "../../interfaces";
import type { CallbackWithParameter } from "../../types";

import type { NotifyCallback } from "../types/notify-callback.type";

/**
 * Class for handling notifications and apply a callback function to the instance whenever {@link notify} is called
 */
export class Notifier<TNotify> implements INotify<CallbackWithParameter<TNotify, void>> {

	private _notifyCallback: NotifyCallback<TNotify>;

	constructor(notifyCallback: NotifyCallback<TNotify>) {
		this._notifyCallback = notifyCallback
	}

	public notify(notification: TNotify): void {
		this._notifyCallback(notification);
	}
}
