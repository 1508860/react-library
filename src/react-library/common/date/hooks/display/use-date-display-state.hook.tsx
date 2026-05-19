import { useCallback, useEffect, useState } from "react";

import { useResolveState } from "../../../hooks";
import type { Callback } from "../../../types";

import { DateDisplayStyle } from "../../enums/date-display-style.type";
import type { DateTimeDisplayLength } from "../../enums/date-time-display-length.type";
import { isDateTimeDisplayFormatterConfigEqual } from "../../functions/is-equal/is-date-time-display-formatter-config-equal.function";
import type { DateTimeDisplayFormatterConfig } from "../../types/date-time-display-formatter-config.type";
import type { DateTimeDisplayState } from "../../types/date-time-display-state.type";
import type { DateTimeValue } from "../../types/date-time-value.type";

import { useDateTimeDisplayFormatterState } from "../formatter/use-date-time-display-formatter-state.hook";

/**
 * Custom hook for a {@link DateTimeValue} to be formatted to a display date for a given {@link DateDisplayStyle} and {@link DateTimeDisplayLength}
 * @param value
 * @param dateDisplayStyle
 * @param length
 */
export function useDateDisplayState(value: DateTimeValue, dateDisplayStyle: DateDisplayStyle, length: DateTimeDisplayLength): [DateTimeDisplayState] {

	const [state, setState] = useState<DateTimeDisplayState>(() => "");

	const resolveConfig = useCallback<Callback<DateTimeDisplayFormatterConfig>>(
		() => ({
			day: dateDisplayStyle === DateDisplayStyle.Day,
			length: length,
			month: (dateDisplayStyle === DateDisplayStyle.Day || dateDisplayStyle === DateDisplayStyle.Month),
			year: (dateDisplayStyle === DateDisplayStyle.Day || dateDisplayStyle === DateDisplayStyle.Month || dateDisplayStyle === DateDisplayStyle.Year)
		}),
		[dateDisplayStyle, length]
	);
	const config = useResolveState(resolveConfig, isDateTimeDisplayFormatterConfigEqual);

	const [dateTimeDisplayFormatter] = useDateTimeDisplayFormatterState(config);

	useEffect(
		() => setState(value ? dateTimeDisplayFormatter.format(value) : ""),
		[value, dateTimeDisplayFormatter]
	);

	return [state];
}
