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
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
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
								key={`${dateState.id}-${i * i2}`}
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
								key={`${dateState.id}-${i * i2}`}
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
								key={`${dateState.id}-${i * i2}`}
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
				childrenType={DemoContentChildren.Text}
				colourScheme={DemoContentColourScheme.Secondary}
				height="auto"
				justify={DemoContentJustify.Start}
				orientation={Orientation.Horizontal}
				text={dateDisplay}
				paddingBottom={10}
				paddingLeft={10}
				paddingRight={10}
				paddingTop={10}
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
				childrenType={DemoContentChildren.Text}
				colourScheme={DemoContentColourScheme.Secondary}
				height="auto"
				justify={DemoContentJustify.Start}
				orientation={Orientation.Horizontal}
				text={timeDisplay}
				paddingBottom={10}
				paddingLeft={10}
				paddingRight={10}
				paddingTop={10}
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
				childrenType={DemoContentChildren.Text}
				colourScheme={DemoContentColourScheme.Secondary}
				height="auto"
				justify={DemoContentJustify.Start}
				orientation={Orientation.Horizontal}
				text={dateTimeDisplay}
				paddingBottom={10}
				paddingLeft={10}
				paddingRight={10}
				paddingTop={10}
				width="100%"
			/>
		</DemoItem>
	);
}
