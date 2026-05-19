import { useCallback, useEffect, useState } from "react";

import { useResolveState } from "../../../hooks";
import type { Callback } from "../../../types";

import type { DateTimeDisplayLength } from "../../enums/date-time-display-length.type";
import { isDateTimeDisplayFormatterConfigEqual } from "../../functions/is-equal/is-date-time-display-formatter-config-equal.function";
import type { DateTimeDisplayFormatterConfig } from "../../types/date-time-display-formatter-config.type";
import type { DateTimeDisplayState } from "../../types/date-time-display-state.type";
import type { DateTimeValue } from "../../types/date-time-value.type";

import { useDateTimeDisplayFormatterState } from "../formatter/use-date-time-display-formatter-state.hook";

/**
 * Custom hook for a {@link DateTimeValue} to be formatted to a display weekday for a given {@link DateTimeDisplayLength}
 * @param value
 * @param length
 */
export function useWeekdayDisplayState(value: DateTimeValue, length: DateTimeDisplayLength): [DateTimeDisplayState] {

	const [state, setState] = useState<DateTimeDisplayState>(() => "");

	const resolveConfig = useCallback<Callback<DateTimeDisplayFormatterConfig>>(
		() => ({
			length: length,
			weekday: true
		}),
		[length]
	);
	const config = useResolveState(resolveConfig, isDateTimeDisplayFormatterConfigEqual);

	const [dateTimeDisplayFormatter] = useDateTimeDisplayFormatterState(config);

	useEffect(
		() => setState(value ? dateTimeDisplayFormatter.format(value) : ""),
		[value, dateTimeDisplayFormatter]
	);

	return [state];
}
