import type { TabsPropsContentAll } from "../../../types/tabs-props-content.type";
import type { TabsPropsStyleAll } from "../../../types/tabs-props-style.type";
import type { TabsPropsValue } from "../../../types/tabs-props-value.type";

/**
 * Describes props for the tabs items resolver component
 */
export type TabsItemsResolverProps = (
	TabsPropsContentAll &
	TabsPropsStyleAll &
	TabsPropsValue
);
