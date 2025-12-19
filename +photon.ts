// https://vike.dev/vike-photon
import type { Config } from "vike/types";

export default {
  server: "./server/index.ts",
  standalone: {
    bundle: true,
  },
} satisfies Config["photon"];
