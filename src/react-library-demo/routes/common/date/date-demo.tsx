import { useState, type ReactElement } from "react";

import {
	DateDisplayStyle,
	DateMonth,
	DateTimeDisplayLength,
	DateWeekday,
	generateGuid,
	Orientation,
	TimeDisplayStyle,
	useDateDisplayState,
	useDateTimeDisplayState,
	useMonthMapDisplayState,
	useTimeDisplayState,
	useWeekdayDisplayState,
	useWeekdayMapDisplayState,
	type IDate,
	type IDateStyle,
	type IId,
	type ILength,
	type IText,
	type ITimeDisplayStyle,
} from "@react-library/common";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow,
	DemoItem,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryCommonDateDemo() {

	const [dateState] = useState<(IDate<Date> & IId<string>)>(() => ({ date: new Date(), id: generateGuid() }));

	const [dateStyles] = useState<Array<DateDisplayStyle>>(() => Object.values(DateDisplayStyle));
	const [timeDisplayStyles] = useState<Array<TimeDisplayStyle>>(() => Object.values(TimeDisplayStyle));
	const [dateTimeLengths] = useState<Array<DateTimeDisplayLength>>(() => Object.values(DateTimeDisplayLength));

	return (
		<>
			<DemoSection
				key="date"
				title="Date"
			>
				{
					dateStyles.map((dateStyle, i) =>
						dateTimeLengths.map((dateTimeLength, i2) =>
							<DemoDateFormat
								date={dateState.date}
								dateStyle={dateStyle}
								key={`${dateState.id}-${(i + 1) * (i2 + 1)}`}
								length={dateTimeLength}
							/>
						)
					)
				}
			</DemoSection>
			<DemoSection
				key="time"
				title="Time"
			>

				{
					timeDisplayStyles.map((timeDisplayStyle, i) =>
						dateTimeLengths.map((dateTimeLength, i2) =>
							<DemoTimeFormat
								date={dateState.date}
								key={`${dateState.id}-${(i + 1) * (i2 + 1)}`}
								length={dateTimeLength}
								timeDisplayStyle={timeDisplayStyle}
							/>
						)
					)
				}
			</DemoSection>
			<DemoSection
				key="date-time"
				title="Date & Time"
			>
				{
					timeDisplayStyles.map((timeDisplayStyle, i) =>
						dateTimeLengths.map((dateTimeLength, i2) =>
							<DemoDateTimeFormat
								date={dateState.date}
								key={`${dateState.id}-${(i + 1) * (i2 + 1)}`}
								length={dateTimeLength}
								timeDisplayStyle={timeDisplayStyle}
							/>
						)
					)
				}
			</DemoSection>
			<DemoSection
				key="weekday"
				title="Weekday"
			>
				{
					dateTimeLengths.map((dateTimeLength, i) =>
						<DemoWeekdayFormat
							date={dateState.date}
							key={`${dateState.id}-${i}`}
							length={dateTimeLength}
						/>
					)
				}
			</DemoSection>
			<DemoSection
				key="month-map"
				title="Month Map"
			>
				{
					dateTimeLengths.map((dateTimeLength, i) =>
						<DemoMonthMapFormat
							key={`${dateState.id}-${i}`}
							length={dateTimeLength}
						/>
					)
				}
			</DemoSection>
			<DemoSection
				key="weekday-map"
				title="Weekday Map"
			>
				{
					dateTimeLengths.map((dateTimeLength, i) =>
						<DemoWeekdayMapFormat
							key={`${dateState.id}-${i}`}
							length={dateTimeLength}
						/>
					)
				}
			</DemoSection>
		</>
	);
}

function DemoDateFormat(props: (IDate<Date> & IDateStyle<DateDisplayStyle> & ILength<DateTimeDisplayLength>)): ReactElement {
	const [value] = useDateDisplayState(props.date, props.dateStyle, props.length);
	return (
		<DemoItem
			config={[
				{ key: "Date", value: props.dateStyle },
				{ key: "Length", value: props.length }
			]}
		>
			<DemoDisplayText text={value} />
		</DemoItem>
	);
}

function DemoTimeFormat(props: (IDate<Date> & ITimeDisplayStyle<TimeDisplayStyle> & ILength<DateTimeDisplayLength>)): ReactElement {
	const [value] = useTimeDisplayState(props.date, props.timeDisplayStyle, props.length);
	return (
		<DemoItem
			config={[
				{ key: "Time", value: props.timeDisplayStyle },
				{ key: "Length", value: props.length }
			]}
		>
			<DemoDisplayText text={value} />
		</DemoItem>
	);
}

function DemoDateTimeFormat(props: (IDate<Date> & ITimeDisplayStyle<TimeDisplayStyle> & ILength<DateTimeDisplayLength>)): ReactElement {
	const [value] = useDateTimeDisplayState(props.date, props.timeDisplayStyle, props.length);
	return (
		<DemoItem
			config={[
				{ key: "Time", value: props.timeDisplayStyle },
				{ key: "Length", value: props.length }
			]}
		>
			<DemoDisplayText text={value} />
		</DemoItem>
	);
}

function DemoWeekdayFormat(props: (IDate<Date> & ILength<DateTimeDisplayLength>)): ReactElement {
	const [value] = useWeekdayDisplayState(props.date, props.length);
	return (
		<DemoItem
			config={[
				{ key: "Length", value: props.length }
			]}
		>
			<DemoDisplayText text={value} />
		</DemoItem>
	);
}

function DemoMonthMapFormat(props: (ILength<DateTimeDisplayLength>)): ReactElement {
	const [value] = useMonthMapDisplayState(DateMonth.January, props.length);
	return (
		<DemoItem
			config={[
				{ key: "Length", value: props.length }
			]}
		>
			<DemoDisplayText text={value} />
		</DemoItem>
	);
}

function DemoWeekdayMapFormat(props: (ILength<DateTimeDisplayLength>)): ReactElement {
	const [value] = useWeekdayMapDisplayState(DateWeekday.Friday, props.length);
	return (
		<DemoItem
			config={[
				{ key: "Length", value: props.length }
			]}
		>
			<DemoDisplayText text={value} />
		</DemoItem>
	);
}

function DemoDisplayText(props: IText<string>): ReactElement {
	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Text}
			colourScheme={DemoContentColourScheme.Secondary}
			height="auto"
			justify={DemoContentJustify.Start}
			orientation={Orientation.Horizontal}
			overflow={DemoContentOverflow.Auto}
			paddingBottom={10}
			paddingLeft={10}
			paddingRight={10}
			paddingTop={10}
			text={props.text}
			width="100%"
		/>
	);
}
