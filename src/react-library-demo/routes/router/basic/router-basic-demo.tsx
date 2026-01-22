import { RouterProvider } from "@react-library/router";

import { DemoSection } from "@react-library-demo/shared";

import { ROUTER_BASIC_DEMO_ROUTER } from "./constants/router-basic-demo-router.const";

export function ReactLibraryRouterBasicDemo() {
	return (
		<DemoSection title="Router - Basic">
			<RouterProvider routes={ROUTER_BASIC_DEMO_ROUTER} />
		</DemoSection>
	);
}
