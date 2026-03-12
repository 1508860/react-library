import { useState, type ReactElement } from "react";

import {
	DateDisplayStyle,
	DateTimeDisplayLength,
	generateGuid,
	Orientation,
	TimeDisplayStyle,
	useDateDisplayState,
	useDateTimeDisplayState,
	useTimeDisplayState,
	type IDate,
	type IDateStyle,
	type IId,
	type ILength,
	type ITimeStyle,
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
	const [timeStyles] = useState<Array<TimeDisplayStyle>>(() => Object.values(TimeDisplayStyle));
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
					timeStyles.map((timeStyle, i) =>
						dateTimeLengths.map((dateTimeLength, i2) =>
							<DemoTimeFormat
								date={dateState.date}
								key={`${dateState.id}-${(i + 1) * (i2 + 1)}`}
								length={dateTimeLength}
								timeStyle={timeStyle}
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
					timeStyles.map((timeStyle, i) =>
						dateTimeLengths.map((dateTimeLength, i2) =>
							<DemoDateTimeFormat
								date={dateState.date}
								key={`${dateState.id}-${(i + 1) * (i2 + 1)}`}
								length={dateTimeLength}
								timeStyle={timeStyle}
							/>
						)
					)
				}
			</DemoSection>
		</>
	);
}

function DemoDateFormat(props: (IDate<Date> & IDateStyle<DateDisplayStyle> & ILength<DateTimeDisplayLength>)): ReactElement {
	const [dateDisplay] = useDateDisplayState(props.date, props.dateStyle, props.length);
	return (
		<DemoItem
			config={[
				{ key: "Date", value: props.dateStyle },
				{ key: "Length", value: props.length }
			]}
		>
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
				text={dateDisplay}
				width="100%"
			/>
		</DemoItem>
	);
}

function DemoTimeFormat(props: (IDate<Date> & ITimeStyle<TimeDisplayStyle> & ILength<DateTimeDisplayLength>)): ReactElement {
	const [timeDisplay] = useTimeDisplayState(props.date, props.timeStyle, props.length);
	return (
		<DemoItem
			config={[
				{ key: "Time", value: props.timeStyle },
				{ key: "Length", value: props.length }
			]}
		>
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
				text={timeDisplay}
				width="100%"
			/>
		</DemoItem>
	);
}

function DemoDateTimeFormat(props: (IDate<Date> & ITimeStyle<TimeDisplayStyle> & ILength<DateTimeDisplayLength>)): ReactElement {
	const [dateTimeDisplay] = useDateTimeDisplayState(props.date, props.timeStyle, props.length);
	return (
		<DemoItem
			config={[
				{ key: "Time", value: props.timeStyle },
				{ key: "Length", value: props.length }
			]}
		>
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
				text={dateTimeDisplay}
				width="100%"
			/>
		</DemoItem>
	);
}
