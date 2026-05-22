import { TabsBar } from "./components/bar";
import { TabsChildren } from "./components/children";
import { TabsContainer } from "./components/container";
import { TabsItemsResolver } from "./components/items-resolver";
import { TabsProvider } from "./components/provider";
import type { TabsProps } from "./types/tabs-props.type";

/**
 * Tabs component
 */
export function Tabs(props: TabsProps) {
	return (
		<TabsProvider>
			<TabsContainer style={props.style}>
				<TabsChildren key="children">
					{props.children}
				</TabsChildren>
				<TabsBar key="bar">
					<TabsItemsResolver
						{...props}
						key="item-resolver"
					/>
				</TabsBar>
			</TabsContainer>
		</TabsProvider>
	);
}
