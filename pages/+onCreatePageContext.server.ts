import type { PageContextServer } from "vike/types";

export const onCreatePageContext = (ctx: PageContextServer) => {
  console.log(ctx.runtime);
};
