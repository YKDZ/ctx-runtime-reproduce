export { config };

import type { Config } from "vike/types";
import vikePhoton from "vike-photon/config";
import vikeReact from "vike-react/config";
import { Layout } from "./Layout";

const config = {
  Layout: Layout,
  extends: [vikePhoton, vikeReact],
} satisfies Config;
