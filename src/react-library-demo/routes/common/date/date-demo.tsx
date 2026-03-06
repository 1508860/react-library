import { useState, type ReactElement } from "react";

import {
	DateDisplayStyle,
	generateGuid,
	Orientation,
	TimeDisplayStyle,
	useDateDisplayState,
	useDateTimeDisplayState,
	useTimeDisplayState,
	type IDate,
	type IDateStyle,
	type IId,
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

	return (
		<>
			<DemoSection
				key="date"
				title="Date"
			>
				{dateStyles.map((dateStyle, i) =>
					<DemoDateFormat
						date={dateState.date}
						dateStyle={dateStyle}
						key={`${dateState.id}-${i}`}
					/>
				)}
			</DemoSection>
			<DemoSection
				key="time"
				title="Time"
			>

				{timeStyles.map((timeStyle, i) =>
					<DemoTimeFormat
						date={dateState.date}
						key={`${dateState.id}-${i}`}
						timeStyle={timeStyle}
					/>
				)}
			</DemoSection>
			<DemoSection
				key="date-time"
				title="Date & Time"
			>
				{
					dateStyles.map((dateStyle, i) =>
						timeStyles.map((timeStyle, i2) =>
							<DemoDateTimeFormat
								date={dateState.date}
								dateStyle={dateStyle}
								key={`${dateState.id}-${i * i2}`}
								timeStyle={timeStyle}
							/>
						)
					)
				}
			</DemoSection>
		</>
	);
}

function DemoDateFormat(props: (IDate<Date> & IDateStyle<DateDisplayStyle>)): ReactElement {
	const [dateDisplay] = useDateDisplayState(props.date, props.dateStyle);
	return (
		<DemoItem
			config={[
				{ key: "Date", value: props.dateStyle }
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

function DemoTimeFormat(props: (IDate<Date> & ITimeStyle<TimeDisplayStyle>)): ReactElement {
	const [timeDisplay] = useTimeDisplayState(props.date, props.timeStyle);
	return (
		<DemoItem
			config={[
				{ key: "Time", value: props.timeStyle }
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

function DemoDateTimeFormat(props: (IDate<Date> & IDateStyle<DateDisplayStyle> & ITimeStyle<TimeDisplayStyle>)): ReactElement {
	const [dateTimeDisplay] = useDateTimeDisplayState(props.date, props.dateStyle, props.timeStyle);
	return (
		<DemoItem
			config={[
				{ key: "Date", value: props.dateStyle },
				{ key: "Time", value: props.timeStyle }
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
